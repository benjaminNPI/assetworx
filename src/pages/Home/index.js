import React from 'react'
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <main>
            <div className="flex-col text-center flex justify-center ">
                <img className='mx-auto mt-20' src="https://via.placeholder.com/300" alt='ASSETWORX Company Logo' height={300} width={300}></img>
                <h1 className='text-white text-2xl my-6 mx-8 font-bold'>YOUR ASSETS, YOUR INVESTMENTS, OUR EXPERTISE</h1>
                <p className='text-white mx-8 mt-4 mb-10 sm:mx-10 lg:mx-20 xl:mx-20 xl:px-32 2xl:mx-72 2xl:px-32 font-semibold'>A Lifecycle Service that Worx. With years of experience our processes are streamlined and efficient. This means that nothing
                    is missed or left behind. With a number of solutions, our clients will be able to find one that meets their needs</p>
                <Link
                    type="button"
                    className="hover:bg-white hover:text-black inline-block mx-auto rounded-full border-2 border-primary px-6 pt-2 pb-[6px] font-medium uppercase text-white"
                    style={{width:"200px",}}
                    >
                    Get Started
                </Link>
            </div>

        </main>
    )
}

export default Home