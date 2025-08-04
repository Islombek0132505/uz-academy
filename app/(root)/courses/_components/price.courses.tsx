import CoursePriceCard from "@/components/cards/course.price.card"
import { coursePrices } from "@/constants"

function PriceCourses() {
    return (
        <div className="mt-20 container mx-auto max-w-6xl max-md:mt-12">
            <h1 className="font-black text-5xl max-md:text-3xl">Kurs narxi</h1>
            <div className="mt-12 grid grid-cols-3 max-md:grid-cols-1 gap-x-8 gap-y-4 max-md:mt-6">
                {coursePrices.map((item, index) => (
                    <CoursePriceCard {...item} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default PriceCourses