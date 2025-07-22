import { ChildProps } from "@/types"
import { Toaster } from "@/components/ui/sonner"
import Navbar from "./_components/navbar"
import Footer from "./_components/footer"

function Layout ({children}: ChildProps) {
    return (
        <div>
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
            <Toaster position="top-center"/>
        </div>
    )
}

export default Layout