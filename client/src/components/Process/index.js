import React from 'react'

export const Process = () => {
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
    return (
        <>
            <div className='justify-center bg-no-repeat bg-cover bg-center process pt-24'>
                <div className='text-center'>
                    <h1 className='text-white font-bold text-3xl uppercase'>The Process</h1>
                    <hr className='text-darkblue border-t-4 rounded'></hr>
                    <p className='text-white max-w-lg m-5'>With years of experience our processes are streamlined and efficient. This means that nothing is missed or left behind. With a number of solutions our clients will be able to find a solution that meets their needs.</p>
                </div>
            </div>
            <main className="mx-auto">
                <section className="grid grid-cols-1 divide-y ">
                    <details className="group py-1 text-lg border-none">
                        <summary className="ml-5 flex cursor-pointer text-xl font-bold flex-row items-center justify-between py-1 text-gray-800 marker:[font-size:0px]">
                            PICKUP
                            <svg className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </summary>
                        <p className="text-gray-500 ml-5">No matter where you are located our team will help you create a solution to gather your assets. </p>
                    </details>

                    <details className="group py-1 text-lg border-none" style={{ backgroundColor: "#C4EEEA" }}>
                        <summary className="ml-5 flex cursor-pointer text-xl font-bold flex-row items-center justify-between py-1  ">
                            TRANSPORT
                            <svg className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </summary>
                        <p className="text-gray-500 ml-5">Sealed transportation<br></br>
                            Chain of custody
                        </p>
                    </details>

                    <details className="group py-1 text-lg border-none" style={{ backgroundColor: "#8ADDD5" }}>
                        <summary className="ml-5 flex cursor-pointer text-xl font-bold flex-row items-center justify-between py-1 text-gray-800 marker:[font-size:0px]">
                            PROCESSING
                            <svg className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </summary>
                        <ul className="text-gray-500 ml-5 list-decimal">
                            <li className='ml-5'>Serial number tracking</li>
                            <li className='ml-5'>Data destruction</li>
                            <li className='ml-5'>Test and refurbish</li>
                        </ul>
                    </details>
                    <details className="group py-1 text-lg border-none" style={{ backgroundColor: "#50CCC0" }}>
                        <summary className="ml-5 flex cursor-pointer text-xl font-bold flex-row items-center justify-between py-1 text-gray-800 marker:[font-size:0px]">
                            RESELL
                            <svg className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </summary>
                        <p className="text-gray-500 ml-5">Resell equipment to multiple market channels to maximize revenue recovery.</p>
                    </details>
                    <details className="group py-1 text-lg border-none" style={{ backgroundColor: "#16BBAB" }}>
                        <summary className="ml-5 flex cursor-pointer text-xl font-bold flex-row items-center justify-between py-1 text-gray-800 marker:[font-size:0px]">
                            RECYCLE
                            <svg className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </summary>
                        <p className="text-gray-500 ml-5">Breakdown to be recycled for base materials
                        </p>
                    </details>
                </section>
            </main>

        </>
    )
}
export default Process