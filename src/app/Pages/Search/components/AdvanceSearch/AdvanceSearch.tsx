import React from "react";
import {
  Typography,
  Box,
  TextField,
  Container,
  Grid,
  Checkbox,
  FormControlLabel,
  Button,
  Select,
  MenuItem,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import { COLORS } from "@/constant/color";
import {
  RELIGION,
  LANGUAGE,
  EDUCATION,
  OCCUPATION,
  COUNTRY_DROPDOWN,
  CAST_DROPDOWN,
  STATE_LIST,
  CITIZENSHIP,
} from "@/constant/content";
import CustomizeButton from "@/components/Button/Button";

const AdvanceSearch = () => {
  return (
    <div>
      <Box pt={15} pb={25} textAlign={"center"}>
        <Typography
          sx={{
            fontSize: { md: 60, sm: 60, xs: 25 },
            textAlign: "center",
            fontWeight: "bold",
            color: COLORS.primary.main,
          }}
        >
          Advance Search.....
        </Typography>
        <Container
          maxWidth="md"
          sx={{ bgcolor: "white", p: 3, borderRadius: "8px" }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              px: { md: 10, sm: 5, xs: 1 },
              textAlign: "start",
              fontWeight: "bold",
            }}
          >
            <Grid item md={6} sm={6} xs={12}>
              <Grid container spacing={1}>
                <Grid
                  item
                  md={6}
                  sm={6}
                  xs={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "bold",
                  }}
                >
                  <Box
                    sx={{
                      display: { md: "block", sm: "block", xs: "flex" },
                    }}
                  >
                    <Typography fontWeight={"bold"}>Age:</Typography>
                    <TextField
                      placeholder="from"
                      type="number"
                      size="small"
                      value={"18"}
                      sx={{
                        boxShadow: "inset 0px 0px 2px 2px gray",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item md={6} sm={6} xs={6}>
                  <Box
                    sx={{
                      display: { md: "block", sm: "block", xs: "flex" },
                    }}
                  >
                    <Typography fontWeight={"bold"}>To:</Typography>
                    <TextField
                      placeholder="from"
                      type="number"
                      size="small"
                      value={"50"}
                      sx={{
                        boxShadow: "inset 0px 0px 2px 2px gray",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Box p={1}>
                Religion:
                <FormControl sx={{ width: { md: 300, sm: 300, xs: 250 } }}>
                  <Select
                    size="small"
                    input={<OutlinedInput />}
                    sx={{
                      border: "2px solid white",
                      color: "black",
                      boxShadow: "inset 0px 0px 2px 2px gray",
                    }}
                  >
                    {RELIGION.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box p={1}>
                Caste:
                <FormControl sx={{ width: { md: 300, sm: 300, xs: 250 } }}>
                  <Select
                    size="small"
                    input={<OutlinedInput />}
                    sx={{
                      border: "2px solid white",
                      color: "black",
                      boxShadow: "inset 0px 0px 2px 2px gray",
                    }}
                  >
                    {CAST_DROPDOWN.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box p={1}>
                Religion:
                <FormControl sx={{ width: { md: 300, sm: 300, xs: 250 } }}>
                  <Select
                    size="small"
                    input={<OutlinedInput />}
                    sx={{
                      border: "2px solid white",
                      color: "black",
                      boxShadow: "inset 0px 0px 2px 2px gray",
                    }}
                  >
                    {EDUCATION.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box p={1}>
                Country:
                <FormControl sx={{ width: { md: 300, sm: 300, xs: 250 } }}>
                  <Select
                    size="small"
                    input={<OutlinedInput />}
                    sx={{
                      border: "2px solid white",
                      color: "black",
                      boxShadow: "inset 0px 0px 2px 2px gray",
                    }}
                  >
                    {COUNTRY_DROPDOWN.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box p={1}>
                Citezenship:
                <FormControl sx={{ width: { md: 300, sm: 300, xs: 250 } }}>
                  <Select
                    size="small"
                    input={<OutlinedInput />}
                    sx={{
                      border: "2px solid white",
                      color: "black",
                      boxShadow: "inset 0px 0px 2px 2px gray",
                    }}
                  >
                    {CITIZENSHIP.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Grid container spacing={1}>
                <Grid
                  item
                  md={6}
                  sm={6}
                  xs={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "bold",
                  }}
                >
                  <Box
                    sx={{
                      display: { md: "block", sm: "block", xs: "flex" },
                    }}
                  >
                    <Typography fontWeight={"bold"}>Height:</Typography>
                    <TextField
                      placeholder="from"
                      type="number"
                      size="small"
                      sx={{
                        boxShadow: "inset 0px 0px 2px 2px gray",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item md={6} sm={6} xs={6}>
                  <Box
                    sx={{
                      display: { md: "block", sm: "block", xs: "flex" },
                    }}
                  >
                    <Typography fontWeight={"bold"}>To:</Typography>
                    <TextField
                      placeholder="to"
                      type="number"
                      size="small"
                      sx={{
                        boxShadow: "inset 0px 0px 2px 2px gray",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Box p={1}>
                Sect:
                <FormControl sx={{ width: { md: 300, sm: 300, xs: 250 } }}>
                  <Select
                    size="small"
                    input={<OutlinedInput />}
                    sx={{
                      border: "2px solid white",
                      color: "black",
                      boxShadow: "inset 0px 0px 2px 2px gray",
                    }}
                  >
                    {CITIZENSHIP.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box p={1}>
                language:
                <FormControl sx={{ width: { md: 300, sm: 300, xs: 250 } }}>
                  <Select
                    size="small"
                    input={<OutlinedInput />}
                    sx={{
                      border: "2px solid white",
                      color: "black",
                      boxShadow: "inset 0px 0px 2px 2px gray",
                    }}
                  >
                    {LANGUAGE.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box p={1}>
                occupation:
                <FormControl sx={{ width: { md: 300, sm: 300, xs: 250 } }}>
                  <Select
                    size="small"
                    input={<OutlinedInput />}
                    sx={{
                      border: "2px solid white",
                      color: "black",
                      boxShadow: "inset 0px 0px 2px 2px gray",
                    }}
                  >
                    {OCCUPATION.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box p={1}>
                State:
                <FormControl sx={{ width: { md: 300, sm: 300, xs: 250 } }}>
                  <Select
                    size="small"
                    input={<OutlinedInput />}
                    sx={{
                      border: "2px solid white",
                      color: "black",
                      boxShadow: "inset 0px 0px 2px 2px gray",
                    }}
                  >
                    {STATE_LIST.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ p: 4 }}>
            <Grid item md={4}>
              Show:{" "}
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{ color: COLORS.primary.main }}
                  />
                }
                label="Profile with Phtoto"
              />
            </Grid>
            <Grid item md={4}>
              <FormControlLabel
                control={<Checkbox sx={{ color: COLORS.primary.main }} />}
                label="Featured by Fimily"
              />
            </Grid>
            <Grid item md={4}>
              <FormControlLabel
                control={<Checkbox sx={{ color: COLORS.primary.main }} />}
                label="Featured by Profile only"
              />
            </Grid>
          </Grid>
          <CustomizeButton title="Search" />
        </Container>
      </Box>
    </div>
  );
};

export default AdvanceSearch;
