

import React, { useEffect, useState } from 'react'
import { Gem, Sparkles } from 'lucide-react'
import { Protect } from '@clerk/clerk-react'
import CreationItem from '../components/CreationItem'
import { useAuth } from '@clerk/clerk-react';
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const Dashboard = () => {
  const [creations,setCreations] = useState([])
  const [loading,setLoading] = useState(true)
  const {getToken} = useAuth();
  const navigate = useNavigate();

  const getDashboardData = async ()=>{
    try {
      const { data } = await axios.get("/api/user/get-user-creations",{
        headers: { Authorization: `Bearer ${await getToken()}` }
      });

      if (data.success) {
        setCreations(data.creations);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }
    
  useEffect(()=>{
    getDashboardData()
  },[])

  return (
    <div className='h-full overflow-y-scroll p-6 scrollbar-hide'>
      <div className='flex justify-start gap-4 flex-wrap'>
        <div className='flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200'>
          <div className='text-slate-600'>
            <p className='text-sm'>Total Creations</p>
            <h2 className='text-xl font-semibold'>{creations.length}</h2>
          </div>
          <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588f2] to-[#0bb0d7] text-white flex justify-center items-center'>
            <Sparkles className='w-5 text-white' />
          </div>
        </div>

        <div className='flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200'>
          <div className='text-slate-600'>
            <p className='text-sm'>Active Plan</p>
            <Protect plan="premium" fallback="Free">Premium</Protect>
          </div>
          <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff61c5] to-[#9e53ee] text-white flex justify-center items-center'>
            <Gem className='w-5 text-white' />
          </div>
        </div>
      </div>
      {
        loading ? (
          <div className='flex justify-center items-center h-3/4'>
            <div className='animate-spin rounded-full h-11 w-11 border-3 border-purple-500 border-t-transparent'></div>
          </div>
        ) : (
          <div className='mt-6 space-y-4'>
            <h2 className='text-xl font-semibold mb-4 text-gray-800'>Recent Creations</h2>

            {creations.length === 0 ? (
              <div className='flex flex-col items-center justify-center py-16 bg-white rounded-xl shadow-md border border-gray-200'>
                <p className='text-gray-500 text-center mb-4 text-lg'>
                  You have no recent creations yet.
                </p>
                <button
                  onClick={() => navigate("/ai/write-article")}
                  className='px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition'
                >
                  Create Creation
                </button>
              </div>
            ) : (
              <div className='flex flex-col gap-4'>
                {creations.map((item) => (
                  <CreationItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        )
      }

    </div>
  )
}

export default Dashboard

