import React from 'react'
import AdvanceSearch from '../components/AdvanceSearch/AdvanceSearch'
import QuickSearch from '../components/QuickSearch/QuickSearch'
import { Box } from '@mui/material'
import Image from "next/image";
import { COLORS } from '@/constant/color'

const SearchContainer = () => {
  return (
    <div>
       <Box textAlign={"center"} position={"relative"} bgcolor={COLORS.dark.main}>
        <Image 
         src="https://images.pexels.com/photos/169186/pexels-photo-169186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
         width={100}
         height={647}
         style={{
           width: "100%",
           filter: "brightness(30%)",
           objectFit: "cover",
         }}
        alt="bgImg"/>
        <Box
        sx={{position:"absolute",top:"10%",width:"100%"}}
        >
      <QuickSearch/>
        </Box>
      <AdvanceSearch/>
      </Box>
    </div>
  )
}

export default SearchContainer
