import Image from "next/image"

interface IPropertyComp {
    image: string
    title: string
    type: string
}

function PropertyCompCard(data: IPropertyComp) {
    return (
        <div className="flex gap-4 items-center">
            <Image 
                src={data.image} 
                alt="image" 
                width={50} 
                height={50} 
                className="object-contain"
            />
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <h2 className="text-lg text-green-500 font-medium">{data.type}</h2>
            </div>
        </div>
    )
}

export default PropertyCompCard