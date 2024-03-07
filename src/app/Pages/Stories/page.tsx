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
        src={'https://wedding-wonders.bugfinder.net/assets/uploads/story/thumb_63480056b7f0c1665663062.jpg'}
        width={100}
        height={450}
        style={{width:"100%",objectFit:"cover",filter:'brightness(50%)'}}
         alt="Img"
         />
         <Box
         sx={{position:"absolute",top:"20%",width:"100%"}}
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
