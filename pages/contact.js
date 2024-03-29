import React from 'react'
import Image from 'next/image'

const contact = () => {
    return (
        <div className='bg-gradient-to-r from-slate-400 to-slate-300'>
            <section className='relative'>
                <div>
                    <Image
                        src="/media/smiling_kids3.jpg"
                        height="900"
                        width="1920"
                        alt="Contact page banner"
                    />
                </div>
                <div className='absolute w-full bottom-2 md:top-1/2'>
                    <div className='w-1/3 mx-auto bg-black rounded-xl opacity-90 p-3 md:w-1/4'>
                        <h2 className='font-semibold text-center text-lg animate-pulse text-white sm:text-xl md:text-2xl md:uppercase lg:text-3xl xl:text-4xl'>Contact Us</h2>
                    </div>
                </div>
            </section>
            <section className='pt-5 space-y-5 sm:space-y-7 md:pt-8 lg:pt-10 lg:space-y-10 xl:space-y-12 xl:pt-12'>
                <div className='w-2/3 mx-auto py-5 rounded-xl bg-gradient-to-r from-slate-300 to-slate-400 shadow-xl sm:w-3/5 md:py-8 md:flex md:justify-around lg:hover:scale-105 transition-all ease-in-out lg:py-10 xl:py-12'>
                    <div className='md:w-1/2 md:px-2'>
                        <div className='animate-pulse w-1/6 mx-auto lg:my-auto'>
                            <Image
                                src="/media/call.png"
                                height="512"
                                width="512"
                                alt="Call icon"
                            />
                        </div>
                        <div className='py-3 px-2 mb-5 mx-auto sm:mb-7 lg:w-4/6 lg:my-auto'>
                            <a href="tel:917453888262">
                                <p className='text-center text-sm font-medium mb-1 lg:text-base md:mb-2'>Phone: +91 7453888262</p>
                            </a>
                            <a href="mailto:ananya.agrawal2020@vitbhopal.ac.in">
                                <p className='text-center text-sm font-medium lg:text-base'>Email: ananya.agrawal2020@vitbhopal.ac.in</p>
                            </a>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:px-2'>
                        <div className='animate-pulse w-1/6 mx-auto'>
                            <Image
                                src="/media/location.png"
                                height="512"
                                width="512"
                                alt="Call icon"
                            />
                        </div>
                        <div className='py-3 px-2'>
                            <p className='text-center text-sm mb-1 lg:text-base'>New Boys Hostel</p>
                            <p className='text-center text-sm mb-1 lg:text-base'>VIT Bhopal</p>
                            <p className='text-center text-sm mb-1 lg:text-base'>Madhya Pradesh</p>
                        </div>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117451.96033976768!2d76.84179014850663!3d23.083409830914157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce9ceaaaaaaab%3A0xa224b6b82b421f83!2sVellore%20Institute%20of%20Technology%20-%20VIT%20Bhopal!5e0!3m2!1sen!2sin!4v1650650126044!5m2!1sen!2sin" loading="lazy" className='w-full h-80'></iframe>
            </section>
        </div>
    )
}

export default contact