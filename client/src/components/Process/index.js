import React from 'react'
import { useEffect } from 'react';

const Process = () => {


    useEffect(() => {
        const mediaQuery768 = window.matchMedia('(min-width: 768px)')
        const mediaQuery767 = window.matchMedia('(max-width: 767px)')


        if (mediaQuery768.matches) {
            // Fetch all the details element.
            const details = document.querySelectorAll("details");

            // Add the onclick listeners.
            details.forEach((targetDetail) => {
                targetDetail.addEventListener("click", () => {
                    // Close all the details that are not targetDetail.
                    details.forEach((detail) => {
                        if (detail === targetDetail) {
                            detail.classList.remove("md:w-1/5");
                            detail.classList.remove("md:w-1/6");
                            detail.classList.add("md:w-1/3");
                        }
                        if (detail !== targetDetail) {
                            detail.removeAttribute("open");
                            detail.classList.remove("md:w-1/5");
                            detail.classList.remove("md:w-1/3");
                            detail.classList.add("md:w-1/6");
                        }
                    });
                });
            });
        };

        if (mediaQuery767.matches) {
            // Fetch all the details element.
            const details = document.querySelectorAll("details");

            // Add the onclick listeners.
            details.forEach((targetDetail) => {
                targetDetail.addEventListener("click", () => {
                    // Close all the details that are not targetDetail.
                    details.forEach((detail) => {
                        if (detail !== targetDetail) {
                            detail.removeAttribute("open");
                        }
                    });
                });
            });
        }
    });
    return (
        <div>
            <div className='justify-center bg-no-repeat bg-cover bg-center process pt-12'>
                <div className='text-center'>
                    <h1 className='text-white font-bold text-3xl uppercase'>The Process</h1>
                    <hr className='text-darkblue border-t-4 rounded'></hr>
                    <p className='text-white max-w-lg m-5'>With years of experience our processes are streamlined and efficient. This means that nothing is missed or left behind. With a number of solutions our clients will be able to find a solution that meets their needs.</p>
                </div>
            </div>
            <main className="mx-auto">
                <section className="grid grid-cols-1 divide-y md:flex md:flex-row w-100">
                    <details className="group py-1 text-lg border-none flex justify-center md:w-1/5 ">
                        <summary className="flex sm:flex-wrap cursor-pointer text-xl font-bold flex-row flex-col items-center py-1 text-gray-800 marker:[font-size:0px] m-10">
                            <img className='' style={{ minWidth: "100px", maxWidth: "100px" }} src='/img/forklift.svg' alt=''></img>
                            PICKUP
                        </summary>
                        <p className="text-gray-500 text-center">No matter where you are located our team will help you create a solution to gather your assets. </p>
                    </details>

                    <details className="group py-1 text-lg border-none md:w-1/5 bg-[#C4EEEA]">
                        <summary className=" flex sm:flex-wrap cursor-pointer text-xl font-bold flex-row flex-col items-center py-1 text-gray-800 marker:[font-size:0px] mt-16">
                            <img className='' style={{ minWidth: "100px", maxWidth: "100px" }} src='/img/box-truck.svg' alt=''></img>
                            TRANSPORT
                        </summary>
                        <p className="text-gray-500 text-center">Sealed transportation and chain of custody.
                        </p>
                    </details>

                    <details className="group py-1 text-lg border-none md:w-1/5 bg-[#8ADDD5]">
                        <summary className=" flex sm:flex-wrap cursor-pointer text-xl font-bold flex-row flex-col items-center py-1 text-gray-800 marker:[font-size:0px] m-10">
                            <img className='' style={{ minWidth: "100px", maxWidth: "100px" }} src='/img/gear-2-gear.svg' alt=''></img>
                            PROCESSING
                        </summary>
                        <div className="text-gray-500 text-center list-decimal">
                            <li className=''>Serial number tracking</li>
                            <li className=''>Data destruction</li>
                            <li className=''>Test and refurbish</li>
                        </div>
                    </details>
                    <details className="group py-1 text-lg border-none md:w-1/5 bg-[#50CCC0]">
                        <summary className=" flex sm:flex-wrap cursor-pointer text-xl font-bold flex-row flex-col items-center py-1 text-gray-800 marker:[font-size:0px] mt-14">
                            <img className='' style={{ minWidth: "100px", maxWidth: "100px" }} src='/img/desktop-computer.svg' alt=''></img>
                            RESELL
                        </summary>
                        <p className="text-gray-500 text-center">Resell equipment to multiple market channels to maximize revenue recovery.</p>
                    </details>
                    <details className="group py-1 text-lg border-none md:w-1/5 bg-[#16BBAB]">
                        <summary className=" flex sm:flex-wrap cursor-pointer text-xl font-bold flex-row flex-col items-center py-1 text-gray-800 marker:[font-size:0px] m-10">
                            <img className='' style={{ minWidth: "100px", maxWidth: "100px" }} src='/img/recycle.svg' alt=''></img>
                            RECYCLE
                        </summary>
                        <p className="text-gray-500 text-center">Breakdown to be recycled for base materials
                        </p>
                    </details>
                </section>
            </main>

        </div>
    )
}
export default Process