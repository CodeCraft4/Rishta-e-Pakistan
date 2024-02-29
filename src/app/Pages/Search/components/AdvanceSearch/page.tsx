import React from 'react'
import { Typography,Box, TextField,Container,Button } from '@mui/material'
import CustomizeButton from '@/app/components/commons/Button'
import SendIcon from '@mui/icons-material/Send';
import {COLORS} from '@/app/constant/color'

const AdvanceSearch = () => {
  return (
    <div>
       <Box pt={25} bgcolor={COLORS.secondary.main} pb={25} textAlign={"center"}>
        <Typography sx={{fontSize:{md:60,sm:60,xs:25},textAlign:"center",fontWeight:"900"}}>Advance Search.....</Typography>
        <Container maxWidth="md" sx={{bgcolor:"white",p:3,borderRadius:"8px"}}>
       <Box  sx={{bgcolor:"white",display:"flex",m:"auto",justifyContent:"center",width:"50%",borderRadius:"5px"}}>
         </Box>
       </Container>
       </Box>
    </div>
  )
}

export default AdvanceSearch
