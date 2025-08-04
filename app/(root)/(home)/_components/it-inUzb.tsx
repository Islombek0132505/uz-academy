import { itInUzbImages } from "@/constants"
import Image from "next/image"

function ItInUzb() {
    return (
        <div className="container max-w-6xl mx-auto mt-20 max-md:mt-12">
            <h1 className="text-5xl font-black max-md:text-4xl">O‘zbekistondagi IT bozori haqida</h1>
            <div className="flex mt-16 justify-between gap-10 max-md:flex-col">
                <div className="relative w-full h-full">
                    <Image 
                        src={"https://static.tildacdn.one/tild3364-3261-4238-a430-656139383061/uzb.svg"} 
                        alt="uzb image" 
                        width={1024}
                        height={768} 
                        className="object-contain pointer-events-none"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {itInUzbImages.map((item, index) => (
                        <Image 
                            src={item.src} 
                            alt="img" 
                            width={400}
                            height={400}
                            key={index}
                            className="object-contain pointer-events-none"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ItInUzb