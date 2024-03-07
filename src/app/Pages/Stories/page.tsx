import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import DribbbleShot from "./components/StoriesCards/HappyStoriesCard";

const Stories = () => {
  return (
    <div>
      <Box
         sx={{position:"relative"}}
      >
        <Image
        src={'https://images.pexels.com/photos/169186/pexels-photo-169186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
        width={100}
        height={450}
        style={{width:"100%",objectFit:"cover",filter:'brightness(40%)'}}
         alt="Img"
         />
         <Box
         sx={{position:"absolute",top:"15%",width:"100%"}}
         >
          <Typography
          sx={{
            textAlign:"center",
            fontSize:{md:80,sm:80,xs:50},
            color:"white"
          }}
          >STORY</Typography>
         </Box>
         <DribbbleShot/>
      </Box>
    </div>
  );
};

export default Stories;
