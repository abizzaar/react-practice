import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import { NavLink } from "react-router"

const items = [
{
    title: "Home",
    url: "/",
},
{
    title: "Page Two",
    url: "/two",
},
]

// Wrapper component to handle active state
function SidebarNavLink({ item }: { item: typeof items[0] }) {
  return (
    <NavLink to={item.url} end={item.url === "/"}>
      {({ isActive }) => (
        <SidebarMenuButton asChild isActive={isActive}>
          <div>
            <span>{item.title}</span>
          </div>
        </SidebarMenuButton>
      )}
    </NavLink>
  )
}

  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>React Practice</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarNavLink item={item} />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }