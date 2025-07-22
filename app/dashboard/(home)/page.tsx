import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import PlatformNewsCard from "../_components/platform.news-card"
import { platformNews } from "@/constants"

function Page() {
    return (
        <>
            <div className="grid grid-cols-4 max-md:grid-cols-2 p-4 mt-4 items-center bg-background rounded-3xl shadow-lg">
                <h1 className="text-3xl col-span-2 leading-[1.4]">
                    <span className="text-green-500 font-semibold">Uz Academy </span>
                    - bu siz uchun 
                    sifatli <span className="text-green-500"> online</span> va <span className="text-green-500"> hamyonbop </span> kurslar platformasidir.
                </h1>
                <div className="col-span-2 flex justify-center">
                    <Image 
                        src={"/elearning.png"}
                        width={300}
                        height={300}
                        alt="image"
                        className="object-contain self-center pointer-events-none select-none"
                    />
                </div>
                
            </div>
            <div className="mt-12">
                <h1 className="text-3xl font-medium mb-2">
                    Platformadagi yangiliklar
                </h1>
                <p className="text-lg text-muted-foreground max-md:w-full w-1/2 leading-[1.2]">Platformada yuz beradigan yangilanishlar va yangi kurslar haqida habardor bo'ling</p>

                <Carousel
                    className="mt-6 w-full"
                    opts={{
                        align: "center",
                    }}
                >

                    <CarouselContent>
                        {platformNews.map((item, index) => (
                            <CarouselItem>
                                <PlatformNewsCard {...item} key={index}/>
                            </CarouselItem>
                        ))}
                        
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className="mt-12">
                <h1 className="text-3xl font-medium">Siz o'rganayotgan kurslar</h1>
                <div className="my-4 grid-cols-3 gap-y-6 gap-x-3 min-h-36 w-full">
                    <h1 className="text-muted-foreground">Sizda hozir o'rganayotgan kurslar mavjud emas</h1>
                </div>

            </div>
        </>
    )
}

export default Page