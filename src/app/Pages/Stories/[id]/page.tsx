import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { STORIES } from "@/constant/content";
import { COLORS } from "@/constant/color";

const SingleStory = ({ params }: any) => {
  return (
    <Box>
      <Box>
        <Typography
          fontSize={{ md: "4rem", sm: "2rem", xs: "2rem" }}
          textAlign={"center"}
          fontWeight={900}
          pt={{md:15,sm:15,xs:10}}
          pb={{md:15,sm:15,xs:10}}
        >
          Stories Details
        </Typography>
      </Box>
      <Box bgcolor={COLORS.dark.main}>
        <Container maxWidth="md">
          {STORIES.map((items, i) => (
            <Box key={i}>
              {items?.id == params.id && (
                <Box>
                  <Typography
                    textAlign={"center"}
                    fontSize={"1.2rem"}
                    fontWeight={"bold"}
                    py={{ md: 7, sm: 4, xs: 3 }}
                  >
                    {items?.title}
                  </Typography>
                  <Typography
                    textAlign={"center"}
                    fontSize={"small"}
                    fontWeight={"bold"}
                    pb={2}
                  >
                    {items?.postBy}
                  </Typography>
                  <Box
                    width={{ md: "100%" }}
                    mx={"auto"}
                    height={{md:"500px",sm:"400px",xs:"250px"}}
                    position={"relative"}
                  >
                    <Image
                      fill
                      style={{ objectFit: "cover" }}
                      src={items?.poster}
                      alt="nature"
                    />
                  </Box>
                  <Typography pt={2} pb={{ md: 10 }}>
                    {items?.details}
                  </Typography>
                  <Typography
                    fontSize={{ md: "3rem", sm: "2rem", xs: "1.5rem" }}
                    pt={{ md: 5,sm:6,xs:4 }}
                    pb={{ md: 0, xs: 1 }}
                    textAlign={"center"}
                  >
                    Related Photoes
                  </Typography>
                  <Grid container py={{md:6,xs:2}} spacing={1}>
                    {STORIES[i].RELATED_PHOTO.map((demo, i) => (
                      <Grid item md={3} sm={6} xs={12} key={i} >
                        <Box
                          width={{ md: "100%" }}
                          mx={"auto"}
                          height={"200px"}
                          position={"relative"}
                        >
                          <Image
                            fill
                            style={{ objectFit: "cover" }}
                            src={demo}
                            alt="nature"
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}
            </Box>
          ))}
        </Container>
      </Box>
    </Box>
  );
};
export async function generateMetadata({ param }: any) {
  // STORIES.map((items, i) => ({
  //   title: `${items?.mPartnerName} & ${story?.fePartnerName}`,
  // }));
}
export default SingleStory;