import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { registerScheme } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"


function Register() {

    const route = useRouter()

    const form = useForm<z.infer<typeof registerScheme>>({
        resolver: zodResolver(registerScheme),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            name: "",
            surname: ""
        }
    })

    const onSubmit = async (values: z.infer<typeof registerScheme>) => {
        route.push("/dashboard")
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mb-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input 
                                        className="bg-inherit focus:outline-none h-12 border-b-2 border-x-0 border-t-0 rounded-none p-0 focus:border-gray-800 "
                                        placeholder="Elektron manzilingizni kiriting" 
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input 
                                        className="bg-inherit mb-4 focus:outline-none h-12 border-b-2 border-x-0 border-t-0 rounded-none p-0 focus:border-gray-800"
                                        placeholder="Parol" 
                                        type="password" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel/>
                                <FormControl>
                                    <Input 
                                        className="bg-inherit mb-4 focus:outline-none h-12 border-b-2 border-x-0 border-t-0 rounded-none p-0 focus:border-gray-800"
                                        placeholder="Parol tasdig'i" 
                                        type="password" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input 
                                        className="bg-inherit mb-4 focus:outline-none h-12 border-b-2 border-x-0 border-t-0 rounded-none p-0 focus:border-gray-800"
                                        placeholder="Ismingizni kiriting" 
                                        type="text" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="surname"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input 
                                        className="bg-inherit mb-4 focus:outline-none h-12 border-b-2 border-x-0 border-t-0 rounded-none p-0 focus:border-gray-800"
                                        placeholder="Familiyangizni kiriting" 
                                        type="text" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button 
                        type="submit"
                        variant={"default"} 
                        size={"lg"} 
                        className="bg-green-500 hover:bg-green-500/90 text-lg w-full font-semibold rounded-none"
                    >
                        Kirish
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default Register