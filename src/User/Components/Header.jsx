import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
    const [toggle,settoggle]=useState(false)
  return (
    <>
      {/* header top part */}
      <div className='grid grid-cols-3 p-3'>
        {/* logo */}
        <div className='flex items-center'>
            <img width={'50px'} height={'50px'} src="https://png.pngtree.com/png-clipart/20250104/original/pngtree-high-quality-book-stack-for-learning-enthusiasts-png-image_18711858.png" alt="logo" />
            <h1 className="text-2xl ms-3 font-bold md:hidden">BookStore</h1>
        </div>
        {/* title */}
        <div className="md:flex justify-center items-center hidden">
            <h1 className="text-3xl font-bold">BookStore</h1>
        </div>
        {/* login */}
        <div className='md:flex items-center justify-end hidden'>
            <FaInstagram/>
            <FaTwitter className='mx-3'/>
            <FaFacebook/>
            <Link to={'/login'} className='flex justify-center items-center ms-5 border rounded px-3 py-2 hover:bg-black hover:text-white'> <FaUser className='me-1' /> Login</Link>
        </div>
      </div>
      {/* navigation part */}
      <nav className='bg-black w-full text-white md:flex justify-center items-center p-3'>
        <div className="flex justify-between items-center text-2xl md:hidden">
            <button onClick={()=>settoggle(!toggle)}><FaBars/></button>
            <Link to={'/login'} className='flex justify-center items-center ms-5 border boredr-black rounded px-3 py-2 hover:bg-black hover:text-white'> <FaUser className='me-1' /> Login</Link>
        </div>
        <ul className={toggle?'flex flex-col':'md:flex hidden'}>
            <li><Link className='md:mx-4' to={'/'}>HOME</Link></li>
            <li><Link className='md:mx-4' to={'/books'}>BOOKS</Link></li>
            <li><Link className='md:mx-4' to={'/contact'}>CONTACT</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Header
