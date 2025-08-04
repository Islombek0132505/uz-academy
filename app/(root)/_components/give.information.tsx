import { cn } from "@/lib/utils"
import React from "react"
import HeroForm from "./hero-form"

type GiveInformationType = "black" | "inherit" | "green" | "white"
type Direction = "vertical" | "horizontal"
type Property = "container" | "element" 

interface IGiveInformation extends React.HTMLAttributes<HTMLDivElement>{
    hastitle?: boolean ,
    hasdesc?: boolean,
    variant: GiveInformationType,
    direction: Direction,
    type: Property
}

function GiveInformation({hastitle, hasdesc, variant, className, direction = "horizontal", type = 'element', ...props} : IGiveInformation) {

    return (
        <div className={
            cn(
                "grid grid-cols-2 gap-24 max-md:grid-cols-1 max-md:gap-8",
                type === "container" && "max-w-6xl mx-auto px-12 py-16 mt-20 container rounded-3xl max-md:mt-12 max-md:px-6 max-md:py-12",
                variant === "green" && "bg-green-500",
                variant === "black" && "bg-black",
                variant === "white" && "bg-white",
                variant === "inherit" && "bg-inherit",
                direction === "vertical" && "grid-cols-1", 
                className
            )}
            {...props}
        >
            <div 
                className={cn((variant === "green" || variant === "black") && "text-white", "col-span-1 self-center")}>
                {hastitle && 
                    <h1 className="text-4xl font-black leading-[1.1] max-md:text-3xl">
                        Bog‘lanib, sizga to‘liq ma’lumot beramiz
                    </h1>
                }
                {hasdesc && 
                    <p className="text-xl mt-6 max-md:text-lg">
                        Hali ham savollaringiz bormi yoki kurs haqida qaror qabul qila olmayapsizmi? Unda sizga bog‘lanib batafsil ma&rsquo;lumot beramiz.
                    </p>
                }
            </div>
            <div className="col-span-1">
                {
                    (variant === "black" || variant === "inherit" || variant === "white") &&
                    <HeroForm type="green"/>
                }
                {
                    variant === "green" &&
                    <HeroForm type="black"/>
                }
            </div>
        </div>
    )
}

export default GiveInformation