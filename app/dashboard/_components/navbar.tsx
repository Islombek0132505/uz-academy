"use client"

import Logo from "@/components/shared/logo"
import { ModeToggle } from "@/components/shared/mode.toggle"
import { useTheme } from "next-themes"

function DashboardNavbar() {

    const { theme } = useTheme()
    
    return (
        
        <div className="w-full h-24 fixed z-50 border-b dark:bg-background">
            <div className="max-w-6xl flex items-center justify-between h-full lg:px-12 md:px-8 max-sm:px-4 py-6">
                <Logo href="/dashboard" color={theme === "dark" ? "white" : "black"}/>
                
                <ModeToggle/>
            </div>
        </div>
    )
}

export default DashboardNavbar