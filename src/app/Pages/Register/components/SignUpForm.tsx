
import React from 'react'
import { Container,TextField,Divider,Link,Button } from '@mui/material'
import Image from 'next/image'

const SignUpForm = () => {
  return (
    <div>
        <Container
         maxWidth="sm"
         sx={{
            bgcolor:"white",
            textAlign:'center',
            borderRadius:"8px",
            p:4,
            width:"70%"
         }}
         >
            <form>
               <Image
                src={'https://wedding-wonders.bugfinder.net/assets/uploads/logo/logo.png'}
                width={200}
                height={70}
                style={{
                    margin:'20px'
                }}
                alt='logo'
               />
               <Divider/>
             <TextField
              fullWidth
              type="text"
              size="small"
              placeholder="Enter FullName"
              sx={{
                mb:1,

              }}
             />
             <TextField
              fullWidth
              type="email"
              size="small"
              placeholder="Enter E-mail"
              sx={{
                mb:1,

              }}
             />
             <TextField
              fullWidth
              type="password"
              size="small"
              placeholder="Enter Password"
              sx={{
                mb:1,

              }}
             />
             <TextField
              fullWidth
              type="password"
              size="small"
              placeholder="Verify Password"
              sx={{
                mb:1,

              }}
             />
             
              <Button 
              variant="contained"
              fullWidth
              type="submit"
              >Submit</Button>
            </form>
        </Container>
    </div>
  )
}

export default SignUpForm
