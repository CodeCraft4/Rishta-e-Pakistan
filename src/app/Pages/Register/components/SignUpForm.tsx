
import React from 'react'
import { Container,TextField,Divider,Link,Button } from '@mui/material'
import Image from 'next/image'

const SignUpForm = () => {
  return (
    <div>
        <Container
         maxWidth="sm"
         sx={{
            textAlign:'center',
            borderRadius:"8px",
            p:4,
            width:{md:"30%",sm:"50%",xs:"90%"},
            bgcolor:"rgba(75%,75%,75%,0.1)",
            boxShadow:"inset 3px 5px 288px black"
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
              color="warning"
              placeholder="Enter FullName"
              sx={{
                mb:1,
                border:"1.5px solid white",
                borderRadius:"3px"
              }}
             />
             <TextField
              fullWidth
              type="email"
              color="warning"
              size="small"
              placeholder="Enter E-mail"
              sx={{
                mb:1,
                border:"1.5px solid white",
                borderRadius:"3px"
              }}
             />
             <TextField
              fullWidth
              type="password"
              color="warning"
              size="small"
              placeholder="Enter Password"
              sx={{
                mb:1,
                border:"1.5px solid white",
                borderRadius:"3px"
              }}
             />
             <TextField
              fullWidth
              color="warning"
              type="password"
              size="small"
              placeholder="Verify Password"
              sx={{
                mb:1,
                border:"1.5px solid white",
                borderRadius:"3px"
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
