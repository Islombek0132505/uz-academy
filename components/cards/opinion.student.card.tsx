"use client"

import { useState } from "react";
import { Separator } from "../ui/separator"
import { IoPersonCircleOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface IOpinionStudent {
    job: string,
    name: string,
    opinion: string
}

function OpinionStutentCart(data: IOpinionStudent) {

    const [showOpinion, setShowOpinion] = useState(false) 

    const showedOpinion = () => {
        setShowOpinion(!showOpinion)
    }

    return (
        <div className="px-4 py-6 rounded-3xl flex flex-col bg-white">
            <p className={
                cn(
                    "text-muted-foreground font-medium" ,
                    showOpinion ? "line-clamp-none" : "line-clamp-4"
                )}
            >
                {data.opinion}
            </p>
            <button 
                className="text-green-500 font-bold cursor-pointer mx-auto w-fit mt-2"
                onClick={showedOpinion}
            >
                {showOpinion ? "Kamroq" : "Ko'proq"}
            </button>
            <Separator className="my-3 h-[2px]"/>
            <Image 
                src={"https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fuser%2Fprofile%2Fuser_daa3d06c-b48e-4fff-901d-ba0d0b74f381.png&w=128&q=75"}
                alt="person"
                width={50}
                height={50}
                className="object-contain"
            />
            <p className="font-bold text-lg mt-2">{data.name}</p>
            <p className="text-sm">{data.job}</p>
        </div>
    )
}

export default OpinionStutentCart