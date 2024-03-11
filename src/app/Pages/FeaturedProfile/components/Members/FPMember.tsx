"use client"
import React from "react";
import { Box, Grid, Container, Typography, Stack, Pagination } from "@mui/material";
import { FEATURED_PROFILE } from "@/constant/content";
import Image from "next/image";
import Search from '../SearchMember/Search'
import { COLORS } from "@/constant/color";
import BasicModal from "../Modal/UserModal";



const UserShowOnPage = 3;

const FPMember = () => {
  const [user, setUser] = React.useState(1);
  const handleChange = (e: any, data: any) => {
    setUser(data);
  };
  const members = user * UserShowOnPage;
  const remainingMembers = members - UserShowOnPage;

  return (
    <div>
      <Container maxWidth="lg" sx={{ pb: 5,position:"relative" }}>
        <Grid container spacing={3}>
          <Grid item md={4} sm={4} xs={12}>
            <Search/>
          </Grid>
          <Grid item md={8} sm={8} xs={12} textAlign="center">
            {FEATURED_PROFILE.slice(remainingMembers, members).map((data) => (
              <Box
                key={data?.name}
                sx={{
                  display:{md:'flex',sm:"flex",xs:'block'},
                  boxShadow: `3px 9px 29px ${COLORS.secondary.main}`,
                  border:`1px solid ${COLORS.secondary.main}`,
                  justifyContent: "space-evenly",
                  p: 3,
                  mt:2,
                  alignItems: "center",
                  bgcolor:"white"
                }}
              >
                <Box>
                  <Image
                    src={data?.profileImg}
                    width={200}
                    height={200}
                    style={{ borderRadius: "50%", objectFit: "cover",border:`2px solid ${COLORS.blueLight.main}` }}
                    alt="img"
                  />
                  <Typography>
                    <b style={{color:COLORS.blueLight.main}}>Name:</b>
                    {data?.name}
                  </Typography>
                  <Typography>
                    <b style={{color:COLORS.blueLight.main}}>Age:</b>
                    {data?.age}
                  </Typography>
                </Box>
                <Box>
                  <Typography>
                    <b style={{color:COLORS.blueLight.main}}>Height:</b>
                    {data?.height}
                  </Typography>
                  <Typography>
                    <b style={{color:COLORS.blueLight.main}}>Religion:</b>
                    {data?.religion}
                  </Typography>
                  <Typography>
                    <b style={{color:COLORS.blueLight.main}}>Country:</b>
                    {data?.country}
                  </Typography>
                  <Typography>
                    <b style={{color:COLORS.blueLight.main}}>Martial Status:</b>
                    {data?.mStatus}
                  </Typography>
                  <Typography>
                    <b style={{color:COLORS.blueLight.main}}>Education:</b>
                    {data?.education}
                  </Typography>
                  <Typography>
                    <b style={{color:COLORS.blueLight.main}}>Profession:</b>
                    {data?.profession}
                  </Typography>
                  <Box display={'flex'}>
                  <Typography >
                    <b style={{color:COLORS.blueLight.main}}>About:</b>
                    {data?.about} 
                    </Typography>
                    <BasicModal/>
                  </Box>
                </Box>
              </Box>
            ))}
            <Box mt={3}>
                 <Stack spacing={2}>
        <Pagination
          sx={{
            ".MuiPaginationItem-root": {
              border: `1px solid ${COLORS.dark.main}`,
              boxShadow:"inset 0px 0px 14px 3px gray",
              bgcolor: "white",
              "&.Mui-selected": {
                bgcolor: "black",
                color: "white",
                "&:hover": { bgcolor: "rgb(10%, 10%, 40%)", color: "white" },
              },

              "&:hover": { bgcolor: "rgb(254, 141, 241)", color: "white" },
            },
              '& > .MuiPagination-ul': {
                justifyContent: 'center',
              },
          }}
          count={Math.ceil(FEATURED_PROFILE.length / UserShowOnPage)}
          page={user}
          onChange={handleChange}
          variant="outlined"
          // shape="rounded"
        />
      </Stack>
      </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FPMember;
