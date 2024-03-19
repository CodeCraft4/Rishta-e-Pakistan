import React from 'react'
import { Box } from '@mui/material'
import Loginform from '../components/LogInForm/Loginform'
import Image from 'next/image'

const LoginContainer = () => {
  return (
    <div>
       <Box
       position="relative"
       height="100vh"
       >
        <Image
        src="https://images.pexels.com/photos/169186/pexels-photo-169186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        fill
        alt="bgImage"
        style={{
          filter:"brightness(40%)",
          objectFit:"cover"
        }}
        />
        <Box
        sx={{
          position:"absolute",
          top:'25%',
          width:'100%',
          textAlign:"center"
        }}>
         <Loginform/>
        </Box>
       </Box>
    </div>
  )
}

export default LoginContainer
