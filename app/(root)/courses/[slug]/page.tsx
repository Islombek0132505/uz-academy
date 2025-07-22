import CourseHero from "./_components/course.hero"
import LessonsInCourse from "./_components/lessonsInCourse"
import OurPartners from "./_components/ourPartners"
import ProcessEducation from "./_components/process-education"
import WhoSuitableCourse from "./_components/who-suitable.course"

function Page() {
    return (
        <>
            <CourseHero/>
            <WhoSuitableCourse/>
            <LessonsInCourse/>
            <ProcessEducation/>
            <OurPartners/>
        </>
    )
}

export default Page