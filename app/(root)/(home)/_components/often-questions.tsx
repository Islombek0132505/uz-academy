import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { oftenQuestions } from "@/constants"

function OftenQuestions() {
    return(
        <div className="mt-40 container mx-auto max-w-6xl">
            <h1 className="text-5xl font-black text-green-500 text-center">Tez-tez beriladigan savollar</h1>
            <Accordion type="multiple" className="w-2/3 mx-auto mt-12 space-y-1">
                {oftenQuestions.map((item, index) => (
                    <AccordionItem value={item.value} key={index} className="px-6 py-2 bg-white border-none">
                        <AccordionTrigger className="text-[22px] font-medium text-start">{item.title}</AccordionTrigger>
                        <AccordionContent className="text-lg text-muted-foreground">{item.question}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default OftenQuestions 