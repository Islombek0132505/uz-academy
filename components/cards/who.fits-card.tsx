import Image from "next/image"

interface IWhoFitsCard {
    image: string,
    title: string,
    desc: string
}

function WhoFitsCard(data: IWhoFitsCard) {
    return (
        <div className="flex gap-8 max-md:gap-4 items-start px-6 py-8 rounded-3xl bg-white max-md:px-4 max-md:py-6 shadow-lg shadow-slate-200">
            <Image
                src={data.image}
                alt="icon"
                width={80}
                height={80}
                className="object-contain"
            />
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-semibold max-md:text-2xl">{data.title}</h1>
                <p className="text-muted-foreground font-medium text-lg max-md:text-base ">{data.desc}</p>
            </div>
        </div>
    )
}

export default WhoFitsCard