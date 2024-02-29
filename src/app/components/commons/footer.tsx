import React from 'react'
import Image from 'next/image'
import { Container, Grid,Typography,Box,List,ListItem,TextField,Button} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import Link from 'next/Link'
import { COLORS } from "@/app/constant/color";


const Footer = () => {
  return (
    <div>
        <Box
        sx={{bgcolor:"#e0e0e0"}}

        >
      <Container maxWidth="lg" sx={{mt:30}}>
        <Grid container spacing={3} sx={{pt:8}}>
            <Grid item md={3}>
                <Image
                 src={"https://wedding-wonders.bugfinder.net/assets/uploads/logo/logo.png"} 
                alt='logo'
                width={250}
                height={80}
                />
                <Typography sx={{mt:2,color:COLORS.dark.main}}>7 Green Lake Street Crawfordsville, IN 47933</Typography>
                <Typography sx={{mt:2,color:COLORS.dark.main}}>Email:info@metrimony.com</Typography>
                <Typography sx={{mt:2,color:COLORS.dark.main}}>Phone: +1 800 123 456 789</Typography>
                <Box sx={{p:2,}}>
                <FacebookIcon sx={{"&:hover":{color:"brown",cursor:"pointer"}}}/>
                <TwitterIcon sx={{"&:hover":{color:"brown",cursor:"pointer"}}}/>
                <LinkedInIcon sx={{"&:hover":{color:"brown",cursor:"pointer"}}}/>
                <InstagramIcon sx={{"&:hover":{color:"brown",cursor:"pointer"}}}/>
                </Box>
            </Grid>
            <Grid item md={3} mt={3}>
                <Typography sx={{fontSize:20}}>USEFUL LINKS</Typography>
                <List>
                <ListItem><Link href="/" style={{fontSize:13,color:COLORS.dark.main,textDecoration:"none",}}>Home</Link></ListItem>
                <ListItem><Link href="/" style={{fontSize:13,color:COLORS.dark.main,textDecoration:"none",}}>About</Link></ListItem>
                <ListItem><Link href="/" style={{fontSize:13,color:COLORS.dark.main,textDecoration:"none",}}>Peckage</Link></ListItem>
                <ListItem><Link href="/" style={{fontSize:13,color:COLORS.dark.main,textDecoration:"none",}}>Blog</Link></ListItem>
                </List>
            </Grid>
            <Grid item md={3} mt={3}>
            <Typography sx={{fontSize:20}}>QUICK SEARCH</Typography>
                <List>
                <ListItem><Link href="/" style={{fontSize:13,color:COLORS.dark.main,textDecoration:"none"}}>Faq</Link></ListItem>
                <ListItem><Link href="/" style={{fontSize:13,color:COLORS.dark.main,textDecoration:"none"}}>Contact</Link></ListItem>
                <ListItem><Link href="/" style={{fontSize:13,color:COLORS.dark.main,textDecoration:"none"}}>Term & Condition</Link></ListItem>
                <ListItem><Link href="/" style={{fontSize:13,color:COLORS.dark.main,textDecoration:"none"}}>Privacy Policy</Link></ListItem>
                </List>
            </Grid>
            <Grid item md={3} mt={3}>
            <Typography sx={{fontSize:20}}>USEFUL LINKS</Typography>
            <Typography sx={{mt:2,color:COLORS.dark.main}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</Typography>
             <Box
             sx={{display:"flex",alignItems:"center",border:"1px solid #e0e0e0",borderRadius:"4px",mt:3}}
             >
                 <TextField type="email" size="small" fullWidth  placeholder="Enter email" sx={{border:"none",borderRadius:0}}/>
                 <Button variant="contained" sx={{bgcolor:"black",p:1,borderRadius:0,m:-2,"&:hover":{bgcolor:"black"}}}>
                 <TelegramIcon sx={{color:"white"}}/>
                 </Button>
             </Box>
            </Grid>
        </Grid>
      </Container>
      </Box>
    </div>
  )
}

export default Footer
