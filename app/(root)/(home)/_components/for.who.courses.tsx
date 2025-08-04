import HomeCard from "@/components/cards/home.universal.card"
import { forWhoCourses } from "@/constants"

function ForWhoCourses() {
    return (
        <div className="container mx-auto max-w-6xl mt-20 max-md:mt-12">
            <h1 className="text-5xl font-black max-md:text-4xl">Bu kurs kimlar uchun?</h1>
            <div className="grid md:grid-flow-col gap-4 mt-8 max-md:grid-cols-1">
                {forWhoCourses.map((item,index) => (
                    <HomeCard type="withText" {...item} key={index} titleColor="default" className="shadow-xl"/>
                ))}
            </div>
            
        </div>
    )
}

export default ForWhoCourses