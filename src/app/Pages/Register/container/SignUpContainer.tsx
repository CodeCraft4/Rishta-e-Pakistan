import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import SignUpForm from './../components/SignUpForm';

const SignUpContainer = () => {
  return (
    <div>
       <Box
       sx={{
        position:"relative",
        height:"100vh",
             }}
       >
        <Image
        src="https://images.pexels.com/photos/169186/pexels-photo-169186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        fill
        alt="bgImage"/>
        <Box
        sx={{
          position:"absolute",
          top:'25%',
          width:'100%',
          textAlign:"center"
        }}>
         <SignUpForm/>
        </Box>
       </Box>
    </div>
  )
}

export default SignUpContainer

