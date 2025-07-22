import HomeCard from "@/components/cards/home.universal.card"
import { bonusStudents } from "@/constants"

function BonusStudents() { 
    return (
        <div className="container max-w-6xl mx-auto mt-20">
            <h1 className="font-black text-5xl">O‘quvchilar uchun bonus va mukofotlar</h1>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-8 gap-y-4 mt-6">
                {bonusStudents.map((item, index) => (
                    <HomeCard {...item} type="withImage" titleColor="green" key={index}/>
                ))}
            </div>
        </div>
    )
}

export default BonusStudents