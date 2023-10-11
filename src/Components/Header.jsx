import React from 'react'
import imgMobile from '../assets/images/bg-intro-mobile.svg'
import imgDesktop from '../assets/images/bg-intro-desktop.svg'


const Header = () => {
    return (
        <header>
            <img src={imgMobile} alt="mobile" />
            <img src={imgDesktop} alt="desktop" className='hidden'/>
            <h1>Next generation digital banking</h1>
            <h4>
            Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
            </h4>
            <button className='hidden md:block bg-gradient-to-r from-LimeGreen to-BrightCyan  py-2 px-5 rounded-2xl text-sm text-White'>Request Invite</button>
        </header>
    )
}

export default Header