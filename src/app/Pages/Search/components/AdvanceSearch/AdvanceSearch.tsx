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

const AdvanceSearch = () => {
  return (
    <div>
      <Box pt={15} pb={25} textAlign={"center"}>
        <Typography
          sx={{
            fontSize: { md: 60, sm: 60, xs: 25 },
            textAlign: "center",
            fontWeight: "bold",
            color:COLORS.primary.main
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
                  Age:
                  <TextField placeholder="from" type="number" size="small" value={"18"} />
                </Grid>
                <Grid item md={6} sm={6} xs={6}>
                  <TextField placeholder="to" type="number" size="small" value={"50"} />
                </Grid>
              </Grid>
              <Box p={1}>
                Religion:
                <FormControl sx={{ width: { md: 300 } }}>
                  <Select
                    size="small"
                    input={<OutlinedInput />}
                    sx={{ border: "2px solid white", color: "black" }}
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
                <FormControl sx={{ width: { md: 300 } }}>
                  <Select
                    size="small"
                    input={<OutlinedInput />}
                    sx={{ border: "2px solid white", color: "black" }}
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
                <FormControl sx={{ width: { md: 300 } }}>
                  <Select
                    size="small"
                    input={<OutlinedInput />}
                    sx={{ border: "2px solid white", color: "black" }}
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
                <FormControl sx={{ width: { md: 300 } }}>
                  <Select
                    size="small"
                    input={<OutlinedInput />}
                    sx={{ border: "2px solid white", color: "black" }}
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
                <FormControl sx={{ width: { md: 300 } }}>
                  <Select
                    size="small"
                    input={<OutlinedInput />}
                    sx={{ border: "2px solid white", color: "black" }}
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
                  Height:
                  <TextField placeholder="from" type="number" size="small" />
                </Grid>
                <Grid item md={6} sm={6} xs={6}>
                  <TextField placeholder="to" type="number" size="small"/>
                </Grid>
              </Grid>
              <Box p={1}>
                Sect:
                <FormControl sx={{ width: { md: 300 } }}>
                  <Select
                    size="small"
                    input={<OutlinedInput />}
                    sx={{ border: "2px solid white", color: "black" }}
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
                <FormControl sx={{ width: { md: 300 } }}>
                  <Select
                    size="small"
                    input={<OutlinedInput />}
                    sx={{ border: "2px solid white", color: "black" }}
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
                <FormControl sx={{ width: { md: 300 } }}>
                  <Select
                    size="small"
                    input={<OutlinedInput />}
                    sx={{ border: "2px solid white", color: "black" }}
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
                <FormControl sx={{ width: { md: 300 } }}>
                  <Select
                    size="small"
                    input={<OutlinedInput />}
                    sx={{ border: "2px solid white", color: "black" }}
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
                control={<Checkbox defaultChecked />}
                label="Profile with Phtoto"
              />
            </Grid>
            <Grid item md={4}>
              <FormControlLabel
                control={<Checkbox />}
                label="Featured by Fimily"
              />
            </Grid>
            <Grid item md={4}>
              <FormControlLabel
                control={<Checkbox />}
                label="Featured by Profile only"
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            sx={{
              bgcolor: COLORS.primary.main,
              "&:hover": {
                bgcolor: COLORS.dark.main,
              },
            }}
          >
            Search
          </Button>
        </Container>
      </Box>
    </div>
  );
};

export default AdvanceSearch;
