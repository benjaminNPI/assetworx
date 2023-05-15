import React from 'react'

const Services = () => {
    return (
        <div className='justify-center bg-no-repeat bg-cover bg-center bluewave py-24'>
            <div>
                <div className='text-center'>
                    <h1 className='text-white font-bold text-3xl uppercase'>Our Services</h1>
                    <hr className='text-green border-t-4 rounded'></hr>
                </div>
                <div className='flex flex-wrap max-w-4xl justify-center'>
                    <div className='my-5 flex flex-col justify-center w-full sm:w-1/2 md:w-1/4'>
                        <div className='bg-green rounded-full p-2 w-40 h-40 m-auto'>
                            <img className="rounded-full w-36 h-36 " src="/img/background-1010.webp" alt="Data Destruction" />
                        </div>
                        <h1 className='text-center text-white font-bold'>Data Destruction</h1>
                        <p className='text-center text-white mt-2 px-4  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className='my-5 flex flex-col justify-center w-full sm:w-1/2 md:w-1/4'>
                        <div className='bg-green rounded-full p-2 w-40 h-40 m-auto'>
                            <img className="rounded-full w-36 h-36" src="/img/motherboard.webp" alt="Data Destruction" />
                        </div>
                        <h1 className='text-center text-white font-bold'>IT Liquidation</h1>
                        <p className='text-center text-white mt-2 mx-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className='my-5 flex flex-col justify-center w-full sm:w-1/2 md:w-1/4'>
                        <div className='bg-green rounded-full p-2 w-40 h-40 m-auto'>
                            <img className="rounded-full w-36 h-36" src="/img/data-center.webp" alt="Data Destruction" />
                        </div>
                        <h1 className='text-center text-white font-bold'>Data Decommisioning</h1>
                        <p className='text-center text-white mt-2 mx-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className='my-5 flex flex-col justify-center w-full sm:w-1/2 md:w-1/4'>
                        <div className='bg-green rounded-full p-2 w-40 h-40 m-auto'>
                            <img className="rounded-full w-36 h-36" src="/img/recycle-hand.webp" alt="Data Destruction" />
                        </div>
                        <h1 className='text-center text-white font-bold'>Recycling</h1>
                        <p className='text-center text-white mt-2 mx-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Services