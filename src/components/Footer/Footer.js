import React from 'react';
import './Footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { RiMessage2Line } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className='px-5 py-10 mt-16 relative'>
      <div className="footer-content text-center">
        <p className="text-center">
          We're working hard Monday through Friday, starting bright and early with a cup of lightly <br></br> creamed coffee. We prefer email, but feel free to five us a ring for good measure.
        </p>
        <div className="icon flex justify-center items-center py-6">
          <BsFacebook className='ml-2 p-2 cursor-pointer text-white text-4xl bg-cyan-500 rounded-full' />
          <BsGithub className='ml-2 p-2 cursor-pointer text-white text-4xl bg-cyan-500 rounded-full' />
          <BsLinkedin className='ml-2 p-2 cursor-pointer text-white text-4xl bg-cyan-500 rounded-full' />
        </div>
        <p className='text-gray-500 pb-4'>	&copy; All right reserve || 2022 || Copyright @nazmul_hassan</p>  
      </div>
      <div className="message absolute text-xl md:text-3xl text-white cursor-pointer right-3 md:right-6 bottom-3 md:bottom-6 p-3 rounded-full bg-emerald-300">
        <RiMessage2Line />
      </div>
    </footer>
  );
};

export default Footer;