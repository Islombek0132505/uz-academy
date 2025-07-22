import PropertyCompCard from "@/components/cards/property.comp"
import { compProperty } from "@/constants"

function PropertyNotebook() {
    return (
        <div className="max-w-6xl mx-auto container mt-20">
            <h1 className="text-5xl font-black">
                Kurs uchun 
                <span className="text-green-500"> minimum </span> 
                talab qilinadigan 
                <span className="text-green-500"> noutbuk </span>
            </h1>
            <div className="mt-12 grid grid-cols-2 gap-x-12 gap-y-6">
                {compProperty.map((item, index) => (
                    <PropertyCompCard {...item} key={index}/>
                ))}

            </div> 
        </div>
    )
}

export default PropertyNotebook