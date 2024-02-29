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
      <Box pt={5} bgcolor={COLORS.secondary.main} pb={25} textAlign={"center"}>
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
          <Grid container spacing={3} sx={{p:10}}>
            <Grid item md={6}>
              <Grid container spacing={1} sx={{ p: 2 }}>
                <Grid
                  item
                  md={6}
                  sx={{ display: "flex", alignItems: "center",fontWeight:"bold"}}
                >
                  Age:
                  <TextField placeholder="from" type="number" size="small" />
                </Grid>
                <Grid item md={6}>
                  <TextField placeholder="to" type="number" size="small" />
                </Grid>
              </Grid>
              <Box sx={{display:'flex',p:2,alignItems:'center',fontWeight:"bold"}}>
              Religion:
              <TextField
                placeholder="Any"
                fullWidth
                type="number"
                size="small"
                />
                </Box>
              <Box sx={{display:'flex',p:2,alignItems:'center',fontWeight:"bold"}}>
              Caste:
              <TextField
                placeholder="Any"
                fullWidth
                type="number"
                size="small"
                />
                </Box>
              <Box sx={{display:'flex',p:2,alignItems:'center',fontWeight:"bold"}}>
              Education:
              <TextField
                placeholder="Any"
                fullWidth
                type="number"
                size="small"
                />
                </Box>
              <Box sx={{display:'flex',p:2,alignItems:'center',fontWeight:"bold"}}>
              Country:
              <TextField
                placeholder="Any"
                fullWidth
                type="number"
                size="small"
                />
                </Box>
              <Box sx={{display:'flex',p:2,alignItems:'center',fontWeight:"bold"}}>
              Citezenship:
              <TextField
                placeholder="Any"
                fullWidth
                size="small"
                />
                </Box>
            </Grid>
            <Grid item md={6}>
              <Grid container spacing={1} sx={{ p: 2 }}>
                <Grid
                  item
                  md={6}
                  sx={{display:'flex',alignItems:"center",fontWeight:"bold"}}
                >
                  Height:
                  <TextField placeholder="from" type="number" size="small" />
                </Grid>
                <Grid item md={6}>
                  <TextField placeholder="to" type="number" size="small" />
                </Grid>
              </Grid>
              <Box sx={{display:"flex",p:2,alignItems:'center',fontWeight:"bold"}}>
              Sec:
              <TextField
                placeholder="Any"
                fullWidth
                type="number"
                size="small"
                />
                </Box>
              <Box sx={{display:"flex",p:2,alignItems:'center',fontWeight:"bold"}}>
              Language:
              <TextField
                placeholder="Any"
                fullWidth
                type="number"
                size="small"
                />
                </Box>
              <Box sx={{display:"flex",p:2,alignItems:'center',fontWeight:"bold"}}>
              Occupation:
              <TextField
                placeholder="Any"
                fullWidth
                type="number"
                size="small"
                />
                </Box>
              <Box sx={{display:"flex",p:2,alignItems:'center',fontWeight:"bold"}}>
              City:
              <TextField
                placeholder="Any"
                fullWidth
                type="number"
                size="small"
                />
                </Box>
                <Box sx={{m:'auto',display:'flex',justifyContent:"center",fontWeight:"bold"}}>
              <FormGroup>
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
              </FormGroup>
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
