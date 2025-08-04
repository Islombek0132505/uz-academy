import Logo from "@/components/shared/logo"
import { footerLinks, ourSocialNetworks } from "@/constants"
import Link from "next/link"
import Image from "next/image"
import HeroForm from "./hero-form"
import { Separator } from "@/components/ui/separator"

function Footer() {
    return (
        <div className="max-w-6xl mx-auto container mt-20 max-md:mt-12 ">
            <div className="bg-black py-16 rounded-3xl max-md:py-10 max-md:rounded-none">
                <div className="px-4">
                    <div className="flex justify-between flex-wrap items-center max-md:flex-col max-md:items-start">
                        <Logo href="/" color="white"/>
                        {footerLinks.map((item, index) => (
                            <Link 
                                href={item.link} 
                                key={index} 
                                className="text-green-500 font-medium text-xl"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                    <div className="grid grid-cols-12 my-16 max-md:my-10">
                        <div className="col-span-3 text-white text-lg max-md:text-base pl-4 max-md:col-span-12 max-md:pl-0">
                            <div className="flex gap-4">
                                <Image 
                                    src={"https://static.tildacdn.one/tild6465-3539-4234-b530-363939393338/8e707c0c-dac1-46c7-8.png"}
                                    width={20}
                                    alt="phone-number"
                                    height={20}
                                    className="object-contain"
                                />
                                <p className="">+998 78-777-47-47</p>
                            </div>
                            <div className="flex gap-4">
                                <Image 
                                    src={"https://static.tildacdn.one/tild6233-3838-4134-b661-326332653033/d1d0498d-5957-4bf8-b.png"}                               
                                    width={20}
                                    alt="location"
                                    height={20}
                                    className="object-contain"
                                />
                                <p className="mt-6">Toshkent shahar, Shayxontohur tumani, Beruniy ko’chasi 3A</p>
                            </div>
                        </div>
                        <div className="col-span-6 text-white pr-6 max-md:col-span-12 max-md:mt-12">
                            <h1 className="text-4xl font-semibold max-md:text-3xl">Tanlovda yordam beramiz</h1>
                            <p className="text-lg mt-6 max-md:text-base">Hali ham savollaringiz bormi yoki kurs haqida qaror qabul qila olmayapsizmi? Unda sizga bog‘lanib batafsil ma'lumot beramiz.</p>
                        </div>
                        <div className="col-span-3 max-md:col-span-12 max-md:mt-6">
                            <HeroForm type="green"/>
                        </div>
                    </div>
                </div>
                <Separator className="bg-green-500 h-[2px]"/>
            </div>
            <div className="flex items-center justify-between my-6 max-md:px-4 max-md:flex-col max-md:items-start">
                <div>
                    <p>© 2024 PDP EcoSystem | PDP Academy</p>
                    <p>Barcha huquqlar himoyalangan.</p>
                </div>
                <div className="flex items-center gap-2 max-md:mt-4">
                    {ourSocialNetworks.map((item, index) => (
                        <Link href={item.url} key={index}>
                            <Image 
                                src={item.image} 
                                alt="socialIcon" 
                                width={45} 
                                height={45} 
                                className="object-contain"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer