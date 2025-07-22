import Image from "next/image"

interface IProcessEducationCard {
    image: string,
    title: string,
    desc: string
}

function ProcessEducationCard(data: IProcessEducationCard) {
    return (
        <div className="flex flex-col gap-6 bg-white rounded-2xl px-6 py-10 items-center text-center">
            <h1 className="text-3xl font-semibold">{data.title}</h1>
            <p className="text-muted-foreground">{data.desc}</p>
            <Image 
                src={data.image}
                alt="icon"
                width={400}
                height={400}
                className="object-contain"
            />
        </div>
    )
}

export default ProcessEducationCard