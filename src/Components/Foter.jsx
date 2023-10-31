import React from 'react'
import logo from '../assets/images/logo2.svg'
import face from '../assets/images/icon-facebook.svg'
import insta from '../assets/images/icon-instagram.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import tw from '../assets/images/icon-twitter.svg'
import youtube from '../assets/images/icon-youtube.svg'
const Footer = () => {
    return (
        <div className='w-screen bg-DarkBlue '>
            <div className='flex flex-col justify-center items-center gap-8 py-8 md:flex-row md:justify-between max-w-[1440px] m-auto md:px-16'>
                <div className='flex flex-col justify-center items-center gap-8 md:gap-10 md:items-start'>
                    <img src={logo} alt="logo" className='w-32 ' />
                    <div className='flex justify-center items-center gap-3 md:col-1 md:row '>
                        <img src={face} alt="face" />
                        <img src={youtube} alt="youtube" />
                        <img src={tw} alt="tw" />
                        <img src={pinterest} alt="pinterest" />
                        <img src={insta} alt="insta" />
                    </div>
                </div>
                <ul className='flex flex-col gap-3 text-GrayishBlue justify-center items-center  md:grid md:grid-cols-2 md:grid-rows-3 lg:-ml-32 '>
                    <li>
                        <a href="/">About Us</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                    <li>
                        <a href="/">Blog</a>
                    </li>
                    <li>
                        <a href="/">Careers</a>
                    </li>
                    <li >
                        <a href="/">Support</a>
                    </li>
                    <li>
                        <a href="/">Privacy Policy</a>
                    </li>
                
                </ul>
                <div className='flex flex-col justify-center items-center gap-8 md:items-end '>
                    <button className=' bg-gradient-to-r from-LimeGreen to-BrightCyan  py-2 px-5 rounded-2xl text-sm text-White cursor-pointer'>Request Invite</button>
                    <p className='text-xs text-GrayishBlue '>© EasyBank. All Rights Reserved</p>
                </div>
            </div>
           
        </div>
    )
}

export default Footer