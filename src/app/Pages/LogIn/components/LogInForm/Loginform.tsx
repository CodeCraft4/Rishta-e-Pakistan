
import React from 'react'
import { Container,TextField,Divider,Link,Button } from '@mui/material'
import Image from 'next/image'

const Loginform = () => {
  return (
    <div>
        <Container
         maxWidth="sm"
         sx={{
           textAlign:'center',
           borderRadius:"5px",
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
              type="email"
              size="small"
              color="warning"
              placeholder="Enter E-mail"
              sx={{
                mb:1,
              }}
             />
             <TextField
              fullWidth
              type="password"
              size="small"
              color="warning"
              placeholder="Enter Password"
              sx={{
                mb:1,

              }}
             />
             <Link
              href="#"
              sx={{
                textAlign:"end",
                display:"flex",
                justifyContent:"end",
                p:1
              }}
             >Forget Password?</Link>
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

export default Loginform
