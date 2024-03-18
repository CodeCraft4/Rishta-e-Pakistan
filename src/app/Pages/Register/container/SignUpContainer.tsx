import { Box } from '@mui/material'
import React from 'react'
import SignUpForm from '../components/SignUpForm'

const SignUpContainer = () => {
  return (
    <div>
       <Box
       sx={{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        textAlign:"center",
        backgroundImage:"url('https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
       }}
       >
         <SignUpForm/>
       </Box>
    </div>
  )
}

export default SignUpContainer
