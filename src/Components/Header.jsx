import React from 'react'
import imgMockups from '../assets/images/image-mockups.png'


const Header = () => {
    return (
        <header className='flex flex-col m-auto lg:flex-row-reverse lg:justify-between lg:items-center lg:h-[485px]  relative  max-w-[1440px]  z-0 '>
            <div className='w-full relative bg-hero-mobile bg-no-repeat mx-auto bg-cover   lg:bg-[right_1rem_top_12rem] xl:bg-[right_2rem_top_12rem] lg:bg-contain lg:bg-hero-desktop '>
             
                <img src={imgMockups} alt="mockups" className='px-7 pt-7 lg:mt-8 m-auto' />
            </div>
           
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