"use client";
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
  Select,
  MenuItem,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import Image from "next/image";
import CustomizeButton from "@/components/Button/Button";
import { COLORS } from "@/constant/color";
import { CAST_DROPDOWN, COUNTRY_DROPDOWN } from "@/constant/content";


const Header = () => {

  return (
    <div>
      <Box
        sx={{
          position: "relative",
          height: { md: 648, sm: 647, xs: 800 },
          bgcolor: COLORS.dark.main,
        }}
      >
        <Box
        height={{md:648,sm:648,xs:900}}
        bgcolor={COLORS.dark.main}
        >
        <Image
          src={
            "https://images.pexels.com/photos/169186/pexels-photo-169186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: { md: "20%", sm: "20%", xs: "10%" },
            width: "100%",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item md={6} sm={6} xs={12} sx={{ color: "white" }}>
                <Typography sx={{ fontSize: { md: 50, sm: 30, xs: 30 } }}>
                  Find Your Perfect Soul Mate!
                </Typography>
                <Typography sx={{ fontSize: { md: 15, sm: 15, xs: 12 } }}>
                  Finding your perfect soul mate is like discovering the missing
                  piece to your puzzle of life.I about connecting with
                  someone who understands you deeply, shares your values, and
                  brings out the best in you. Your soul mate is the person who
                  complements you in every way, making you feel whole and
                  cherished. Together, you navigate life joys and challenges
                  hand in hand, creating a bond that withstands the test of
                  time. It about connecting withsomeone who understands you deeply,
                   shares your values, andbrings out the best in you.
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
                    height: {md:'400px',sm:'400px',xs:'460px'},
                    width: { md: "70%", sm: "100%", xs: "100%" },
                    bgcolor: {md:"transprent",sm:"transparent",xs:COLORS.secondary.main},
                    textAlign: "center",
                    borderRadius: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      p: 3,
                      bgcolor: COLORS.primary.main,
                      fontWeight: "bold",
                    }}
                  >
                    Search Members
                  </Typography>
                    <Grid container>
                      <Grid
                       item
                          md={12}
                          p={3}
                          textAlign="start"
                          fontWeight="bold"
                          color="white"
                          >
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
                      <Grid container spacing={1}>
                        <Grid item md={6} sm={6} xs={12}>
                          Age:
                          <TextField
                          size="small"
                          type="number"
                          value={18}
                          sx={{ border: "2px solid white", color: "white",borderRadius:1 }}

                              />
                        </Grid>
                        <Grid item md={6} sm={6} xs={12}>
                        To:
                          <TextField 
                          size="small" 
                          type="number"
                           value={50}
                          sx={{ border: "2px solid white", color: "white",borderRadius:1 }}
                            />
                        </Grid>
                      </Grid>
                      <Box
                      sx={{
                        display: "flex",
                        color: "white",
                        alignItems: "center",
                        mt: 2,
                        mx: 6,
                      }}
                    >
                      Caste:
                      <FormControl sx={{ width: { md: 200,sm:150,xs:100 } }}>
                        <Select
                          size="small"
                          input={<OutlinedInput/>}
                          sx={{ border: "2px solid white", color: "white" }}
                        >
                          {CAST_DROPDOWN.map((name) => (
                            <MenuItem
                              key={name}
                              value={name}
                            >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
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
                      Country:
                      <FormControl sx={{ width: { md: 200,sm:150,xs:100 } }}>
                        <Select
                          size="small"
                          fullWidth
                          input={<OutlinedInput/>}
                          sx={{ border: "2px solid white", color: "white" }}
                        >
                          {COUNTRY_DROPDOWN.map((name) => (
                            <MenuItem
                              key={name}
                              value={name}
                            >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                      <CustomizeButton title="Search"/>
                      </Grid>
                    </Grid>
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
