import Hero from "./_components/hero"
import CompaniesInfo from "./_components/company.info"
import WhyAcademy from "./_components/why.academy"
import ForWhoCourses from "./_components/for.who.courses"
import SalaryWithExperience from "./_components/salary.with.experience"
import GiveInformation from "../_components/give.information"
import CourseProgramm from "./_components/course.programm"
import Sertificate from "./_components/sertificate"
import { SliderComponent } from "../_components/slider.component"
import ItInUzb from "./_components/it-inUzb"
import OurPartners from "./_components/our.partners"
import ConfessionPresident from "./_components/confession.president"
import OftenQuestions from "./_components/often-questions"
import CareerCenter from "./_components/carier.center"
import OurLocation from "./_components/our.location"

function Page() {
    return (
        <>
            <Hero/>
            <CompaniesInfo/>
            <WhyAcademy/>
            <ForWhoCourses/>
            <SalaryWithExperience/>
            <GiveInformation hasdesc hastitle variant="black" direction="horizontal" type="container"/>
            <CourseProgramm/>
            <Sertificate/>
            <SliderComponent 
                type="iframe" 
                title="Bitiruvchilar biz haqimizda"
                desc="Talabalar oʻqish davomida quyidagi kompaniyalarda amaliyot oʻtash imkoniyatiga ega boʻladilar."
            />
            <GiveInformation hasdesc hastitle variant="white" direction="horizontal" type="container"/>
            <SliderComponent 
                type="iframe" 
                title="Bitiruvchilarimiz"
            />
            <ItInUzb/>
            <SliderComponent 
                type="image" 
                title="Mentorlarimiz jamoasi"
                desc="IT sohasiga kirish uchun eng yaxshi kurslar. Bir necha oy ichida siz noldan mutaxassis darajasiga yetishingiz, portfolio yig‘ishingiz va karyerangizni boshlashingiz mumkin."
            />
            <OurPartners/>
            <GiveInformation hasdesc hastitle variant="green" direction="horizontal" type="container"/>
            <ConfessionPresident/>
            <OftenQuestions/>
            <CareerCenter/>
            <OurLocation/>

        </>
    )
}

export default Page