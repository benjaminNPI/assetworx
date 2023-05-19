import React from 'react'

const Client = () => {
    return (
        <div className='ourClients py-32'>
            <div className='md:flex bg-[#15BBAB] w-full justify-around'>
                <div className='md:py-36'>
                    <h1 className='text-white font-bold text-4xl uppercase text-center md:mr-20'>Our Clients</h1>
                    <hr className='text-darkblue border-t-4 rounded md:mr-20'></hr>
                </div>
                <div className='order-first md:flex p-5  md:justify-center'>
                    <img className='m-auto'
                        style={{ minWidth: "300px", maxWidth: "300px" }}
                        src='/img/company-sponsor-2.png' alt='Our Clients'></img>
                    <img className='m-auto'
                        style={{ minWidth: "300px", maxWidth: "300px" }}
                        src='/img/company-sponsor.png' alt='Our Clients'></img>
                </div>
            </div>
        </div>
    )
}

export default Client