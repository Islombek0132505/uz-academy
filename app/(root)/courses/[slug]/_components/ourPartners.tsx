import { ourPartners } from "@/constants"
import Image from "next/image"

function OurPartners() {
    return (
        <div className="mt-20 container mx-auto max-w-6xl max-md:mt-12">

            <h1 className="text-5xl font-black max-md:text-3xl">Bizning hamkorlarimiz sizni kutmoqda</h1>
            <p className="mt-6 text-muted-foreground text-xl w-3/4 max-md:w-full max-md:text-base">Bizning platformamiz bir nechta o’nlab kompaniyalar bilan hamkorlik aloqalari(memorandum)ni yo’lga qo’ygan. Kurslarimizni tamomlagan talabalarimiz hamkor kompaniyalarda tavsiyalarimizga ko’ra ishga joylashish imkoniyatiga ega bo’ladilar.</p>

            <div className="grid grid-cols-6 lg:grid-cols-6 md:grid-cols-4 max-md:grid-cols-2 gap-4 mt-6">
                {ourPartners.map((item, index) => (
                    <Image
                        src={item.image} 
                        alt="company"
                        key={index}
                        width={200}
                        height={200}
                        className="object-contain col-span-1 pointer-events-none select-none"
                    />
                ))}
            </div>
        </div>
    )
}

export default OurPartners