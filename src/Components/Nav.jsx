import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import menu from  '../assets/images/icon-hamburger.svg'
import menuClose from  '../assets/images/icon-close.svg'

const Nav = () => {

    const [active, setActive] = useState(false)

    const handelActive = () => setActive(!active)

    return (
        <nav className='w-full  bg-LightGrayishBlue '>
            <div className='flex justify-between items-center w-full p-6 px-8 lg:px-16 h-20 bg-LightGrayishBlue relative max-w-[1320px] md:m-auto'>
                <img src={logo} alt="logo" className='w-32 h-6'/>
                <img src={menu} alt="menu logo" className={active ?  'hidden' : 'w-7 h-3 md:hidden cursor-pointer'} onClick={handelActive}/>
                <img src={menuClose} alt="menu close"   className={active ? 'w-4 h-3 cursor-pointer': 'hidden'}onClick={handelActive}/>
                <div className={active ? 'absolute z-10 w-[90%] bg-VeryLightGray flex flex-col gap-4 justify-center items-center p-12 top-24 left-5 rounded-md duration-700 ' : 'absolute  w-[90%] bg-VeryLightGray flex flex-col gap-4 justify-center items-center p-12 top-24 -left-[1000px] rounded-md duration-500 md:relative md:flex-row md:top-0 md:left-0 md:bg-transparent md:w-auto text-GrayishBlue'}>
                    <ul>
                        <li  >
                            <a href="/" className='hover:border-b-4 hover:border-b-BrightCyan duration-200'>Home </a>
                            
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/"  className='hover:border-b-4 hover:border-b-BrightCyan duration-200'>About</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/"  className='hover:border-b-4 hover:border-b-BrightCyan duration-200'>Contact</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/" className='hover:border-b-4 hover:border-b-BrightCyan duration-200'>Blog</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/" className='hover:border-b-4 hover:border-b-BrightCyan duration-200'>Careers</a>
                        </li>
                    </ul>
                </div>
                <button className='hidden md:block bg-gradient-to-r from-LimeGreen to-BrightCyan  py-2 px-5 rounded-2xl text-sm text-White'>Request Invite</button>
            </div>
        </nav>
    )
}

export default Nav