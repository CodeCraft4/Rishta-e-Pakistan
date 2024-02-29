import React from 'react'
import { Typography,Box, TextField,Container,Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import {COLORS} from '@/app/constant/color'
import AdvanceSearch from './components/AdvanceSearch/page';

const Search = () => {
  return (
    <div>
       <Box bgcolor={COLORS.secondary.main} pt={{md:15,sm:10,xs:15}} textAlign={"center"}>
      <Typography sx={{fontSize:{md:60,sm:60,xs:25},textAlign:"center",fontWeight:"900"}}>Quick Search.....</Typography>
        <Container maxWidth="md" sx={{bgcolor:"white",p:3,borderRadius:"8px"}}>
       <Box  sx={{bgcolor:"white",display:"flex",m:"auto",justifyContent:"center",borderRadius:"5px"}}>
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
