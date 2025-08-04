import OpinionStutentCart from "@/components/cards/opinion.student.card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { studentOpinion } from "@/constants"

function OpinionStudents() {
    return (
        <div className="max-w-6xl mt-20 mx-auto container max-md:mt-12">
            <h1 className="text-5xl font-black max-md:text-3xl">O‘quvchilarning fikrlari</h1>
            <Carousel
                className="mt-12 w-full max-md:mt-6"
                opts={{
                    align: "start",
                }}
            >
                <CarouselContent>

                    {studentOpinion.map((item, index) => (
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                            <OpinionStutentCart {...item}/>
                        </CarouselItem>
                    ))}
                    
                </CarouselContent>
                <CarouselPrevious className="max-md:hidden"/>
                <CarouselNext className="max-md:hidden"/>
            </Carousel>
        </div>
    )
}

export default OpinionStudents