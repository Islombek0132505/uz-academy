"use client"

import Image from "next/image"
import Login from "./_components/login"
import { useAuthState } from "@/stores/auth-store"
import Register from "./_components/register"

function Page() {

    const {authType, setAuth} = useAuthState()

    const changeAuthAction = () => {
        authType === "login" ? setAuth("register") : setAuth("login")
    }

    return (
        <div className="w-full h-full p-6">
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-2 max-w-6xl container mx-auto max-md:grid-cols-1">
                    <div className="col-span-1 w-3/4 mx-auto py-12 max-md:w-full">
                        <div className="border-[3px] border-slate-200/50 px-10 py-12 self-center max-md:px-4 max-md:py-8">
                            <h1 className="text-3xl font-medium mb-6">
                                {authType === "login" ? "Tizimga kirish" : "Ro'yxatdan o'tish"}
                            </h1>
                            {
                                authType === "login" ? <Login/> : <Register/>
                            }
                        </div>
                        
                        <div className="w-full bg-slate-200/50">
                            <div className="mx-auto w-fit flex items-center flex-col py-6">
                                <p className="text-muted-foreground text-sm">
                                    {
                                        authType === "login" ? "Yangi foydalanuvchimisiz?" : "Men allaqachon ro'yhatdan o'tganman"
                                    }
                                </p>
                                <button 
                                    className="text-green-600 font-semibold"
                                    onClick={changeAuthAction}
                                >
                                    {
                                        authType === "login" ? "Ro'yxatdan o'tish" : "Kirish"
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                    <Image
                        src={"https://online.pdp.uz/assets/newPdp/sign.svg"}
                        alt="image"
                        width={500}
                        height={500}
                        className="object-contain self-center col-span-1 pl-10 max-md:hidden"
                    />
                </div>
            </div>
        </div>
    )
}

export default Page