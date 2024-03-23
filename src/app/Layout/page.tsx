"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import DrawerAppBar from '@/components/Footer/footer';
import Footer from '@/components/Navbar/NavBar';
const RootLayouts = ({children}:any) => {
    const path=usePathname()
  return (
    <div>
      {path == "/Pages/LogIn"? null : <Footer/>}
      {children}
      {path == "/Pages/LogIn"? null : <DrawerAppBar/>}
    </div>
  )
}

export default RootLayouts
