import React from 'react'
import online from '../assets/images/icon-online.svg'
import api from '../assets/images/icon-api.svg'
import budgeting from '../assets/images/icon-budgeting.svg'
import onboarding from '../assets/images/icon-onboarding.svg'
const Aside = () => {
    return (
        <>
            <div className='max-w-[1440px] flex flex-col justify-center items-center lg:items-start text-center gap-4 mt-8 bg-VeryLightGray p-3 m-auto '>
                <div >
                    <h2 className='text-3xl mx-4 mb-4 lg:text-left lg:pt-8'> Why choose Easybank?</h2>
                    <p className='text-GrayishBlue mx-2 lg:text-left lg:pl-3'> We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>    
                </div>
                <div className='md:flex md:justify-center md:items-center md:gap-4 md:mt-8 p-5'>
                    <div className='flex flex-col justify-center items-center gap-3 mb-9 md:items-start md:text-left'>
                        <img src={online} alt="online" />
                        <h4 className='text-xl '>Online Banking</h4>
                        <p className='text-GrayishBlue '>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-3 mb-9 md:items-start md:text-left'>
                        <img src={budgeting} alt="budgeting" />
                        <h4  className='text-xl '>Simple Budgeting</h4>
                        <p className='text-GrayishBlue '>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-3 mb-9 md:items-start md:text-left'>
                        <img src={onboarding} alt="onboarding" />
                        <h4  className='text-xl '> Fast Onboarding</h4>
                        <p className='text-GrayishBlue '>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-3 mb-9 md:items-start md:text-left'>
                        <img src={api} alt="api" />
                        <h4  className='text-xl '>Open API</h4>
                        <p className='text-GrayishBlue '>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aside