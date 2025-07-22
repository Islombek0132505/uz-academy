import { ChildProps } from "@/types"
import DashboardNavbar from "./_components/navbar"
import Sidebar from "./_components/sidebar"

function Layout({children} : ChildProps) {
    return (
        <div>
            <DashboardNavbar/>
            <Sidebar/>
            <main className="w-full pl-[320px] pt-24 pr-4 ">
                <div className="size-full px-2 pb-12 dark:bg-slate-800">{children}</div>
            </main>
        </div>
    )
}

export default Layout