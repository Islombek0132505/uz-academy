import MentorCard from "@/components/cards/mentor.card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ourMentors, studentsAboutUs } from "@/constants"

type SliderType = "iframe" | "image"

interface ISliderComponent extends React.HTMLAttributes<HTMLDivElement> {
    type: SliderType,
    title?: string,
    desc?: string,
}

export const SliderComponent = ({type, title, desc, className, ...props} : ISliderComponent) => {

    return (
        <div className="max-w-6xl mx-auto mt-20 container">

            <h1 className="text-5xl font-black mb-6">{title}</h1>
            <p className="text-xl w-2/3">{desc}</p>

            <Carousel 
                className="mt-12 w-full"
                opts={{
                    align: "start",
                }}
            >
                <CarouselContent>

                    {type === "iframe" &&
                        (studentsAboutUs.map((item, index) => (
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                                <div className="rounded-3xl overflow-hidden">
                                    <iframe 
                                        className="w-full h-60" 
                                        src={item.src}
                                        title="YouTube video player" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>
                            </CarouselItem>
                        )))
                    }
                    {type === "image" && 
                        (ourMentors.map((item, index) => (
                            <CarouselItem className="md:basis-1/3 lg:basis-1/4" key={index}>
                                <MentorCard {...item}/>
                            </CarouselItem>
                        )))
                    }
                    
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}









