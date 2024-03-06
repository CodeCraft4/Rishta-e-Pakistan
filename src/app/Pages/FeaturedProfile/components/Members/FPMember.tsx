import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import { FEATURED_PROFILE } from "@/constant/content";
import Image from "next/image";
import Link from "next/link";
import Search from '../SearchMember/Search'

const FPMember = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ pb: 10,border:"1px solid gray", mt: 5,borderRadius:'5px',position:"relative" }}>
        <Grid container spacing={3}>
          <Grid item md={4} sm={4} xs={12}>
            <Search/>
          </Grid>
          <Grid item md={8} sm={8} xs={12} textAlign="center">
            {FEATURED_PROFILE.map((data) => (
              <Box
                key={data.name}
                sx={{
                  display:{md:'flex',sm:"flex",xs:'block'},
                  boxShadow: "3px 9px 29px gray",
                  justifyContent: "space-around",
                  p: 3,
                  mt:3,
                  alignItems: "center",
                }}
              >
                <Box>
                  <Image
                    src={data.profileImg}
                    width={200}
                    height={200}
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                    alt="img"
                  />
                  <Typography>
                    <b>Name:</b>
                    {data.name}
                  </Typography>
                  <Typography>
                    <b>Age:</b>
                    {data.age}
                  </Typography>
                </Box>
                <Box>
                  <Typography>
                    <b>Height:</b>
                    {data.height}
                  </Typography>
                  <Typography>
                    <b>Religion:</b>
                    {data.religion}
                  </Typography>
                  <Typography>
                    <b>Country:</b>
                    {data.country}
                  </Typography>
                  <Typography>
                    <b>Martial Status:</b>
                    {data.mStatus}
                  </Typography>
                  <Typography>
                    <b>Education:</b>
                    {data.education}
                  </Typography>
                  <Typography>
                    <b>Profession:</b>
                    {data.profession}
                  </Typography>
                  <Typography>
                    <b>About:</b>
                    {data.about} 
                    <Link href="/Pages/Stories">More..</Link>
                    </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FPMember;
