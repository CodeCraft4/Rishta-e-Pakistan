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
  Select,
  MenuItem
} from "@mui/material";
import { COLORS } from "@/constant/color";
import {RELIGION} from "@/constant/content"

const AdvanceSearch = () => {
  return (
    <div>
      <Box pt={15} pb={25} textAlign={"center"}>
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
            sx={{ px: {md:10,sm:5,xs:1}, textAlign: "start", fontWeight: "bold" }}
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
                <Select
                  placeholder="Any"
                  fullWidth
                  size="small"
                >
                  {RELIGION.map((rel)=>(
                    <MenuItem key={rel}>{rel}</MenuItem>
                  ))}
                  </Select>
              </Box>
              <Box p={1}>
                Caste:
                <TextField
                  placeholder="Any"
                  fullWidth
                  size="small"
                />
              </Box>
              <Box p={1}>
                Education:
                <TextField
                  placeholder="Any"
                  fullWidth
                  size="small"
                />
              </Box>
              <Box p={1}>
                Country:
                <TextField
                  placeholder="Any"
                  fullWidth
                  size="small"
                />
              </Box>
              <Box p={1}>
                Citezenship:
                <TextField
                  placeholder="Any"
                  fullWidth
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
                Sect:
                <TextField
                  placeholder="Any"
                  fullWidth
                  size="small"
                />
              </Box>
              <Box p={1}>
                Language:
                <TextField
                  placeholder="Any"
                  fullWidth
                  size="small"
                />
              </Box>
              <Box p={1}>
                Occupation:
                <TextField
                  placeholder="Any"
                  fullWidth
                  size="small"
                />
              </Box>
              <Box p={1}>
                State:
                <TextField
                  placeholder="Any"
                  fullWidth
                  size="small"
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{p:4}}>
            <Grid item md={4}>
              Show: <FormControlLabel control={<Checkbox />} label="Profile with Phtoto" />
            </Grid>
            <Grid item md={4}>
            <FormControlLabel control={<Checkbox />} label="Featured by Fimily" />
            </Grid>
            <Grid item md={4}>
            <FormControlLabel control={<Checkbox />} label="Featured by Profile only" />
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
