import HomeCard from "@/components/cards/home.universal.card"
import { bonusStudents } from "@/constants"

function BonusStudents() { 
    return (
        <div className="container max-w-6xl mx-auto mt-20 max-md:mt-12">
            <h1 className="font-black text-5xl max-md:text-3xl">O‘quvchilar uchun bonus va mukofotlar</h1>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-8 gap-y-4 mt-6">
                {bonusStudents.map((item, index) => (
                    <HomeCard {...item} type="withImage" titleColor="green" key={index} className="shadow-lg shadow-slate-200"/>
                ))}
            </div>
        </div>
    )
}

export default BonusStudents