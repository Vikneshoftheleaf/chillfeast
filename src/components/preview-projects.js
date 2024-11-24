import Image from "next/image"
import bobu from "../../public/assests/screenshot/bobu.png"
import kiwi from "../../public/assests/screenshot/kiwi.png"
import sarah from "../../public/assests/screenshot/sarah.png"
import kichata from "../../public/assests/screenshot/kichata.png"
import bobulogo from "../../public/assests/bobu-logo-cropped.png"
import kichatalogo from "../../public/assests/kichata-logo.jpg"
import kiwilogo from "../../public/assests/kiwi-logo-cropped.png"
import govtlogo from "../../public/assests/govt-logo.jpg"
import sarahlogo from "../../public/assests/sarah-logo-cropped.png"




export default function ProjectPreview() {
    return (

        <div className="bg-white dark:bg-gray-900">

            <div class=" py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div class="w-full text-center mx-auto font-semibold text-gray-400 uppercase mb-8">our projects</div>

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 justify-center items-center">
                    <a href="https://bobukids.in" className="flex flex-col gap-2" target="blank">
                        <Image src={bobu} class=" w-full rounded-lg" alt="" />
                        <div className="flex gap-2 items-center">
                            <Image src={bobulogo} height={30} width={30} class="object-cover rounded-full" alt="" />
                            <p className="text-lg">BobuKids</p>
                        </div>
                    </a>

                    <a href="https://kiwihomepros.com" className="flex flex-col gap-2" target="blank">
                        <Image src={kiwi} class=" w-full rounded-lg" alt="" />
                        <div className="flex gap-2 items-center">
                            <Image src={kiwilogo} height={30} width={30} class="object-cover rounded-full" alt="" />
                            <p className="text-lg">Kiwihomepros</p>
                        </div>
                    </a>

                    <a href="https://sarahthuo.com" className="flex flex-col gap-2" target="blank">
                        <Image src={sarah} class=" w-full rounded-lg" alt="" />
                        <div className="flex gap-2 items-center">
                            <Image src={sarahlogo} height={30} width={30} class="object-cover rounded-full" alt="" />
                            <p className="text-lg">Sarah Thuo</p>
                        </div>
                    </a>

                </div>
            </div>


        </div>




    )
}