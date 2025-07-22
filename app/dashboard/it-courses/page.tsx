import Image from "next/image"
import CourseCard from "../_components/course-card"

function Page() {
    return (
        <>
            <div className="grid grid-cols-4 max-md:grid-cols-2 px-4 py-6 bg-background mt-4 rounded-3xl shadow-lg">
                <div className="col-span-2 self-center">
                    <h1 className="text-3xl font-medium"><span className="text-green-500">IT</span> kasbini bugun boshlang.<span className="text-green-500">Kelajak</span> sizga qarab kelayapti!</h1>
                    <p className="text-muted-foreground mt-4 leading-[1.5] text-lg">Bizning motivatsion platformamiz IT dunyosiga ishonch bilan kirib borishingizga yordam beradi. Har bir dars sizni kuchli mutaxassisga aylantirishga xizmat qiladi. Boshlash uchun bugungi kun eng zo‘ri!</p>
                </div>
                <div className="col-span-2 flex justify-center">
                    <Image
                        src={"/programming.png"}
                        alt=""
                        width={300}
                        height={300}
                        className="object-contain pointer-events-none select-none"
                    />
                </div>
            
            </div>
            <div className="mt-12">
                <h1 className="text-3xl font-medium ">IT kurslari</h1>
                <p className="text-muted-foreground text-lg mt-2">Dashturlashni o'rganing va dunyo bilan birga rivojlaning</p>
                <div className="mt-6 grid grid-cols-3 max-md:grid-cols-1 gap-x-12 gap-y-8">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>
        </>
    )
}

export default Page