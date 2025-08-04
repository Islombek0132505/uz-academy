import HomeCard from "@/components/cards/home.universal.card"
import { whyUzAcademy } from "@/constants"

function WhyAcademy() {
    return (
        <div className="container mx-auto max-w-6xl mt-20 py-12 px-6 max-md:px-4 bg-white rounded-3xl max-md:mt-12 shadow-xl">
            <h1 className="font-roboto text-5xl font-bold text-center max-md:text-4xl">Nima uchun Uz Academy?</h1>
            <div className="grid grid-cols-4 max-md:grid-cols-1 mt-8 max-md:mt-4">
                {whyUzAcademy.map((item, index) => (
                    <HomeCard type="withImage" {...item} key={index} titleColor="default" className="max-md:px-0"/>
                ))}
            </div>
        </div>
    )
}

export default WhyAcademy
