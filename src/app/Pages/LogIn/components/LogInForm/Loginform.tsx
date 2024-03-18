
import React from 'react'
import { Container,TextField,Divider,Link,Button } from '@mui/material'
import Image from 'next/image'

const Loginform = () => {
  return (
    <div>
        <Container
         maxWidth="md"
         sx={{
            bgcolor:"white",
            textAlign:'center',
            borderRadius:"8px",
            p:4,
            width:"80%"
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
