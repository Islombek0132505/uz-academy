import { companiesImage, statistics } from "@/constants"
import Image from "next/image"

function CompaniesInfo() {
    return (
        <div className="container max-w-6xl mx-auto mt-20">
            <p className="text-3xl font-medium text-center">
                Yirik kompaniyalar sari ilk qadam — Uz Academy
            </p>
            <div className="flex justify-between items-center mt-12">
                {companiesImage.map((item, index) => (
                    <div className="w-[140px] h-[40px] relative" key={index}>
                        <Image 
                            src={item.src} 
                            alt={item.icon} 
                            fill
                            objectFit="contain"
                        />
                    </div>
                ))}
            </div>
            <div className="mt-20 grid grid-cols-4 max-md:grid-cols-2 gap-4 bg-green-500 px-4 py-12 rounded-3xl">
                {statistics.map(item => (
                    <div className="text-white col-span-1 text-center" key={item.title}>
                        <h1 className="text-5xl font-bold">{item.title}</h1>
                        <h2 className="text-xl mt-2">{item.desc}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CompaniesInfo