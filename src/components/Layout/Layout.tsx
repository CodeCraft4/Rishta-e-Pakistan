"use client"
import React from 'react'
import DrawerAppBar from '../Navbar/NavBar'
import Footer from '../Footer/footer'
import { usePathname } from 'next/navigation'

const Layout = ({children}:any) => {
    const pathname = usePathname()
  return (
    <div>
       {pathname === "/Pages/LogIn" ? undefined :<DrawerAppBar/>}
         {children}
    
    </div>
  )
}

export default Layout
