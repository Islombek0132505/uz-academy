import Image from "next/image"

function Sertificate() {
    return (
        <div className="max-w-6xl mx-auto container mt-20 max-md:mt-12 rounded-3xl bg-bg-sertificate bg-cover bg-center bg-no-repeat flex items-center justify-between px-16 py-16 max-md:flex-col max-md:p-10">

            <Image 
                src={"https://dicoding-assets.sgp1.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2022/08/image1-1.png"}
                alt="sertificate"
                width={330}
                height={210}
                className="object-contain"
            />

            <div className="text-white space-y-3 w-[55%] max-md:w-full max-md:mt-6">
                <h1 className="text-3xl font-semibold max-md:text-2xl">Siz professional tayyorlov sertifikatini qo‘lga kiritasiz</h1>
                <p className="text-lg max-md:text-base">Mutaxassislik kurslarini to‘liq tamomlagan talabalarga sertifikat beriladi.</p>
                <button className="mt-6 text-xl max-md:text-lg h-14 max-md:h-12 rounded-lg px-16 transition-all font-semibold bg-green-500 hover:bg-green-500/95 text-white">
                    Sertifikatni ko‘rish
                </button>
            </div>
        </div>
    )
}

export default Sertificate