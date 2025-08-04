import WhoFitsCard from "@/components/cards/who.fits-card"
import { suitableCourse } from "@/constants"

function WhoSuitableCourse() {
    return (
        <div className="mx-auto max-w-6xl container mt-20 max-md:mt-12">
            <h1 className="font-black text-5xl max-md:text-3xl">
                Kursimiz kimlarga to’g’ri keladi
            </h1>
            <div className="mt-12 grid grid-cols-2 gap-x-12 gap-y-6 max-md:mt-6 max-md:grid-cols-1">
                {suitableCourse.map((item, index) => (
                    <WhoFitsCard key={index} {...item}/>
                ))}
            </div>
        </div>
    )
}

export default WhoSuitableCourse