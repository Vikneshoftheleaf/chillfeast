import Link from "next/link"
import ServiceHome from "./service-list-home"
import ProjectPreview from "./preview-projects"
export default function HomePage() {
    return (

        <section>


            <div class="bg-white dark:bg-gray-900">

                <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-10 sm:py-16 lg:px-6">
                    <div class="mt-4 md:mt-0 col-span-4">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Why Choose Chillfeast</h2>
                        <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Expert solutions. Unmatched dedication. Chillfeast brings the skill, innovation, and personalized approach you need to succeed in a digital world.</p>
                        <Link href={'/about'} class="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900">
                            Our Story
                            <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>

                    <div className="mt-8 lg:mt-0 col-span-6 grid lg:grid-cols-2 grid-cols-1 font-light text-gray-500 dark:text-gray-400">

                        <div className="lg:border-r-2 flex flex-col  ">
                            <div className="lg:border-b-2 p-4 grid grid-cols-6">
                                <div className="col-span-1">
                                    <span className="px-4 py-2 bg-blue-700 text-white  rounded-full">1</span>
                                </div>
                                <div className="col-span-5">
                                    <h2 className="font-bold text-xl mb-1 text-gray-900 dark:text-white">Tailored Solutions</h2>
                                    <p>Every business is unique. We take the time to understand your goals and craft digital solutions that align with your vision, ensuring a perfect fit every time.</p>
                                </div>
                            </div>

                            <div className="p-4 grid grid-cols-6">
                                <div className="col-span-1">
                                    <span className="px-4 py-2 bg-blue-700 text-white rounded-full">2</span>
                                </div>
                                <div className="col-span-5">
                                    <h2 className="font-bold text-xl mb-1 text-gray-900 dark:text-white">End-to-End Expertise</h2>
                                    <p>From web development and SEO to custom software and AI-driven chatbots, our team brings diverse skills to support your business at every stage.</p>
                                </div>
                            </div>
                        </div>


                        <div className=" lg:mt-8 flex flex-col">
                            <div className="lg:border-b-2 grid grid-cols-6 p-4">
                                <div className="col-span-1">
                                    <span className="px-4 py-2 bg-blue-700 text-white rounded-full">3</span>
                                </div>
                                <div className="col-span-5">
                                    <h2 className="font-bold text-xl mb-1 text-gray-900 dark:text-white">Commitment to Quality</h2>
                                    <p>We’re passionate about delivering high-quality results and staying at the forefront of digital trends, so you get solutions that are both effective and future-ready.</p>
                                </div>
                            </div>
                            <div className=" grid grid-cols-6 p-4">
                                <div className="col-span-1">
                                    <span className="px-4 py-2 bg-blue-700 text-white rounded-full">4</span>
                                </div>
                                <div className="col-span-5">
                                    <h2 className="font-bold text-xl mb-1 text-gray-900 dark:text-white">Reliable Support</h2>
                                    <p>We believe in building strong partnerships with our clients. With responsive support and open communication, we’re with you every step of the way.</p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

            <ServiceHome/>
            <ProjectPreview/>
            
            
{/** 
            <div className="bg-white dark:bg-gray-900">
            <div class="w-full text-center mx-auto font-semibold text-gray-400 uppercase">our services</div>

                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 grid lg:grid-cols-3 grid-cols-1 gap-4 justify-center">

                    <div class="p-6 flex flex-col gap-4  items-center justify-center rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <Image src={lead} height={200} width={200} alt="lead" className="rounded-full"></Image>
                        <h2 className="font-bold text-xl">Lead Generation</h2>
                    </div>
                    <div class="p-6 flex flex-col gap-4  items-center justify-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <Image src={web} height={200} width={200} alt="lead" className="rounded-full"></Image>
                        <h2 className="font-bold text-xl">Website Development</h2>
                    </div>
                    <div class="p-6 flex flex-col gap-4  items-center justify-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <Image src={wordpress} height={200} width={200} alt="lead" className="rounded-full"></Image>
                        <h2 className="font-bold text-xl text-center">Wordpress Website Development</h2>
                    </div>
                    <div class="p-6 flex flex-col gap-4  items-center justify-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <Image src={ecom} height={200} width={200} alt="lead" className="rounded-full"></Image>
                        <h2 className="font-bold text-xl text-center">E-Commerce Website Development </h2>
                    </div>
                    <div class="p-6 flex flex-col gap-4  items-center justify-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <Image src={chatbot} height={200} width={200} alt="lead" className="rounded-full"></Image>
                        <h2 className="font-bold text-xl text-center">Customer Support Chatbot</h2>
                    </div>
                    <div class="p-6 flex flex-col gap-4  items-center justify-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <Image src={custom} height={200} width={200} alt="lead" className="rounded-full"></Image>
                        <h2 className="font-bold text-xl text-center">Custom Softwares for Enterprise</h2>
                    </div>
                    <div class="p-6 flex flex-col gap-4  items-center justify-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <Image src={seo} height={200} width={200} alt="lead" className="rounded-full"></Image>
                        <h2 className="font-bold text-xl text-center">SEO</h2>
                    </div>

                </div>

            </div>

    **/}

            <div class="bg-white dark:bg-gray-900">
                <div class="w-full text-center mx-auto font-semibold text-gray-400 uppercase">What Our clients say</div>

                <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <figure class="max-w-screen-md mx-auto">
                        <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                        </svg>
                        <blockquote>
                            <p class="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                        </blockquote>
                        <figcaption class="flex items-center justify-center mt-6 space-x-3">
                            <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                            <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>


            <div class="bg-white dark:bg-gray-900">
                <div class="w-full text-center mx-auto font-semibold text-gray-400 uppercase">our blog</div>

                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="grid gap-8 lg:grid-cols-2">
                        <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div class="flex justify-between items-center mb-5 text-gray-500">
                                <span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                                    <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                    Tutorial
                                </span>
                                <span class="text-sm">14 days ago</span>
                            </div>
                            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">How to quickly deploy a static website</a></h2>
                            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center space-x-4">
                                    <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                                    <span class="font-medium dark:text-white">
                                        Jese Leos
                                    </span>
                                </div>
                                <a href="#" class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    Read more
                                    <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </div>
                        </article>
                        <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div class="flex justify-between items-center mb-5 text-gray-500">
                                <span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                                    <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                    Article
                                </span>
                                <span class="text-sm">14 days ago</span>
                            </div>
                            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Our first project with React</a></h2>
                            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center space-x-4">
                                    <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
                                    <span class="font-medium dark:text-white">
                                        Bonnie Green
                                    </span>
                                </div>
                                <a href="#" class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    Read more
                                    <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

            <div class="py-8 px-4 mx-auto sm:py-16 lg:px-6 bg-blue-700">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-white">Ready to Elevate Your Digital Presence?</h2>
                    <p class="mb-6 font-light text-gray-100 md:text-lg">Partner with Chillfeast to bring your vision to life. Whether you need a new website, custom software, or powerful SEO, we’re here to make it happen.</p>
                    <div className="flex gap-4 items-center justify-center">
                        <Link href={'/projects'} class="inline-flex gap-2 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-200/30 backdrop-blur hover:text-blue-800 hover:bg-blue-200 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Our Project
                            <ion-icon class="text-xl" name="arrow-forward-outline"></ion-icon>
                        </Link>
                        <Link href={'/services'} class="inline-flex gap-2 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-200/30 backdrop-blur hover:text-blue-800 hover:bg-blue-200 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Our Services
                            <ion-icon class="text-xl" name="arrow-forward-outline"></ion-icon>
                        </Link>

                    </div>

                </div>
            </div>
        </section>
    )
}