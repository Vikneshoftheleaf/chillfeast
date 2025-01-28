'use client'
import Link from "next/link"
import logo from "../../public/logo-final.png"
import Image from "next/image"
import DarkModeToggler from "./dark-mode-toggler"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Navbar() {
    const [navMode, setNavMode] = useState('hidden') // Initially hidden
    const router = useRouter()

    const toggleNav = () => {
        setNavMode((prev) => (prev === 'hidden' ? '' : 'hidden'))
    }

    const closeNav = () => {
        setNavMode('hidden') // Close the menu
    }

    useEffect(() => {
        setNavMode('hidden') // Ensure menu is hidden on route change
    }, [router])

    return (
        <nav className="bg-white dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <Link href={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={logo} alt="Logo" height={80} width={160} className="rounded-md invert dark:invert-0" />
                </Link>

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <DarkModeToggler />

                    <button
                        type="button"
                        className="lg:block hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Get started
                    </button>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={navMode !== 'hidden'}
                        onClick={toggleNav}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                <div
                    className={`items-center justify-between ${navMode} w-full md:flex md:w-auto md:order-1`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                href={'/'}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                onClick={closeNav}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/about'}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                onClick={closeNav}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/services'}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                onClick={closeNav}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/projects'}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                onClick={closeNav}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/blog'}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                onClick={closeNav}
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/contact'}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                onClick={closeNav}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
