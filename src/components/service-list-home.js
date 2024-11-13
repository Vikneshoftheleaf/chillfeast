export default function ServiceHome() {
    return (
        <div className="bg-white dark:bg-gray-900">

            <div class=" py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div class="w-full text-center mx-auto font-semibold text-gray-400 uppercase mb-8">our services</div>

                <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
                    <div className="flex items-center gap-4 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="text-2xl  flex justify-center items-center w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            <ion-icon name="globe-outline"></ion-icon>
                        </div>
                        <h3 class="text-xl font-bold dark:text-white">Website Development</h3>


                    </div>
                    <div className="flex items-center gap-4 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="text-2xl flex justify-center items-center  w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            <ion-icon name="logo-wordpress"></ion-icon>
                        </div>
                        <h3 class="text-xl font-bold dark:text-white">Wordpress Website Development</h3>


                    </div>

                    <div className="flex items-center  gap-4 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="text-2xl  flex justify-center items-center w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            <ion-icon name="bag-handle-outline"></ion-icon>
                        </div>
                        <h3 class="text-xl font-bold dark:text-white">E-Commerce Website Development</h3>


                    </div>

                    <div className="flex items-center  gap-4 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="text-2xl  flex justify-center items-center w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            <ion-icon name="chatbubbles-outline"></ion-icon>
                        </div>
                        <h3 class=" text-xl font-bold dark:text-white">Customer Support Chatbot</h3>


                    </div>
                    <div className="flex items-center  gap-4 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="text-2xl  flex justify-center items-center  w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            <ion-icon name="qr-code-outline"></ion-icon>
                        </div>
                        <h3 class=" text-xl font-bold dark:text-white">Custom Softwares for Enterprise</h3>


                    </div>
                    <div className="flex items-center gap-4 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="text-2xl  flex justify-center items-center w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            <ion-icon name="cog-outline"></ion-icon>
                        </div>
                        <h3 class=" text-xl font-bold dark:text-white">SEO</h3>


                    </div>
                </div>


            </div>
        </div>
    )
}