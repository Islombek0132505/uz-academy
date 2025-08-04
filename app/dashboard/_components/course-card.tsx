import Image from "next/image"
import Link from "next/link"

function CourseCard() {
    return (
        <div className="flex rounded-2xl bg-background flex-col shadow-lg overflow-hidden group cursor-pointer">
            <Image 
                src="https://blog.lewolang.com/images/caa060e9d090a761b399310670dba684.jpg?w=120&h=90&fit=crop" 
                alt="asd" 
                className="w-full h-[260px] object-contain"
            />
            <div className="flex px-2 py-4 flex-col">
                <h1 className="text-xl font-medium mb-2">Ingliz tili</h1>

                <p><span className="font-medium">Daraja</span>: Bolalar uchun</p>
                <p><span className="font-medium">Davomiyligi</span>: 21 soat 22 minut</p>
                <p><span className="font-medium">Ustoz</span>: Zarifa Hayrullayeva</p>
                
                <Link 
                    href={"as"}
                    className="px-4 py-1 mt-4 w-fit mx-auto rounded-full bg-green-500 text-white font-medium text-center"
                >
                    Boshlash
                </Link>
            </div>
        </div>
    )
}

export default CourseCard