import React from "react";
import {
  Typography,
  Box,
  TextField,
  Container,
  Grid,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import { COLORS } from "@/app/constant/color";

const AdvanceSearch = () => {
  return (
    <div>
      <Box pt={15} bgcolor={COLORS.secondary.main} pb={25} textAlign={"center"}>
        <Typography
          sx={{
            fontSize: { md: 60, sm: 60, xs: 25 },
            textAlign: "center",
            fontWeight: "bold",
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
            sx={{ p: {md:10,sm:5,xs:1}, textAlign: "start", fontWeight: "bold" }}
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
                  <TextField placeholder="from" type="number" size="small" />
                </Grid>
                <Grid item md={6} sm={6} xs={6}>
                  <TextField placeholder="to" type="number" size="small" />
                </Grid>
              </Grid>
              <Box p={1}>
                Religion:
                <TextField
                  placeholder="Any"
                  fullWidth
                  type="number"
                  size="small"
                />
              </Box>
              <Box p={1}>
                Caste:
                <TextField
                  placeholder="Any"
                  fullWidth
                  type="number"
                  size="small"
                />
              </Box>
              <Box p={1}>
                Education:
                <TextField
                  placeholder="Any"
                  fullWidth
                  type="number"
                  size="small"
                />
              </Box>
              <Box p={1}>
                Country:
                <TextField
                  placeholder="Any"
                  fullWidth
                  type="number"
                  size="small"
                />
              </Box>
              <Box p={1}>
                Citezenship:
                <TextField
                  placeholder="Any"
                  fullWidth
                  type="number"
                  size="small"
                />
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
                  <TextField placeholder="to" type="number" size="small" />
                </Grid>
              </Grid>
              <Box p={1}>
                Religion:
                <TextField
                  placeholder="Any"
                  fullWidth
                  type="number"
                  size="small"
                />
              </Box>
              <Box p={1}>
                Caste:
                <TextField
                  placeholder="Any"
                  fullWidth
                  type="number"
                  size="small"
                />
              </Box>
              <Box p={1}>
                Education:
                <TextField
                  placeholder="Any"
                  fullWidth
                  type="number"
                  size="small"
                />
              </Box>
              <Box p={1}>
                Country:
                <TextField
                  placeholder="Any"
                  fullWidth
                  type="number"
                  size="small"
                />
              </Box>
              <Box p={1}>
                <FormGroup>
                  <Typography sx={{fontWeight:"bold",textAlign:"center"}}>Show:</Typography>
            <FormControlLabel control={<Checkbox />} label="Profile with Photo" />
            <FormControlLabel control={<Checkbox />} label="Profile by Family" />
            <FormControlLabel control={<Checkbox />} label="Featured by Profile only" />
           </FormGroup>
              </Box>
            </Grid>
            {/* <Grid item md={6} sm={6} xs={12}>
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
                <Grid item md={6}>
                  <TextField placeholder="to" type="number" size="small" />
                </Grid>
              </Grid>
              <Box p={1}>
                Sec:
                <TextField
                  placeholder="Any"
                  fullWidth
                  type="number"
                  size="small"
                />
              </Box>
              <Box p={1}>
                Language:
                <TextField
                  placeholder="Any"
                  fullWidth
                  type="number"
                  size="small"
                />
              </Box>
              <Box p={1}>
                Occupation:
                <TextField
                  placeholder="Any"
                  fullWidth
                  type="number"
                  size="small"
                />
              </Box>
              <Box p={1}>
                City:
                <TextField
                  placeholder="Any"
                  fullWidth
                  type="number"
                  size="small"
                />
              </Box>
              <FormGroup>
                <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
                  Show Profile:
                </Typography>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Profile with Photo"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Featured by Family"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Featured by Profile only"
                />
              </FormGroup>
            </Grid> */}
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
