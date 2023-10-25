import React from 'react'
import restaurant from '../assets/images/image-restaurant.jpg'
import confetti from '../assets/images/image-confetti.jpg'
import currency from '../assets/images/image-currency.jpg'
import plane from '../assets/images/image-plane.jpg'
const Article = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-VeryLightGray gap-5 p-4 max-w-[1440px] md:items-start md:m-auto' >
            <h2 className='text-3xl '>Latest Articles</h2>
            <div className='md:flex md:flex-wrap md:items-center md:justify-center  gap-5 lg:gap-9 '>

            
                <div className='flex flex-col w-[250px] md:w-[280px] lg:w-[320px] mb-6'>
                    <img src={currency} alt="currency" className='w-full h-[200px] rounded-t-md'/>
                    <div className='p-5 flex flex-col gap-3 px-4  bg-White'>
                        <p className='text-xs text-GrayishBlue'>By Claire Robinson</p>
                        <h4 className='text-lg'>Receive money in any currency with no fees</h4>
                        <p className='text-sm text-GrayishBlue'> The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                    </div>
                </div>

                <div className='flex flex-col w-[250px] md:w-[280px] lg:w-[320px] mb-6'>
                    <img src={restaurant} alt="restaurant" className='w-full rounded-t-md' />
                    <div className='p-5 flex flex-col gap-3 px-4 bg-White'>
                        <p className='text-xs text-GrayishBlue'>By Wilson Hutton</p>
                        <h4 className='text-lg'>Treat yourself without worrying about money</h4>
                        <p className='text-sm text-GrayishBlue'>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                    </div>
                </div>

                <div className='flex flex-col w-[250px] md:w-[280px] lg:w-[320px] mb-6'>
                    <img src={plane} alt="plane" className='w-full rounded-t-md' />
                    <div className='p-5 flex flex-col gap-3 px-4  bg-White'>
                        <p className='text-xs text-GrayishBlue'>By Wilson Hutton</p>
                        <h4 className='text-lg'>Take your Easybank card wherever you go</h4>
                        <p className='text-sm text-GrayishBlue'>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                    </div>
                </div>

                <div className='flex flex-col w-[250px] md:w-[280px] lg:w-[320px] mb-6'>
                    <img src={confetti} alt="confetti" className='w-full rounded-t-md' />
                    <div className='p-5 flex flex-col gap-3 px-4  bg-White'>
                        <p className='text-xs text-GrayishBlue'>By Claire Robinson</p>
                        <h4 className='text-lg'>Our invite-only Beta accounts are now live!</h4>
                        <p className='text-sm text-GrayishBlue'>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                    </div>
                </div>  
            </div>  
        </div>
    )
}

export default Article