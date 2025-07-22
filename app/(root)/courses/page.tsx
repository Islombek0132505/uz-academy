import { SliderComponent } from "../_components/slider.component"
import BonusStudents from "./_components/bonusStudents"
import EducationInUS from "./_components/education-in.us"
import OurCoursesHero from "./_components/hero"
import OpinionStudents from "./_components/opinionStudents"
import OurCourses from "./_components/our.courses"
import PriceCourses from "./_components/price.courses"
import PropertyNotebook from "./_components/property.notebook"

function Page() {
    return (
        <>
            <OurCoursesHero/>
            <OurCourses/>
            <EducationInUS/>
            <BonusStudents/>

            <SliderComponent 
                type="iframe" 
                title="Bitiruvchilar biz haqimizda"
                desc="Talabalar oʻqish davomida quyidagi kompaniyalarda amaliyot oʻtash imkoniyatiga ega boʻladilar."
            />
            <OpinionStudents/>
            <OurCourses/>
            <PropertyNotebook/>
            <PriceCourses/>
        </>
    )
}

export default Page