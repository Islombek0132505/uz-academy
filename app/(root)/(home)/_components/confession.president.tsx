import Image from "next/image"

function ConfessionPresident() {
    return (
        <div className="max-w-6xl mx-auto mt-20 container">
            <h1 className="text-5xl font-black max-md:text-3xl">Prezident e’tirofi</h1>
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-4 mt-12">
                <Image 
                    src={"https://static.tildacdn.one/tild3765-6137-4664-b164-366637613163/93204b51-c1ef-4a9d-8.png"} 
                    alt="president" 
                    width={600} 
                    height={600} 
                    className="object-contain col-span-1 pointer-events-none select-none"
                />
                <div className="ml-4">
                    <p className="text-muted-foreground text-lg">12 Iyun, 2022</p>
                    <p className="text-4xl leading-[1.4] font-black max-md:text-3xl">Shavkat Mirziyoyev</p>
                    <p className="text-lg text-green-500 max-md:text-base">O’zbekiston Respublikasi Prezidenti</p>
                    <p className="text-3xl text-muted-foreground mt-8 max-md:text-xl">“Odilbek, gaplaringizdan, ko'zlaringizdan shuni sezdimki, bu kunlarga kelish oson bo'lmagan va buni qadriga yetayapsiz. Menga IT mutaxassislarni tayyorlab chiqarish bo'yicha amalga oshirayotgan ishlaringiz yoqdi. 100 ming nafar yoshlarimizni 2000 AQSh dollar maoshli mutaxassis darajasiga olib chiqishni maqsad qilib qo'ygan ta'lim faoliyatingizni qo'llab-quvvatlash bo'yicha O'zbekiston Respublikasi Vazirlar Mahkamasi qarorini chiqaramiz. Mana shunday pahlavon, zabardast yoshlarimiz ko'paymoqda. Ular ham o'z oldilariga shunday maqsadlarni qo‘ysa, men hammasiga yordam beraman”.</p>
                </div>

            </div>
        </div>
    )
}

export default ConfessionPresident