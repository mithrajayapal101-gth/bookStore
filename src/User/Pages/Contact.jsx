import React from 'react'
import Header from '../Components/Header'
import Footer from '../../components/Footer'
import { FaLocationPin } from 'react-icons/fa6'
import { FaEnvelope, FaPaperPlane, FaPhone, FaTelegram } from 'react-icons/fa'

function Contact() {
  return (
    <>
    <Header/>
      <div className="md:px-20 my-5 p-5">
        <div className="text-center font-bold text-3xl my-5">Contact</div>
        <p className="text-justify">Have questions,feedback or need help finding the perfect book?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consequuntur, numquam ipsa ipsum quam corporis! Nam, ipsam vitae. Tempore ipsum possimus molestiae porro ab. Doloremque, harum. Dignissimos eaque id laudantium!
        Nisi, nemo quidem repellat voluptatem impedit non cum fugit aliquam sed corrupti corporis maxime. Assumenda odit placeat ea? Perspiciatis quam itaque adipisci dolores provident! Quam temporibus sapiente nesciunt doloremque at.
        Enim porro quisquam, aspernatur, est dolorum tenetur iure quaerat eius, repellendus quod dolor nulla repellat aperiam adipisci labore iste dolore quo architecto consequuntur tempora doloremque. Repellat natus soluta voluptatum amet!
        Ipsam optio iste quisquam praesentium, obcaecati similique facere est error ipsa sunt, voluptatibus magni atque eum laborum, cupiditate rem pariatur veritatis a temporibus harum accusantium. Doloribus esse assumenda laudantium alias?
        Hic quis beatae a consequuntur deserunt eaque, laborum ullam. Doloremque similique quam accusamus blanditiis omnis explicabo consequatur suscipit, nisi quidem minima eligendi magni illo amet necessitatibus animi molestiae culpa temporibus!</p>

        <div className="md:grid grid-cols-3 p-5 mt-5 items-center md:px-40 md:mt-0">
          {/* location */}
          <div className='flex items-center'>
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center bg-gray-300'>
              <FaLocationPin/>
            </div>
            <p className='ms-5'>123 Main Street,plot no 12  ,  Apt 4B  ,  Anytown  ,  CA 91234</p>
          </div>
          {/* number */}
          <div className='flex items-center'>
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center bg-gray-300'>
              <FaPhone/>
            </div>
            <p className='ms-5'>+91 963788422</p>
          </div>
          {/* email */}
          <div className='flex items-center'>
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center bg-gray-300'>
              <FaEnvelope/>
            </div>
            <p className='ms-5'>bookStore123@gmail.com</p>
          </div>
        </div>
        {/* message and map */}
        <div className="md:grid grid-cols-2 gap-10 my-5 p-5 md:px-40">
          <div className='bg-gray-300 text-center p-5'>
            <h1 className='font-semi-bold text-2xl'>Send Us Message!</h1>
            <form>
              <div className='mb-5 mt-10'>
                <input type="text" placeholder='Name' className='bg-white w-full p-2' />
                </div>
                <div className='mb-5 mt-5'>
                <input type="email" placeholder='Email' className='bg-white w-full p-2' />
                </div>
                <div className='mb-5 mt-5'>
                <textarea type="text" placeholder='Name' className='bg-white w-full p-2' />
                </div>
                <div className="my-5">
                  <button className='bg-black text-white w-full p-2 rounded flex justify-center items-center'>Submit <FaPaperPlane /></button>
                </div>
            </form>
          </div>
          {/* map */}
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.9997861317356!2d76.34402687480716!3d10.01687539008924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080db66a7a4969%3A0xb2f4389b4e7ef9ee!2sGranthapura%20%7C%20Library%20%26%20Bookstore!5e0!3m2!1sen!2sin!4v1795065844321!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
        </div>
        
      </div>
      <Footer/>
    </>
  )
}

export default Contact
