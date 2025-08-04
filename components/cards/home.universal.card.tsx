import { cn } from "@/lib/utils"
import Image from "next/image"
import { AllHTMLAttributes, ReactNode } from "react"

type HomeCardType = "withImage" | "withText"
type TitleColor = "green" | "default"

interface IHomeCard extends AllHTMLAttributes<HTMLElement> {
    type: HomeCardType,
    title: string,
    desc: string,
    icon?: string
    titleColor: TitleColor

}

function HomeCard({ type, className, titleColor, ...props} : IHomeCard) {

    return (
        <div className={cn(className, "flex flex-col gap-4 bg-white rounded-2xl px-4 py-8 max-md:py-4 max-md:col-span-1", className)}>
            
            <div className={cn(type === "withImage" ? "max-md:flex max-md:items-center max-md:gap-2" : "")}>
                { type === "withImage" ?
                    <Image 
                        src={props.icon ?? ""} 
                        alt={props.title ?? "icon"}
                        width={50}
                        height={50}
                        className="object-cover pointer-events-none select-none"
                    /> : 
                    <p className="text-4xl font-light tracking-[1px] font-space-grotesk">
                        {props.icon}
                    </p>
                }

                <p className={
                    cn(
                        "text-2xl font-medium", 
                        (type === "withImage" && titleColor === "default") ? "text-black" : "text-green-500"
                    )
                }>
                    {props.title}
                </p>
            </div>

            <p className="text-muted-foreground text-base">
                {props.desc}
            </p>
        </div>
    )
}

export default HomeCard