"use client"

import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

function Sidebar() {

    const pathname = usePathname()

    return (
        <div className="flex flex-col w-[300px] bg-background justify-between fixed left-0 top-24 bottom-0 border-r">
            <div className="flex flex-col gap-4 p-4">
                {sidebarLinks.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className={
                            cn(
                                "flex items-center gap-2 p-2 rounded-md hover:bg-secondary transition-colors text-gray-500",
                                pathname === item.href && "bg-secondary text-black dark:text-white font-medium"
                            )
                        }
                    >
                        <item.icon className="size-6 text-green-500"/>
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar