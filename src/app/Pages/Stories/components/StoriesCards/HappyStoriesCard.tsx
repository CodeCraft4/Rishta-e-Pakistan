import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import CardCover from '@mui/joy/CardCover';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Image from 'next/image';
import { Container, Grid } from '@mui/material';
import { STORY_CARD } from '@/constant/content';
import { COLORS } from '@/constant/color';


export default function DribbbleShot() {
  

  return (
    <Box
    bgcolor={COLORS.dark.main}
    p={4}
    >
        <Typography
        sx={{
            textAlign:"center",
            fontSize:{md:60,sm:60,xs:50},
            p:5,
            fontWeight:900
        }}
        >HAPPY STORIES</Typography>
        <Container maxWidth="md">
        <Grid container spacing={1}>
             {STORY_CARD.map((data)=>(
                <Grid
                 item
                 key={data.id}
                 md={4}
                 sm={6}
                 xs={12}
                >
   <Box
   sx={{
     width: "100%",
     bgcolor: 'transparent',
   }}
 >
   <Box sx={{ position: 'relative'}}>
     <AspectRatio ratio="4/3">
       <figure>
         <Image
          src={data.img}
          width={100}
          height={300}
          style={{width:"100%",objectFit:"cover",filter:"brightness(70%)"}}

           alt="Yosemite by Casey Horner"
         />
       </figure>
     </AspectRatio>
     <CardCover
       className="gradient-cover"
       sx={{
         '&:hover, &:focus-within': {
           opacity: 1,
         },
         opacity: 0,
         transition: '.3s ease-in',
         background:
           'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
       }}
     >
       {/* The first box acts as a container that inherits style from the CardCover */}
         <Box
           sx={{
             display: 'flex',
             alignItems: 'center',
             height:{md:300,xs:220},
             justifyContent:"center",
             textAlign:"center"
           }}
         >
            <Box
              sx={{
                bgcolor:'rgba(218, 223, 225,0.5)',
                p:{md:6,sm:9,xs:2},
              }}
            >
           <Typography sx={{ fontSize:{md:20,sm:20,xs:22} }}>
             <Link
               href="/Pages/Donate"
               overlay
               underline="none"
               sx={{
                 color:"black",
                 textOverflow: 'ellipsis',
                 overflow: 'hidden',
                 display: 'block',
                 p:2
               }}
             >
              {data.name}
             </Link>
           </Typography>
            <Typography>{data.placeDate}</Typography>
           </Box>
         </Box>
     </CardCover>
   </Box>
 </Box>
 </Grid>
 ))}
        </Grid>
        </Container>
 
    </Box>
  );
}