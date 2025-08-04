import Image from "next/image"

interface IMentor {
    image: string,
    name: string,
    job: string
}

function MentorCard( data : IMentor) {
    return (
        <div className="flex flex-col gap-4 max-md:gap-2">
            <Image
                src={data.image}
                alt={data.name}
                width={400}
                height={400}
                className="object-cover rounded-xl"
            />
            <h1 className="text-2xl font-bold">
                {data.name}
            </h1>
            <p className="text-lg text-green-500 max-md:leading-[110%]">
                {data.job}
            </p>
        </div>
    )
}

export default MentorCard