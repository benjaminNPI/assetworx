import React from 'react'

const Home = () => {
    return (
        <main>
            <div className="flex-col text-center flex justify-center ">
                <img className='mx-auto mt-20' src="https://via.placeholder.com/300" alt='ASSETWORX Company Logo' height={300} width={300}></img>
                <h1 className='text-white text-2xl my-6 mx-8'>YOUR ASSETS, YOUR INVESTMENTS, OUR EXPERTISE</h1>
                <p className='text-white mx-8 mt-4 mb-10 sm:mx-10 lg:mx-20 xl:mx-20 xl:px-32 2xl:mx-48 2xl:px-32'>A Lifecycle Service that Worx. With years of experience our processes are streamlined and efficient. This means that nothing
                    is missed or left behind. With a number of solutions, our clients will be able to find one that meets their needs</p>
                <button
                    type="button"
                    style={{width:"200px", backgroundColor:"#1d9585"}}
                    className="hover:bg-black inline-block mx-auto rounded-full border-2 border-primary px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-white"
                    data-te-ripple-init>
                    Get Started
                </button>
            </div>

        </main>
    )
}

export default Home