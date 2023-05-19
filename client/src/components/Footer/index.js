import React from 'react'
import '../../index.css'

const navigation = {
    company: [
        {
            name: '751 W. 100 N. Suite 25 Spanish Fork, UT 84660',
            href: '#', icon: (props) => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              
              
            ),
        },
        {
            name: '(801) 651-4510', href: '#', icon: (props) => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            ),
        },
        {
            name: 'alex@assetworx.us', href: '#', icon: (props) => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              
            ),
        },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: '#',
            icon: (props) => (
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" {...props}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            ),
        },
    ],
}

function Footer() {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="bg-[#15BBAB]" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8 uppercase font-4xl">
                           <p className='font-bold text-2xl md:text-4xl'>Assetworx</p>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-xl font-semibold leading-6 text-gray-900 uppercase">Social Media</h3>
                                <div role="list" className="mt-6 space-y-4 list-none">
                                    {navigation.social.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900 flex">
                                                <item.icon className="h-6 w-6 mr-3" aria-hidden="true" />
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-xl font-semibold leading-6 text-gray-900 uppercase">Contact Us</h3>
                                <div role="list" className="mt-6 space-y-4 list-none">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900 flex">
                                                <item.icon className="h-6 w-6 mr-3" aria-hidden="true" />
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 xl:mt-0">
                        <h3 className="text-xl font-semibold leading-6 text-gray-900 uppercase">Subscribe</h3>
                        <form className="mt-6 sm:flex sm:max-w-md">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                required
                                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                                placeholder="Your Email*"
                            />
                            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-md bg-[#0F5BA7] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4173A6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
                    <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
                        &copy; 2022-<span>{year}.</span> <span className='font-bold'>Assetworx</span>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>

    )
}

export default Footer