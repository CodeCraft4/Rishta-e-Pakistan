import React from 'react'
import { Typography,Box, TextField,Container,Button } from '@mui/material'
import CustomizeButton from '@/app/components/commons/Button'
import SendIcon from '@mui/icons-material/Send';
import {COLORS} from '@/app/constant/color'
import AdvanceSearch from './components/AdvanceSearch/page';

const Search = () => {
  return (
    <div>
       <Box pt={25} bgcolor={COLORS.secondary.main} pb={25} textAlign={"center"}>
        <Container maxWidth="md" sx={{bgcolor:"white",p:3,borderRadius:"8px"}}>
      <Typography sx={{fontSize:{md:60,sm:60,xs:40},textAlign:"center",fontWeight:"900"}}>Quick Search.....</Typography>
       <Box  sx={{bgcolor:"white",display:"flex",m:"auto",justifyContent:"center",width:"50%",borderRadius:"5px"}}>
         <TextField
          placeholder="Enter Full Name"
          fullWidth
          type="search"
          sx={{
            borderRadius:"none",
            border:"none"
        }}
           />
         <Button 
         variant="contained"
         sx={{
          borderRadius:"0px 5px 5px 0px",
          ml:-1,
          bgcolor:"gray",
          "&:hover":{
            bgcolor:"black"
          }
      }}
         ><SendIcon/></Button>
       </Box>
       </Container>
       <AdvanceSearch/>
       </Box>
    </div>
  )
}

export default Search
