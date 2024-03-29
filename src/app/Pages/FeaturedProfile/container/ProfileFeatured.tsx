import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import FPMember from '../components/Members/FPMember'

const ProfileFeatured = () => {
  return (
    <div>
       <Box
       sx={{
        position:'relative',
       }}
       >
        <Box
        height={{md:648,sm:648,xs:400}}
        >
       <Image
       src={"https://images.pexels.com/photos/169186/pexels-photo-169186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
        alt="bgImg"
        width={100}
        height={647}
        style={{
          width: "100%",
          filter: "brightness(60%)",
          objectFit: "cover",
        }}
       />
       </Box>
       <Box position={"absolute"} top={{md:'15%',sm:"15%",xs:'5%'}} width="100%">
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

export default ProfileFeatured
