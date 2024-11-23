import Image from "next/image"
import bobu from "../../public/assests/screenshot/bobu.png"
import kiwi from "../../public/assests/screenshot/kiwi.png"
import sarah from "../../public/assests/screenshot/sarah.png"
import kichata from "../../public/assests/screenshot/kichata.png"
import bobulogo from "../../public/assests/bobu-logo.png"
import kichatalogo from "../../public/assests/kichata-logo.jpg"
import kiwilogo from "../../public/assests/kiwi-logo.webp"
import govtlogo from "../../public/assests/govt-logo.jpg"
import sarahlogo from "../../public/assests/sarah.jpg"




export default function ProjectPreview() {
    return (

        <div className="bg-white dark:bg-gray-900">

            <div class=" py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div class="w-full text-center mx-auto font-semibold text-gray-400 uppercase mb-8">our projects</div>

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 justify-center items-center">
                    <div className="flex flex-col gap-2">
                        <Image src={bobu} class=" w-full rounded-lg" alt="" />
                        <div className="flex gap-2 items-center">
                            <Image src={bobulogo} height={25} width={25} class="object-cover rounded-full" alt="" />
                            <p>BobuKids</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Image src={kiwi} class=" w-full rounded-lg" alt="" />
                        <div className="flex gap-2 items-center">
                            <Image src={kiwilogo} height={25} width={25} class="object-cover rounded-full" alt="" />
                            <p>Kiwihomepros</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Image src={sarah} class=" w-full rounded-lg" alt="" />
                        <div className="flex gap-2 items-center">
                            <Image src={sarahlogo} height={25} width={25} class="object-cover rounded-full" alt="" />
                            <p>Sarah Thuo</p>
                        </div>
                    </div>

                </div>
            </div>


        </div>




    )
}