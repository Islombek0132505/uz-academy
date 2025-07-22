import Image from "next/image"
import HeroForm from "../../_components/hero-form"

function Hero() {
    return (
        <div className="container max-w-6xl mt-32 mx-auto rounded-3xl grid grid-cols-5 max-md:grid-cols-1 bg-white px-16 py-10">
            <div className="col-span-3 flex flex-col self-center">
                <p className="text-5xl font-black leading-[115%]">
                    <span className="text-green-600">+1000 </span> 
                    Bitiruvchilarimiz <br />
                    <span className="text-green-600"> 13 mln.dan </span> 
                    ziyod maosh olishmoqda!
                </p>
                <h2 className="text-muted-foreground w-3/4 mt-4 text-lg">
                    Savollaringiz bormi yoki kurs haqida qaror qabul qila olmayapsizmi? Unda sizga bog‘lanib batafsil ma'lumot beramiz.
                </h2>
                <div className="grid grid-cols-4 mt-10">
                    <div className="col-span-3">
                        <HeroForm type="yellow"/>
                    </div>
                </div>
            </div>

            <div className="col-span-2">
                <Image
                    src={'/hero.png'}
                    alt="hero"
                    width={520}
                    height={520}
                    className="self-end object-cover"
                >
                </Image>
            </div>
        </div>
    )
}

export default Hero