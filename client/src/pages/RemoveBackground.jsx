import { Eraser, Sparkles,Download } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const RemoveBackground = () => {

  const [input,setInput] = useState("")
  const [loading,setLoading] = useState(false)
  const [content,setContent] = useState("")
  const {getToken} = useAuth();

  const handleDownload = async () => {
    try {
      const response = await axios.post(
        "/api/ai/download-image",
        { url: content },
        { responseType: "blob" }
      );
      const blobUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "background-cut-image.png";
      document.body.appendChild(link);
      link.click();
      link.remove();
      toast.success("Downloaded the image")
    } catch (error) {
      console.error(error);
      toast.error("Failed to download the image");
    }
  };
    
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("image",input)

      const { data } = await axios.post("/api/ai/remove-image-background",formData, {
        headers: { Authorization: `Bearer ${await getToken()}` }
      });

      if (data.success) {
        setContent(data.content);
        setInput("")
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }




  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700 scrollbar-hide'>
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#ff4938]'/>
          <h1 className='text-xl font-semibold'>Background Removal</h1>
        </div>
        <p className='mt-6 text-sm font-medium'>Upload image</p>
        <input onChange={(e)=>setInput(e.target.files[0])} accept='image/*' type="file" className='w-full p-2 px-3 mt-2 outline-none cursor-pointer text-sm rounded-md border border-gray-300 text-gray-600' required />
        
        <p className='text-xs text-gray-500 font-light mt-1'>Supports JPG,PNG, and other image formats</p>

        <button disabled={loading} type='submit' className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#f6ab41] to-[#ff4938] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
          {loading ? <span className='w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin'></span>
          : <Eraser className='w-5'/>}
          Remove background
        </button>


      </form>


      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96'>
        <div className='flex items-center gap-3 relative'>
          <Eraser className='w-5 h-5 text-[#ff4938]'/>
          <h1 className='text-xl font-semibold'>Processed Image</h1>
          {content && (<button
            onClick={handleDownload}
            className="absolute top-[-1] right-3 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-300 cursor-pointer"
          >
            <Download className="w-5 h-5" />
          </button>)}
        </div>
        {loading ? (
          <div className='flex-1 flex flex-col justify-center items-center gap-3'>
            <div className='w-10 h-10 border-4 border-gray-300 border-t-transparent rounded-full animate-spin'></div>
            <p className='text-gray-500 text-sm'>Removing Background...</p>
          </div>
        ) : !content ? (
          <div className='flex-1 flex justify-center items-center'>
            <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
              <Eraser className='w-9 h-9' />
              <p>Enter a topic and click "Removing Background" to get started</p>
            </div>
          </div>
        ) : (
            <div className='mt-3 h-full'>
              <img src={content} alt="image" className='w-full h-full' />
            </div>
          )}


      </div>
    </div>
  )
}

export default RemoveBackground