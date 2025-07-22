import Image from "next/image"

function OurCoursesHero() {
    return (
        <div className="max-w-6xl mt-32 container mx-auto">
            <div className="grid grid-cols-4 max-md:grid-cols-2 bg-white rounded-3xl px-16 py-10">
                <h1 className="col-span-2 uppercase text-6xl font-bold leading-[1.2] self-center">
                    Dasturlashni <br />
                    qulay <span className="text-green-500"> muhitda</span> <br />
                    o‘rganing
                </h1>
                <Image 
                    alt="hero image"
                    src={"https://online.pdp.uz/assets/newPdp/bg-home.svg"}
                    width={500}
                    height={500}
                    className="object-contain col-span-2 pl-4"
                />
            </div>
        </div>
    )
}

export default OurCoursesHero