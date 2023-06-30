import React from 'react'

const Client = () => {
    return (
        <div className='bg-gradient-to-r from-darkblue to-lightblue '>
            <div className='bluewave imageFlip'>
                <div className='order-first md:flex p-5  md:justify-center '>
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