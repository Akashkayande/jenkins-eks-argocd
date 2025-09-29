
import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import { assets } from '../assets/assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useUser()
  const { openSignIn } = useClerk()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Docs", path: "/docs" },
  ]

  return (
    <div className='fixed z-50 w-full backdrop-blur-2xl flex justify-between font-bold items-center py-3 px-4 sm:px-20 xl:px-32 shadow-md'>
      <img
        src={assets.logo}
        alt="logo"
        className='w-32 sm:w-44 cursor-pointer'
        onClick={() => navigate("/")}
      />
      <div className='hidden md:flex gap-8'>
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'
                : 'text-gray-700 hover:text-blue-500 transition'
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <div className='flex items-center gap-4'>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={openSignIn}
            className='hidden sm:flex items-center gap-2 rounded-full text-sm cursor-pointer bg-[#5044e5] text-white px-6 py-2 hover:bg-indigo-600 transition'
          >
            Get Started <ArrowRight className='w-4 h-4' />
          </button>
        )}
        <div className='md:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className='absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden'>
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold mb-2'
                  : 'text-gray-700 hover:text-blue-500 mb-2'
              }
            >
              {item.name}
            </NavLink>
          ))}
          {!user && (
            <button
              onClick={() => { openSignIn(); setMenuOpen(false) }}
              className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-[#5044e5] text-white px-6 py-2 hover:bg-indigo-600 transition mt-2'
            >
              Get Started <ArrowRight className='w-4 h-4' />
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default Navbar
