import Image from "next/image"
import Link from "next/link"

function CourseHero() {
    return (
        <div className="max-w-6xl mt-32 container mx-auto">
            <div className="grid grid-cols-4 max-md:grid-cols-2 bg-white rounded-3xl px-16 py-10">
                <div className="col-span-2 self-center flex flex-col">
                    <h1 className="text-6xl font-bold leading-[1.1]">
                        <span className="text-green-500">Frontend</span><br />
                        Development
                    </h1>
                    <Link href={"/"} className="px-4 py-2 rounded-full text-white font-medium text-lg bg-green-500 mt-6 w-fit">O'qishni boshlash</Link>
                </div>
                <Image
                    src={"https://online.pdp.uz/assets/newPdp/roadmap/roadmap.svg"}
                    alt="image"
                    width={500}
                    height={500}
                    className="object-contain col-span-2"
                />
            </div>
            <h1 className="font-black text-5xl"></h1>
        </div>
    )
}

export default CourseHero