"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { contactScheme } from "@/lib/validation"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import { cn } from "@/lib/utils"

type HeroFormType = "yellow" | "green" | "black"

interface IHeroForm extends React.HTMLAttributes<HTMLFormElement> {
    type: HeroFormType
}

export const HeroForm = ({type, ...props } : IHeroForm) => {

    const [isLoading, setLoading] = useState(false)

    const form = useForm<z.infer<typeof contactScheme>> ({
        resolver: zodResolver(contactScheme),
        defaultValues: {
            name: "",
            phone: ""
        }
    })

    async function onSubmit(values: z.infer<typeof contactScheme>) {
        console.log(values);
        setLoading(false)
    }

    return (

        <Form {...form} {...props}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        disabled = {isLoading}
                                        placeholder="Ismingizni kiriting..." 
                                        {...field} 
                                        className="bg-slate-200 h-14 max-md:h-12"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        disabled = {isLoading}
                                        placeholder="940132505" 
                                        {...field} 
                                        type="number"
                                        className="bg-slate-200 text-2xl h-14 max-md:h-12"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                </div>
                <button  
                    className={
                        cn(
                            "mt-6 text-xl h-14 rounded-lg px-16 transition-all font-semibold max-md:h-12", 
                            type === "green" && "bg-green-500 hover:bg-green-500/80 text-white",
                            type === "yellow" && "bg-yellow-400 hover:bg-yellow-400/80 text-black",
                            type === "black" && "bg-black hover:bg-black/80 text-white",
                        )
                    } 
                    type="submit"
                >
                    Ma&rsquo;lumot olish
                </button>
            </form>
        </Form>
    )
}


export default HeroForm