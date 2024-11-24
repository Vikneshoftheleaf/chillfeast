import Link from "next/link"
import service from "../../public/assests/service.jpg"
import Image from "next/image"

export default function ServiceList() {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                    <div class="max-w-screen-md mb-8 lg:mb-16">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Empowering Your Business with Cutting-Edge Digital Solutions</h2>
                        <p class="text-gray-500 sm:text-xl dark:text-gray-400">From custom websites to intelligent chatbots, we deliver top-tier development services tailored to your unique needs. Explore our range of services and take your business to the next level with Chillfeast.</p>
                    </div>

                    <div className="h-full w-full flex justify-center items-start">
                    <Image src={service} alt="" height={250} width={250} className="rounded-full"></Image>

                    </div>

                </div>
                <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
                    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="text-2xl  flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            <ion-icon name="globe-outline"></ion-icon>
                        </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white">Website Development</h3>
                        <p class="mb-6 text-gray-500 dark:text-gray-400">We create fully customized, responsive websites tailored to your business needs. Whether it’s a personal blog, a corporate site, or an online portfolio, our development team ensures high performance, security, and a seamless user experience across all over the devices.</p>
                        <Link href={'/contact'} class="inline-flex items-center gap-2 py-3 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                            Learn More
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </Link>

                    </div>
                    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="text-2xl flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            <ion-icon name="logo-wordpress"></ion-icon>
                        </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white">Wordpress Website Development</h3>
                        <p class="mb-6 text-gray-500 dark:text-gray-400">Our WordPress development services focus on building dynamic, user-friendly websites with a vast array of features and flexibility. From personal blogs to business websites, we leverage the power of WordPress to offer easy content management, SEO-friendly structures.</p>
                        <Link href={'/contact'} class="inline-flex items-center gap-2 py-3 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                            Learn More
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </Link>

                    </div>

                    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="text-2xl  flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            <ion-icon name="bag-handle-outline"></ion-icon>
                        </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white">E-Commerce Website Development</h3>
                        <p class="mb-6 text-gray-500 dark:text-gray-400">We specialize in developing robust e-commerce platforms to help you grow your online store. With secure payment gateways and mobile-friendly designs, we ensure a smooth shopping experience for your customers while optimizing for conversions.</p>
                        <Link href={'/contact'} class="inline-flex items-center gap-2 py-3 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                            Learn More
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </Link>

                    </div>

                    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="text-2xl  flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            <ion-icon name="chatbubbles-outline"></ion-icon>
                        </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white">Customer Support Chatbot</h3>
                        <p class="mb-6 text-gray-500 dark:text-gray-400">Our customer support chatbots are designed to provide assistance to your customers. By integrating smart bots into your website or messaging platforms, you can automate responses to common queries, improve user engagement and reduce customer service workload.</p>
                        <Link href={'/contact'} class="inline-flex items-center gap-2 py-3 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                            Learn More
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </Link>

                    </div>
                    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="text-2xl  flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            <ion-icon name="qr-code-outline"></ion-icon>
                        </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white">Custom Softwares for Enterprise</h3>
                        <p class="mb-6 text-gray-500 dark:text-gray-400">We develop tailored software solutions to meet the specific operational needs of your enterprise. From workflow automation to data management systems, our custom-built applications help streamline processes, enhance productivity, and provide real-time insights for better decision-making.</p>
                        <Link href={'/contact'} class="inline-flex items-center gap-2 py-3 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                            Learn More
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </Link>

                    </div>
                    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="text-2xl  flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            <ion-icon name="cog-outline"></ion-icon>
                        </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white">SEO</h3>
                        <p class="mb-6 text-gray-500 dark:text-gray-400">Boost your online visibility and attract more organic traffic with our SEO services. We implement on-page and off-page SEO strategies, optimize content for search engines, improve site speed, and conduct keyword research to help your website rank higher and bring in more qualified leads.</p>
                        <Link href={'/contact'} class="inline-flex items-center gap-2 py-3 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                            Learn More
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </Link>

                    </div>
                </div>
            </div>

            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image" />
                <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image" />
                <div class="mt-4 md:mt-0">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Ready to Elevate Your Digital Presence?</h2>
                    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Whether you need a stunning website, an intelligent chatbot, or a custom software solution, Chillfeast is here to make it happen. Let’s bring your vision to life with innovative, reliable, and results-driven digital solutions.</p>
                    <Link href={'/contact'} class="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900">
                        Get started
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                    <Link href={'/projects'} class=" ms-2 inline-flex items-center gap-2 py-3 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                        View Projects
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </Link>

                </div>
            </div>
        </section>

    )

}