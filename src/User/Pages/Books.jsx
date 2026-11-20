import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Books() {
  const [toggle,settoggle]=useState(false)
  return (
    <>
    < Header/>
      <div className='flex flex-col justify-center items-center my-5'>
      <h1 className='font-bold text-3xl my-5'>All Books</h1>
      <div>
        <input type="text" className='border border-gray-300 w-100 p-2' placeholder='Search by book title' />
        <button className='bg-blue-800 rounded text-white p-2 ms-2'>Search</button>
      </div>
      </div>
      {/* filter and books card */}
      <div className="md:grid grid-cols-4 p-5 md:px-40 mb-10">
        {/* filter */}
        <div className="col-span-1">
          <div className="flex justify-between">
            <h1 className='font-bold text-2xl'>Filter</h1>
            <button onClick={()=>settoggle(!toggle)} className='text-2xl md:hidden'><FaBars/></button>
          </div>
          {/* filter category */}
        <div className={toggle?'block':'hidden md:block'}>
           <div className='mt-3'>
              <input name='filtering' type="radio" id='no-filter' />
              <label className='ms-2' for='no-filter' htmlFor="">All</label>
           </div>
           <div className='mt-3'>
              <input name='filtering' type="radio" id='filter' />
              <label className='ms-2' for='filter' htmlFor="">Category</label>
           </div>
        </div>
        </div>
        <div className="col-span-3">
          <div className='md:grid grid-cols-4 mt-5'>
            {/* duplicate */}
            <div className="shadow p-3 m-4 rounded">
              <img width={'100%'} height={'300px'} src="https://lh3.googleusercontent.com/-12VncoodvmI/Xip0jCwxhcI/AAAAAAAAEUc/npzsvaULCgUzfJjLeia65wQ0Cg0o5nWJACLcBGAsYHQ/s1600/1579840644160573-0.png" alt="bookimg" />
              <div className="flex flex-col justify-center items-center mt-4">
                <div className="text-blue-700 font-bold text-xl">Chetan Bhagat</div>
                <div className='text-lg mt-2'>The Girl in Room 105</div>
                <Link to={'/books/:id'} className='bg-blue-800 rounded text-white p-2 mt-2 font-bold'> View Book</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Books

