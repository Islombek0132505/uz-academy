import Image from "next/image"
import CourseCard from "../_components/course-card"

function Page() {
    return (
        <>
            <div className="grid grid-cols-4 max-md:grid-cols-2 px-4 py-6 bg-background mt-4 rounded-3xl shadow-lg">
                <div className="col-span-2 self-center">
                    <h1 className="text-3xl font-medium"><span className="text-green-500">Til</span> o&rsquo;rganing. Ilhomlaning. <span className="text-green-500">Yangi dunyo</span> ochilsin!</h1>
                    <p className="text-muted-foreground mt-4 leading-[1.5] text-lg">Bizning motivatsion online platformamiz har bir insonni til o‘rganishga ilhomlantiradi. Darslar hayotiy, o‘rgatuvchi va ishonch uyg‘otuvchi. Bugun boshlang – ertangi o‘zgarishlar uchun!</p>
                </div>
                <div className="col-span-2 flex justify-center">
                    <Image
                        src={"/languages.png"}
                        alt=""
                        width={300}
                        height={300}
                        className="object-contain pointer-events-none select-none"
                    />
                </div>

            </div>
            <div className="mt-12">
                <h1 className="text-3xl font-medium ">Til kurslari</h1>
                <p className="text-muted-foreground text-lg mt-2">Til o&rsquo;rganing va shu bilan yangi dunyo kashf qiling</p>
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