import HomeCard from "@/components/cards/home.universal.card"
import { educationUs } from "@/constants"

function EducationInUS() {
    return (
        <div className="container mx-auto mt-20 max-w-6xl">
            <h1 className="text-5xl font-black">Nima uchun “Uz Academy”da o‘qish kerak?</h1>
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-x-8 gap-y-4 mt-6">
                {educationUs.map((item, index) => (
                    <HomeCard {...item} type="withImage" titleColor="green" key={index}/>
                ))}
            </div>
        </div>
    )
}

export default EducationInUS