import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface ICourseCard {
    image: string,
    title: string,
    type: string,
    duration: string,
    job: string
}

function CoursesCard(data: ICourseCard) {
    return (
        <Link 
            href={"/courses/frontend"}
            className="p-6 rounded-2xl bg-white group hover:cursor-pointer hover:shadow-xl hover:shadow-slate-200 duration-300 hover:delay-100"
        >
            <div className="flex gap-4">
                <div>
                    <Image 
                        src={data.image} 
                        alt="image" 
                        width={80} 
                        height={80} 
                        className="object-contain rounded-2xl"
                    />
                </div>
                <div className="mt-2">
                    <h1 className="text-xl font-medium">
                        {data.title}
                    </h1>
                    <p className="text-lg">{data.duration}</p>
                </div>
                
            </div>
            <div className="flex justify-end gap-4 mt-12">
                <p className="py-2 px-4 bg-slate-50 rounded-full text-gray-500 font-medium">{data.job}</p>
                <p 
                    className={cn(
                        "py-2 px-4 rounded-full font-medium",
                        data.type === "Standart" && "bg-green-200 text-green-500",
                        data.type === "Bootcamp" && "bg-orange-200 text-orange-500",
                        data.type === "Boshqa" && "bg-blue-200 text-blue-500",
                    )}
                >
                    {data.type}
                </p>
            </div>
        </Link>
    )
}

export default CoursesCard