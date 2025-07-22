import CoursesCard from "@/components/cards/courses.card"
import { ourCourses } from "@/constants"

function OurCourses() {
    return (
        <div className="max-w-6xl mt-20 container mx-auto">
            <h1 className="text-5xl font-black">Bizning kurslar</h1>
            <div className="mt-6 grid grid-cols-3 max-md:grid-cols-1 gap-x-8 gap-y-4">
                {ourCourses.map((item, index) => (
                    <CoursesCard key={index} {...item}/>
                ))}
            </div>

        </div>
    )
}

export default OurCourses