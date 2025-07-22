import { courseProgrammImages } from "@/constants"
import Image from "next/image"
import GiveInformation from "../../_components/give.information"

function CourseProgramm() {
    return (
        <div className="max-w-6xl mx-auto mt-20">
            <h1 className="text-5xl font-black">
                Kurs dasturlari
            </h1>
            <div className="grid grid-cols-4 gap-4 mt-6">
                {courseProgrammImages.map((item, index) => (
                    <div key={index} className="w-full relative h-96 rounded-3xl overflow-hidden">
                        <Image 
                            src={item.url} 
                            alt={"foto"} 
                            fill 
                            className="object-cover"
                        />
                    </div>
                ))}
                <div className="col-span-3 self-center px-6">
                    <GiveInformation hasdesc hastitle type="element" direction="horizontal" variant="inherit" className="gap-12" />
                </div>
            </div>
        </div>
    )
}

export default CourseProgramm