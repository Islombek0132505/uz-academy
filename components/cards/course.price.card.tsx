import Link from "next/link"

interface ICoursePrice {
    time: string,
    price: string,
    desc: string
}

function CoursePriceCard(data: ICoursePrice) {
    return (
        <div className="px-4 py-6 rounded-3xl bg-white flex flex-col items-center gap-2 hover:cursor-pointer hover:shadow-xl hover:shadow-slate-200 duration-300 hover:delay-100">
            <h1 className="font-medium text-green-500 text-2xl">{data.time}</h1>
            <p className="text-4xl font-semibold my-4">{data.price} so'm</p>
            <p className="text-muted-foreground text-center text-lg font-medium">{data.desc}</p>
            <Link href={"/"} className="bg-green-500 rounded-full px-4 py-2 font-semibold text-white mt-6">Ro'yxatdan o'tish</Link>
        </div>
    )
}

export default CoursePriceCard