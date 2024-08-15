import React from 'react'
import {RiDribbbleFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill, RiYoutubeFill, RiFacebookFill} from 'react-icons/ri'
import { Link } from 'react-router-dom';

const SocialIcons = () => {
  return (
    <div className='flex gap-6 pr-4'>
        <Link to={''} className='text-[#fff] text-2xl hover:-translate-y-1 transition-all duration-500'><RiYoutubeFill /></Link>
        <Link to={''} className='text-[#fff] text-2xl hover:-translate-y-1 transition-all duration-500'><RiInstagramFill /></Link>
        <Link to={''} className='text-[#eaeaea] text-2xl hover:-translate-y-1 transition-all duration-500'><RiFacebookFill /></Link>
        {/* <Link to={''} className='text-[#f9ed69] text-2xl hover:-translate-y-1 transition-all duration-500'><RiDribbbleFill /></Link> */}
        {/* <Link to={''} className='text-[#5272f2] text-2xl hover:-translate-y-1 transition-all duration-500'><RiGithubFill /></Link> */}
    </div>
  )
}

export default SocialIcons;