"use client"

import Logo from "@/components/shared/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LogInIcon, PhoneCall } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

function Navbar() {

    const route = useRouter()
    const theme = useTheme()

    return (
        <div className="fixed inset-0 h-20 z-40 bg-green-500 backdrop-blur-xl">
            <div className="max-w-6xl h-full mx-auto  flex items-center justify-between">
                <div className="flex gap-6 items-center">
                    <Logo href="/" color={theme.theme == "dark" ? "white" : "black"}/>
                    <Link href={"/courses"} className="text-lg text-white font-medium hover:underline hover:underline-offset-2">
                        Kurslar
                    </Link>
                </div>
                <div className="flex items-center gap-3">
                    <Button 
                        variant={"secondary"} 
                        className="text-base text-green-600 font-bold"
                        onClick={() => route.push("/register")}
                    >
                        O'qishni boshlash
                        <LogInIcon className="font-bold"/>
                    </Button>
                    <Button variant={"secondary"} className="text-base text-green-600 font-bold">
                        Aloqa
                        <PhoneCall/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar