import Hero from "@/components/hero"
import HomePage from "@/components/home-page";
import Carousal from "@/components/carousal";

export const metadata = {
    title: "Chillfeast | Building Successfull Business Stories",
    description: "Transform your digital presence with Chillfeast. We specialize in WordPress development, static websites, and chatbot creation to help your business thrive online. Contact us today!",
};

export default function Home() {
    return (
        <section>
            <Hero />
            <HomePage/>
        </section>

    )
}