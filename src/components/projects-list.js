import Link from "next/link";
import bobu from "../../public/assests/bobu-logo.png"
import kichata from "../../public/assests/kichata-logo.jpg"
import kiwi from "../../public/assests/kiwi-logo.webp"
import govt from "../../public/assests/govt-logo.jpg"
import sarah from "../../public/assests/sarah.jpg"


import Image from "next/image";


export default function ProjectList() {
    return (
        <section class="bg-white dark:bg-gray-900 antialiased">
            <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div class="max-w-2xl mx-auto text-center">
                    <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        Our work
                    </h2>
                    <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                        Crafted with skill and care to help our clients grow their business!
                    </p>
                </div>

                <div class="grid grid-cols-1 mt-12 text-left sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div class="space-y-4 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                        <div className="flex gap-4 items-center">
                            <div>
                                <Image src={bobu} alt="" height={50} width={50} className="rounded-md"></Image>

                            </div>
                            <div>
                                <div
                                    class="bg-gray-100 text-blue-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-700 dark:text-blue-300">
                                    <span className="flex items-center mx-1">
                                        <ion-icon name="logo-wordpress"></ion-icon>
                                    </span>
                                    <span>Wordpress</span>
                                </div>
                                <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                                    Bobukids
                                </h3>

                            </div>
                        </div>
                        <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                            Bobukids is a south indian based Kids Dinnerware company.
                        </p>
                        <div className="flex gap-2 w-full">
                            <a href="https://bobukids.in" title=""
                                class="text-white bg-blue-700 justify-center hover:bg-blue-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                role="button" target="_blank">
                                Preview
                                <span className="ml-2 text-lg flex items-center">
                                    <ion-icon name="eye-outline"></ion-icon>

                                </span>
                            </a>

                            <Link href={'/testimonial#bobou'}
                                class="text-gray-900 border border-gray-200 bg-white justify-center hover:bg-gray-100 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-70  dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70"
                                role="button">
                                Testimonial
                                <span className="ml-2 text-lg flex items-center">
                                    <ion-icon name="chatbox-outline"></ion-icon>

                                </span>
                            </Link>


                        </div>
                    </div>

                    <div class="space-y-4 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex gap-4 items-center">
                            <div>
                                <Image src={kichata} alt="" height={50} width={50} className="rounded-md"></Image>

                            </div>
                            <div>
                                <div
                                    class="bg-gray-100 text-blue-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-700 dark:text-blue-300">
                                    <span className="flex items-center mx-1">
                                        <ion-icon name="logo-wordpress"></ion-icon>
                                    </span>
                                    <span>Wordpress</span>
                                </div>
                                <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                                    KichataResearch
                                </h3>

                            </div>
                        </div>
                        
                        <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                            KichataResearch is a Kenya Based Market Researching Company
                        </p>
                        <div className="flex gap-2 w-full">
                            <a href="https://kichataresearch.com" title=""
                                class="text-white bg-blue-700 justify-center hover:bg-blue-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                role="button" target="_blank">
                                Preview
                                <span className="ml-2 text-lg flex items-center">
                                    <ion-icon name="eye-outline"></ion-icon>

                                </span>
                            </a>

                            <Link href={'/testimonial#kichata'}
                                class="text-gray-900 border border-gray-200 bg-white justify-center hover:bg-gray-100 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-70  dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70"
                                role="button">
                                Testimonial
                                <span className="ml-2 text-lg flex items-center">
                                    <ion-icon name="chatbox-outline"></ion-icon>

                                </span>
                            </Link>



                        </div>
                    </div>

                    <div class="space-y-4 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex gap-4 items-center">
                            <div>
                                <Image src={kiwi} alt="" height={50} width={50} className="rounded-md"></Image>

                            </div>
                            <div>
                                <div
                                    class="bg-gray-100 text-blue-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-700 dark:text-blue-300">
                                    <span className="flex items-center mx-1">
                                        <ion-icon name="logo-wordpress"></ion-icon>
                                    </span>
                                    <span>Wordpress</span>
                                </div>
                                <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                                    KiwiHomePros
                                </h3>

                            </div>
                        </div>
                        <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                            Kiwihomepros is a American based Pressure Washing Company
                        </p>
                        <div className="flex gap-2 w-full">
                            <a href="https://kiwihomepros.com" title=""
                                class="text-white bg-blue-700 justify-center hover:bg-blue-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                role="button" target="_blank">
                                Preview
                                <span className="ml-2 text-lg flex items-center">
                                    <ion-icon name="eye-outline"></ion-icon>

                                </span>
                            </a>

                            <Link href={'/testimonial#kiwi'}
                                class="text-gray-900 border border-gray-200 bg-white justify-center hover:bg-gray-100 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-70  dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70"
                                role="button">
                                Testimonial
                                <span className="ml-2 text-lg flex items-center">
                                    <ion-icon name="chatbox-outline"></ion-icon>

                                </span>
                            </Link>




                        </div>
                    </div>

                    <div class="space-y-4 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex gap-4 items-center">
                            <div>
                                <Image src={sarah} alt="" height={50} width={50} className="rounded-md"></Image>

                            </div>
                            <div>
                                <div
                                    class="bg-gray-100 text-blue-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-700 dark:text-blue-300">
                                    <span className="flex items-center mx-1">
                                        <ion-icon name="logo-wordpress"></ion-icon>
                                    </span>
                                    <span>Wordpress</span>
                                </div>
                                <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                                    Sarahthou
                                </h3>

                            </div>
                        </div>
                        <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                            Sarathuo is a Kenya based Youtuber
                        </p>
                        <div className="flex gap-2 w-full">
                            <a href="https://sarahthuo.com" title=""
                                class="text-white bg-blue-700 justify-center hover:bg-blue-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                role="button" target="_blank">
                                Preview
                                <span className="ml-2 text-lg flex items-center">
                                    <ion-icon name="eye-outline"></ion-icon>

                                </span>
                            </a>

                            <Link href={'/testimonial#sara'}
                                class="text-gray-900 border border-gray-200 bg-white justify-center hover:bg-gray-100 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-70  dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70"
                                role="button">
                                Testimonial
                                <span className="ml-2 text-lg flex items-center">
                                    <ion-icon name="chatbox-outline"></ion-icon>

                                </span>
                            </Link>




                        </div>
                    </div>


                    <div class="space-y-4 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex gap-4 items-center">
                            <div>
                                <Image src={govt} alt="" height={50} width={50} className="rounded-md"></Image>

                            </div>
                            <div>
                                <div
                                    class="bg-gray-100 text-green-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-green-700 dark:text-green-300">
                                    <span className="flex items-center mx-1">
                                        <ion-icon name="code-slash-outline"></ion-icon>
                                    </span>
                                    <span>Desktop Application</span>
                                </div>
                                <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                                    TC Issuing Software
                                </h3>

                            </div>
                        </div>
                        <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                            Custom Software for Government Arts and Science College
                        </p>
                        <div className="flex gap-2 w-full">

                            <Link href={'/testimonial#tc'}
                                class="text-gray-900 border border-gray-200 bg-white justify-center hover:bg-gray-100 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-70  dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70"
                                role="button">
                                Testimonial
                                <span className="ml-2 text-lg flex items-center">
                                    <ion-icon name="chatbox-outline"></ion-icon>

                                </span>
                            </Link>




                        </div>
                    </div>

                </div>

            </div>

            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Transform Your Business with Expert Digital Solutions</h2>
                    <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Looking for a website that stands out or a custom chatbot to engage your customers? Chillfeast has the expertise to deliver. Partner with us today and experience the power of seamless digital innovation.</p>
                    <Link href={'/services'} class="inline-flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View Services <ion-icon name="arrow-forward-outline"></ion-icon></Link>
                </div>
            </div>
        </section>
    )
}