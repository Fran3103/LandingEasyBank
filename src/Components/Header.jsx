import React from 'react'
import imgMockups from '../assets/images/image-mockups.png'
import bgDesktop from '../assets/images/bg-intro-desktop.svg'
import bgMobile from '../assets/images/bg-intro-mobile.svg'

const Header = () => {
    return (
        <header className='flex flex-col m-auto lg:flex-row-reverse lg:justify-between lg:items-center lg:h-[485px]  relative  max-w-[1440px]'>
            {/*<div className='w-full relative  '>
                <img src={bgDesktop} alt="desktop" className='  h-full left-72 mt-20 hidden md:block lg:w-[800px] lg:left-16 lg:right-12 lg:top-0 relative z-0' />
                <img src={bgMobile} alt="desktop" className='  h-full left-72 mt-20 md:hidden ' />
                <img src={imgMockups} alt="mockups" className='h-[60%] sm:h[80%] md:h-[80%]   absolute top-24 z-10 -right-12 lg:h-full' />
            </div>*/}
           
            <div className='flex flex-col justify-center items-center lg:pr-5  text-center gap-6 lg:p-16 lg:pl-6 lg:mt-24 lg:text-left lg:items-start lg:ml-12  w-full '>
                <h1 className='text-4xl md:text-5xl'>Next generation digital banking</h1>
                <h4 className='mx-2 text-sm md:mr-0 text-DarkBlue'>
                Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                </h4>
                <button className='bg-gradient-to-r from-LimeGreen to-BrightCyan  py-2 px-5 rounded-2xl text-sm text-White '>Request Invite</button>
            </div>
        </header>
    )
}

export default Header