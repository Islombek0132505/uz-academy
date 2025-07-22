import OpinionStutentCart from "@/components/cards/opinion.student.card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { studentOpinion } from "@/constants"

function OpinionStudents() {
    return (
        <div className="max-w-6xl mt-20 mx-auto container">
            <h1 className="text-5xl font-black">O‘quvchilarning fikrlari</h1>
            <Carousel
                className="mt-12 w-full"
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
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default OpinionStudents