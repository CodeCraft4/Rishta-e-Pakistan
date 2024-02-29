import React from "react";
import {
  Box,
  Card,
  Container,
  FormControlLabel,
  Grid,
  RadioGroup,
  Typography,
  Radio,
  FormControl,
  TextField,
  Button,
} from "@mui/material";
import Image from "next/image";
import CustomizeButton from "@/app/components/commons/Button";
import { COLORS } from "@/app/constant/color";


const Header = () => {
  return (
    <div>
      <Box sx={{ position: "relative",height:{md:647,sm:647,xs:800},bgcolor:COLORS.dark.main }}>
        <Image
          src={
            "https://wedding-wonders.bugfinder.net/assets/uploads/blog/thumb_6342cd9ad5fee1665322394.jpg"
          }
          width={100}
          height={647}
          style={{
            width: "100%",
            filter: "brightness(60%)",
            objectFit: "cover",
          }}
          alt="headerImg"
        />
        <Box sx={{ position: "absolute", top: {md:"20%",sm:"20%",xs:"10%"}, width: "100%" }}>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item md={6} sm={6} xs={12} sx={{ color: "white" }}>
                <Typography sx={{ fontSize: { md: 60,sm:40,xs:30 } }}>
                  Find Your Perfect Soul Mate!
                </Typography>
                <Typography sx={{ fontSize: { md: 15,sm:15,xs:12 } }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus aspernatur voluptate soluta praesentium sint
                  quibusdam eius facere, autem distinctio, dolor dicta vel culpa
                  quam ratione fugiat qui sequi, itaque obcaecati laborum. Velit
                  repellendus sapiente consequatur, eum modi quis iste eos nemo
                  numquam nesciunt fugiat ipsam. Porro suscipit temporibus esse
                  eligendi reiciendis ratione vero dignissimos consequuntur,
                  corrupti commodi ducimus delectus! Accusamus eos fugit, eaque
                  quasi obcaecati maxime rem porro libero aliquid?
                </Typography>
              </Grid>
              <Grid
                item
                md={6}
                sm={6}
                xs={12}
                sx={{ display: "flex", m: "auto", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    border: `1px solid ${COLORS.primary.main}`,
                    height: "400px",
                    width: {md:"70%",sm:"60%",xs:"100%"},
                    bgcolor: "transparent",
                    textAlign: "center",
                    borderRadius: "8px",
                  }}
                >
                  <Typography
                    sx={{ p: 3, bgcolor:COLORS.primary.main, fontWeight: "bold" }}
                  >
                    Search Members
                  </Typography>
                  <FormControl sx={{ p: {md:6,sm:6,xs:2}, color: "white" }}>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="male"
                      name="radio-buttons-group"
                    >
                      <Box
                        sx={{
                          color: "white",
                          display: "flex",
                          textAlign: "center",
                          m: "auto",
                        
                        }}
                      >
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio />}
                          label="Female"
                        />
                      </Box>
                    </RadioGroup>
                    <Box
                      sx={{
                        display: "flex",
                        color: "white",
                        alignItems: "center",
                      }}
                    >
                      Age:
                      <TextField
                        size="small"
                        value="any"
                        sx={{ border: "1px solid white", borderRadius: "4px" }}
                      />
                      to:
                      <TextField
                        size="small"
                        value="any"
                        sx={{ border: "1px solid white", borderRadius: "4px" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        color: "white",
                        alignItems: "center",
                        mt: 2,
                        mx: 6,
                      }}
                    >
                      cast:
                      <TextField
                        size="small"
                        value="any"
                        sx={{ border: "1px solid white", borderRadius: "4px" }}
                      />
                    </Box>
                    Country:
                    <TextField
                      size="small"
                      value="any"
                      sx={{ border: "1px solid white", borderRadius: "4px" }}
                    />
                    <CustomizeButton title={"Search"} />
                  </FormControl>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
