import React from 'react'

const Cert = () => {
    return (
        <>
            <div>
                <div className=''>
                    <div className='bg-gradient-to-r from-lightblue to-darkblue'>
                        <div className='justify-around md:flex bluewave '>
                            <div className='text-center my-10 '>
                                <h1 className='text-[#05FEAB] text-4xl md:text-6xl font-bold '>1,000,000+</h1>
                                <p className='text-white text-2xl'>Company Revenue Recovered</p>
                            </div>
                            <div className='text-center my-10'>
                                <h1 className='text-[#05FEAB] text-4xl md:text-6xl font-bold'>500,000+ lbs</h1>
                                <p className='text-white text-2xl'>E-Waste Recycled</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center my-4'>
                        <img src='/img/r2-cert.png' alt='R2-Cert' className='' style={{ maxWidth: "200px" }}></img>
                        <img src='/img/ISO9001.png' alt='ISO9001-Cert ' className='' style={{ maxWidth: "200px" }}></img>
                        <img src='/img/ISO14001.png' alt='ISO14001-Cert' className='' style={{ maxWidth: "200px" }}></img>
                        <img src='/img/ISOCertified.png' alt='ISOCertified' className='' style={{ maxWidth: "200px" }}></img>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Cert