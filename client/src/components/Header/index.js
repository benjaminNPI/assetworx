import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const threeMenuFunction = () => {
        setMobileMenuOpen(false)
    }

    const style = {
        link: {
            margin: "20px 22px 0px 22px"
        },
    }

    return (
        <div className="isolate mb-5" style={{ backgroundColor: "#06233F" }}>
            <div className="px-6 lg:px-8">
                <nav className="flex items-center justify-between" aria-label="Global">
                    <div className='flex items-center'>
                        <div className="flex h-16">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">ASSETWORX</span>
                                <img className="h-16" src="/img/assetworx-logo.webp" alt="Assetworx Logo" />
                            </a>
                        </div>
                        <p className='text-white text-xl font-bold' style={{ fontFamily: 'Bebas Neue Regular 400 ' }}>ASSETWORX</p>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-10 w-10 text-white" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 text-black">
                        <div className='activeLink text-sm font-semibold leading-6 text-white text-xl'>
                            <NavLink
                                to=""
                                style={style.link}
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                Home
                            </NavLink>
                            <NavLink
                                to="about"
                                style={style.link}
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                About
                            </NavLink>
                            <NavLink
                                to="services"
                                style={style.link}
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                Services
                            </NavLink>
                            <NavLink
                                to="case-studies"
                                style={style.link}
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                Case Studies
                            </NavLink>
                            <NavLink
                                to="contact"
                                style={style.link}
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                Contact
                            </NavLink>

                        </div>
                    </div>
                </nav>
                <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <Dialog.Panel focus="true" className="fixed w-3/4 ml-auto inset-0 z-10 overflow-y-auto px-6 py-6 lg:hidden" style={{ backgroundColor: "#06233F" }}>
                        <div className="flex items-center justify-between">

                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10 ">
                                <div className="py-6 activeLink  px-3 text-2xl font-semibold text-white flex flex-col">
                                    <NavLink
                                        to=""
                                        onClick={threeMenuFunction}
                                        style={style.link}
                                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="about"
                                        onClick={threeMenuFunction}
                                        style={style.link}
                                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                        About
                                    </NavLink>
                                    <NavLink
                                        to="services"
                                        onClick={threeMenuFunction}
                                        style={style.link}
                                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                        Services
                                    </NavLink>
                                    <NavLink
                                        to="case-studies"
                                        onClick={threeMenuFunction}
                                        style={style.link}
                                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                        Case Studies
                                    </NavLink>
                                    <NavLink
                                        to="contact"
                                        onClick={threeMenuFunction}
                                        style={style.link}
                                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                        Contact
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </div>

        </div>
    )
}

export default Header