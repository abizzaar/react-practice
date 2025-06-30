import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Outlet } from "react-router"
 
export function Layout() {
  return (
    <>
        <SidebarProvider>
            <AppSidebar />
            <main className="p-8">
                {/* <SidebarTrigger /> */}
                <Outlet />
            </main>
            </SidebarProvider>
    </>
  )
}