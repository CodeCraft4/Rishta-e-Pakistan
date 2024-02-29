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
import CustomizeButton from "@/app/components/commons/Button";
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
          <Grid container spacing={3}>
            <Grid item md={6}>
              <Grid container spacing={1} sx={{ p: 2 }}>
                <Grid
                  item
                  md={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  Age:
                  <TextField placeholder="from" type="number" size="small" />
                </Grid>
                <Grid item md={6}>
                  <TextField placeholder="to" type="number" size="small" />
                </Grid>
              </Grid>
              Religion:
              <TextField
                placeholder="Any"
                fullWidth
                type="number"
                size="small"
              />
              Caste:
              <TextField
                placeholder="Any"
                fullWidth
                type="number"
                size="small"
              />
              Education:
              <TextField
                placeholder="Any"
                fullWidth
                type="number"
                size="small"
              />
              Country:
              <TextField
                placeholder="Any"
                fullWidth
                type="number"
                size="small"
              />
              Citezenship:
              <TextField
                placeholder="Any"
                fullWidth
                type="number"
                size="small"
              />
            </Grid>
            <Grid item md={6}>
              <Grid container spacing={1} sx={{ p: 2 }}>
                <Grid
                  item
                  md={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  Height:
                  <TextField placeholder="from" type="number" size="small" />
                </Grid>
                <Grid item md={6}>
                  <TextField placeholder="to" type="number" size="small" />
                </Grid>
              </Grid>
              Sec:
              <TextField
                placeholder="Any"
                fullWidth
                type="number"
                size="small"
              />
              Language:
              <TextField
                placeholder="Any"
                fullWidth
                type="number"
                size="small"
              />
              Occupation:
              <TextField
                placeholder="Any"
                fullWidth
                type="number"
                size="small"
              />
              City:
              <TextField
                placeholder="Any"
                fullWidth
                type="number"
                size="small"
              />
              <Box>
                Show:
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
              </Box>
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
