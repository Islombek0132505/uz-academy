import { ourPartners } from "@/constants"
import Image from "next/image"

function OurPartners() {
    return (
        <div className="max-w-6xl mx-auto mt-20 container max-md:mt-12">
            <h1 className="text-5xl font-black max-md:text-3xl">Bitiruvchilar ish yuritayotgan kompaniyalar</h1>
            <p className="mt-6 max-md:mt-4 text-lg max-md:text-base md:w-2/3 lg:w-1/2 max-md:w-full">Talabalar oʻqish davomida quyidagi kompaniyalarda amaliyot oʻtash imkoniyatiga ega boʻladilar</p>
        
            <div className="grid grid-cols-6 lg:grid-cols-6 md:grid-cols-4 max-md:grid-cols-2 gap-4 mt-6">
                {ourPartners.map((item, index) => (
                    <Image
                        src={item.image} 
                        alt="company"
                        key={index}
                        width={200}
                        height={200}
                        className="object-contain col-span-1 pointer-events-none select-none"
                    />
                ))}
            </div>

        </div>
    )
}

export default OurPartners