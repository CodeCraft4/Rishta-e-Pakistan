import React from 'react'
import { COLORS } from '@/app/constant/color'
import { Box, Button, Container, Typography } from '@mui/material'
import { PACKAGE_CARD } from '@/app/constant/content'
import CheckIcon from '@mui/icons-material/Check';
import Grid from '@mui/material/Grid';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CustomizeButton from '@/app/components/commons/Button';

const PackageCard = () => {
  return (
    <div>
        <Box
        sx={{bgcolor:"#e0e0e0",p:{md:10,sm:5,xs:1}}}
        >
       <Typography variant="h1" sx={{textAlign:"center",fontFamily:"fantasy",p:2,fontSize:{md:80,sm:60,xs:50}}}>PACKAGE</Typography>
        <Typography sx={{textAlign:"center",color:COLORS.dark.main,fontSize:13,fontStyle:"italic"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit id cupiditate. Repudiandae blanditiis ullam natus quas explicabook.</Typography>
         <Container maxWidth="lg" sx={{mt:10}}>
            <Grid container  spacing={5}>
            {PACKAGE_CARD.map((data,i)=>(
                <Grid item md={4} sm={6} xs={12} key={i}>
                    <Box sx={{borderRadius:"8px",p:2,border:"1px solid #bdbdbd",bgcolor:"white",width:"100%"}}>
                        <AccountCircleIcon sx={{bgcolor:"black",color:"white",fontSize:60,borderRadius:"50%",display:"flex",justifyContent:"center",m:'auto'}}/>
                    <Typography variant="h5" sx={{textAlign:"center",fontWeight:"800",fontSize:{md:30,sm:40,xs:30}}}>{data.title}</Typography>
                    <Typography variant="h3" sx={{p:2,textAlign:"center"}}><small>$</small><b>{data.price}</b></Typography>
                    <Typography sx={{display:"flex",alignItems:"center",p:1}}><CheckIcon sx={{color:COLORS.primary.main}}/>{data.tip1}</Typography>
                    <Typography sx={{display:"flex",alignItems:"center",p:1}}><CheckIcon sx={{color:COLORS.primary.main}}/>{data.tip2}</Typography>
                    <Typography sx={{display:"flex",alignItems:"center",p:1}}><CheckIcon sx={{color:COLORS.primary.main}}/>{data.tip3}</Typography>
                    <Typography sx={{display:"flex",alignItems:"center",p:1}}><CheckIcon sx={{color:COLORS.primary.main}}/>{data.tip4}</Typography>
                    <CustomizeButton title={"PERCHASE"}/>
                    </Box>
                </Grid>
            ))}
            </Grid>
         </Container>
        </Box>
    </div>
  )
}

export default PackageCard
