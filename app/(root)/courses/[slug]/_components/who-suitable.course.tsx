import WhoFitsCard from "@/components/cards/who.fits-card"
import { suitableCourse } from "@/constants"

function WhoSuitableCourse() {
    return (
        <div className="mx-auto max-w-6xl container mt-20">
            <h1 className="font-black text-5xl">
                Kursimiz kimlarga to’g’ri keladi
            </h1>
            <div className="mt-12 grid grid-cols-2 gap-x-12 gap-y-6">
                {suitableCourse.map((item, index) => (
                    <WhoFitsCard key={index} {...item}/>
                ))}
            </div>
        </div>
    )
}

export default WhoSuitableCourse