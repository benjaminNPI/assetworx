import { useState, useEffect } from 'react';
import React from 'react'
import { Link } from "react-router-dom";


const RSSHeader = () => {

    const [data, setData] = useState(null);
    const url = 'http://fetchrss.com/rss/64adfcbba39e1139a917d85264adfc891def7c46ec403962.json';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const jsonData = await response.json();
                setData(jsonData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            <div className='bg-green'>

                {data ? (
                    <div className="">
                        <div className='lg:flex text-center w-100 lg:max-h-80 xl:max-h-96' >
                            <div className='w-100 lg:w-1/2 relative overflow-visible mt-10 lg:mt-0' >
                                <img alt='' className='rounded-full border-8 border-white lg:absolute m-auto lg:top-[-9999px] lg:left-[-9999px] lg:bottom-[-9999px] lg:right-[-9999px] w-[350px] lg:w-[350px]' src='/img/single-computer-background.jpg' />
                            </div>
                            <div className='text-center lg:text-end w-100 lg:w-1/2 mt-10 sm:mt-5 lg:my-0 mx-3 lg:pl-18 xl:pl-32 lg:mx-0'>
                                <div className='text-reviewBlue font-bold text-xl xl:text-2xl m-auto  lg:mr-10 sm:mt-5'>Featured Article</div>
                                <div className='text-white font-bold text-2xl 2xl:text-3xl m-auto md:mx-20 lg:mr-10'>{data.items[1].title}</div>
                                <div className='text-white text-sm 2xl:text-xl m-auto md:mx-20 lg:mr-10'>{data.items[1].content_text}</div>
                                <Link
                                to={`/resources/blog/${data.items[1].guid}`}
                                    type="button"
                                    className="bg-reviewBlue hover:bg-lightblue text-white xl:text-xl m-auto lg:mr-10 inline-block rounded-full px-6 pt-2 pb-[6px] font-medium text-black my-3 text-center mr-1"
                                >
                                    Read Now
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading data...</p>
                )}
            </div>
        </>
    )
}
export default RSSHeader