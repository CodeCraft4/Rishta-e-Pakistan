import { COLORS } from "@/constant/color";
import styles from "./stories.module.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { STORIES } from "@/constant/content";

const HappyStories = () => {
  return (
    <Box bgcolor={COLORS.dark.main} pb={{ md: 6 }} position={"relative"}>
      <Typography
        fontSize={{ md: "3rem", sm: "2rem", xs: "1.5rem" }}
        py={{ md: 7, sm: 3, xs: 2 }}
        textAlign={"center"}
      >
          Happy Stories
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={2} px={{ md: 2 }}>
          {STORIES.map((data, i) => (
            <Grid item md={4} sm={6} xs={12} key={i}>
              <Link
                href={`/Pages/Stories/${data?.id}`}
                className={styles.container}
                style={{
                  display: "flex",
                  marginBottom: "20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image
                  width={340}
                  height={240}
                  className={styles.image}
                  src={data?.poster}
                  alt="nature"
                />
                <div className={styles.contents}>
                  <Typography fontSize={"1.3rem"} fontWeight={"bold"} fontStyle={"italic"}>
                    {data?.couple} 
                  </Typography>
                  <Typography mt={1} >
                    {data?.placeDate}
                  </Typography>
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HappyStories;