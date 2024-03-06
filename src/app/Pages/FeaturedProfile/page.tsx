import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import FPMember from './components/Members/FPMember'

const page = () => {
  return (
    <div>
       <Box
       sx={{
        position:'relative'
       }}
       >
       <Image
       src={"https://wedding-wonders.bugfinder.net/assets/uploads/blog/thumb_6342cd9ad5fee1665322394.jpg"}
        alt="bgImg"
        width={100}
        height={647}
        style={{
          width: "100%",
          filter: "brightness(60%)",
          objectFit: "cover",
        }}
       />
       <Box position={"absolute"} top={{md:'15%',sm:"15%",xs:'10%'}} width="100%">
         <Typography
         fontSize={{md:80,sm:80,xs:40}}
         textAlign="center"
         color='white'
         >Featured Member</Typography>
       </Box>
       <FPMember/>
       </Box>
    </div>
  )
}

export default page
