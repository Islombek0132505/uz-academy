import Image from "next/image"

function SalaryWithExperience() {
    return (
        <div className="max-w-6xl mx-auto mt-20 container bg-white rounded-3xl px-12 py-20">
            <p className="text-5xl font-black">Tajriba bilan daromad oshadi</p>
            <p className="text-2xl text-muted-foreground mt-6">Mutaxassisning o‘rtacha ish haqi $1000</p>

            <div className="relative px-12 h-64">
                <Image src={"/salary.svg"} alt="salary" fill className="h-svh pointer-events-none absolute right-16"/>
            </div>
        </div>
    )
}

export default SalaryWithExperience