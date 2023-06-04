import React from 'react'

const Cert = () => {
    return (
        <>
            <div className='cert'>
                <div className='p-10'>
                    <div className='justify-around md:flex '>
                        <div className='text-center my-10'>
                            <h1 className='text-[#05FEAB] text-4xl md:text-6xl font-bold '>1,000,000+</h1>
                            <p className='text-white text-2xl'>Company Revenue Recovered</p>
                        </div>
                        <div className='text-center my-10'>
                            <h1 className='text-[#05FEAB] text-4xl md:text-6xl font-bold'>500,000+ lbs</h1>
                            <p className='text-white text-2xl'>E-Waste Recycled</p>
                        </div>
                    </div>
                    <div className='md:flex md:flex-wrap md:justify-center bg-white p-10 rounded-[100px]'>
                        <img src='/img/r2-cert.png' alt='' className='m-auto p-5 md:p-10'></img>
                        <img src='/img/ISO9001.png' alt='' className='m-auto p-5 md:p-10'></img>
                        <img src='/img/ISO14001.png' alt='' className='m-auto p-5 md:p-10'></img>
                        <img src='/img/ISOCertified.png' alt='' className='m-auto p-5 md:p-10'></img>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Cert