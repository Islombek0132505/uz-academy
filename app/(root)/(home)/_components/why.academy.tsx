import HomeCard from "@/components/cards/home.universal.card"
import { whyUzAcademy } from "@/constants"

function WhyAcademy() {
    return (
        <div className="container mx-auto max-w-6xl mt-20 py-12 px-6 bg-white rounded-3xl">
            <h1 className="font-roboto text-5xl font-bold text-center">Nima uchun Uz Academy?</h1>
            <div className="grid grid-cols-4 max-md:grid-cols-2 mt-8">
                {whyUzAcademy.map((item, index) => (
                    <HomeCard type="withImage" {...item} key={index} titleColor="default"/>
                ))}
            </div>
        </div>
    )
}

export default WhyAcademy
