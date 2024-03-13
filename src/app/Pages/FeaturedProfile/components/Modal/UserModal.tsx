import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import {Container, Grid } from "@mui/material";
import Image from "next/image";
import { COLORS } from "@/constant/color";
import { Facebook, Pinterest, Twitter,Instagram, LinkedIn } from "@mui/icons-material";



const UserInfoModal = (props: any) => {
  const { userInformation, userInfoModal, CloseModal } = props;

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={userInfoModal}
        onClose={CloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={userInfoModal}>
        <Box sx={style}>
          <Box
          sx={{
            position:"relative"
          }}
          >
          <Image
          src="https://images.pexels.com/photos/3516751/pexels-photo-3516751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={150}
          height={150}
          
          style={{
            width:'100%',
            objectFit:"cover",
            filter:'brightness(40%)'
          }}
          alt="bgImg"
          />
          <Box
          sx={{
            position:"absolute",
            width:"100%",
            top:"45%"
          }}
          >
           <Image
           src={userInformation.profileImg}
           width={150}
           height={150}
           style={{
            borderRadius:"50%",
            objectFit:"cover",
            zIndex:999,
           }}
            alt="userImg"/>
            <Typography p={1}>Amelia Emma</Typography>
            <Typography><b style={{color:COLORS.blueLight.main}}>Age:</b> {userInformation.age}</Typography>
             <Container maxWidth="md" >
            <Grid container spacing={2} sx={{mt:4}}>
              <Grid item md={6} sm={6} xs={12}>
              <Typography
              fontWeight="bold"
              fontSize={20}
              textAlign={"center"}
              >Personal Info.</Typography>
            <Typography>Height : {userInformation.height}</Typography>
            <Typography>Religion : {userInformation.religion}</Typography>
            <Typography>Country : {userInformation.country}</Typography>
            <Typography>Education : {userInformation.education}</Typography>
            <Typography>Profession : {userInformation.profession}</Typography>
            <Typography>Martial Status : {userInformation.mStatus}</Typography>
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
              <Typography
              fontWeight="bold"
              fontSize={20}
              textAlign={"center"}
              >Description</Typography>
              <Typography
            sx={{
              width:{md:'60%',sm:'60%',xs:"100%"},
              display:"flex",
              justifyContent:"center",
              m:'auto',
            }}
            >An artist of considerable range, Chet Faker — the name taken by 
              Melbourne-raised, Brooklyn-based Nick Murphy — writes,
              performs and records all of his own music, giving it a warm,
              intimate feel with a solid groove structure.</Typography>
              </Grid>
            </Grid>
             </Container>
              <Box p={1}>
              <Facebook fontSize="large"
               sx={{
                opacity:.5,
                "&:hover":{
                  opacity:1
                }
               }}
              />
              <Twitter fontSize="large"
               sx={{
                opacity:.5,
                "&:hover":{
                  opacity:1
                }
               }}
              />
              <Pinterest fontSize="large"
               sx={{
                opacity:.5,
                "&:hover":{
                  opacity:1
                }
               }}
              />
              <Instagram fontSize="large"
               sx={{
                opacity:.5,
                "&:hover":{
                  opacity:1
                }
               }}
              />
              <LinkedIn fontSize="large"
               sx={{
                opacity:.5,
                "&:hover":{
                  opacity:1
                }
               }}
              />
            </Box>
            </Box>
            </Box>
        </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default UserInfoModal;


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { md: "80%", xs: "90%" },
  height: "85%",
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius:1,
  textAlign:"center",
  overflowY: 'scroll',
};
// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   height: "85%",
//  
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
//   overflowY: "scroll",
// };