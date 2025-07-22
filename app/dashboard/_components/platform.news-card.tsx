import Image from "next/image"

interface IPlatformNewsCard {
    image: string,
    title: string,
    desc: string
}

function PlatformNewsCard(data: IPlatformNewsCard) {
    return (
        <div className="bg-background rounded-3xl px-4 grid grid-cols-4 max-md:grid-cols-2 py-6 shadow-md m-4">
            <div className="col-span-2 self-center space-y-4">
                <h1 className="text-3xl font-medium">
                    {data.title}
                </h1>
                <p className="text-muted-foreground">{data.desc}</p>
            </div>
            
            <div className="col-span-2 flex justify-center">
                <Image
                    src={data.image}
                    alt=""
                    width={200}
                    height={200}
                    className="object-contain rounded-3xl"
                />
            </div>
        </div>
    )
}

export default PlatformNewsCard