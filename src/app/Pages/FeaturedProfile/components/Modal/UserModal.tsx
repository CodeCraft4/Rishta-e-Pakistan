"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import { COLORS } from "@/constant/color";
import Image from 'next/image'
import { Facebook, Pinterest, Twitter, } from '@mui/icons-material';



export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Typography sx={{
        color:COLORS.blueLight.main,
        cursor:"pointer"
      }} onClick={handleOpen}>More...</Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
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
           src="http://localhost:3001/_next/image?url=https%3A%2F%2Fwedding-wonders.bugfinder.net%2Fassets%2Fuploads%2Fusers%2F6363b2dbe5dd01667478235.jpg&w=256&q=75"
           width={150}
           height={150}
           style={{
            borderRadius:"50%",
            objectFit:"cover",
            zIndex:999,
           }}
            alt="userImg"/>
            <Typography p={1}>Amelia Emma</Typography>
            <Typography><b style={{color:COLORS.blueLight.main}}>Age:</b> 18</Typography>
             <Container maxWidth="md" >
            <Grid container spacing={2} sx={{mt:4}}>
              <Grid item md={6} sm={6} xs={12}>
              <Typography
              fontWeight="bold"
              fontSize={20}
              >Personal Info.</Typography>
              <Typography>Gender : Female</Typography>
            <Typography>Height : 2.6</Typography>
            <Typography>Religion : Muslim</Typography>
            <Typography>Country : Pakistani</Typography>
            <Typography>Education : FSC</Typography>
            <Typography>Profession : Doctor</Typography>
            <Typography>Martial Status : Married</Typography>
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
              <Typography
              fontWeight="bold"
              fontSize={20}
              >Description</Typography>
              <Typography
            sx={{
              width:"60%",
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
            </Box>
            </Box>
            </Box>
        </Box>
      </Modal>
    </div>
  );
}


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius:1,
    textAlign:"center",
    height:400,
    overflowY: 'scroll',
  };