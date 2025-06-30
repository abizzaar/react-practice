import { Outlet } from 'react-router'
import { Nav } from './components/Nav.tsx'

export function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
} 