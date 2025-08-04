import HomeCard from "@/components/cards/home.universal.card"
import { careerCenter } from "@/constants"

function CareerCenter() {
    return (
        <div className="container mt-20 mx-auto max-w-6xl max-md:mt-12">
            <h1 className="text-5xl font-black max-md:text-3xl">Karyera markazi</h1>
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-x-8 gap-y-4 mt-6">
                {careerCenter.map((item, index) => (
                    <HomeCard type="withImage" {...item} key={index} titleColor="green"/>
                ))}     
            </div>
        </div>
    )
}

export default CareerCenter