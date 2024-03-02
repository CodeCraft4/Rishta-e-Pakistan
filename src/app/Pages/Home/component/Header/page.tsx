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
  Button,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Theme, useTheme } from "@mui/material/styles";
import Image from "next/image";
import CustomizeButton from "@/components/Button/Button";
import { COLORS } from "@/constant/color";
import { CAST_DROPDOWN, COUNTRY_DROPDOWN } from "@/constant/content";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Header = () => {

  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <Box
        sx={{
          position: "relative",
          height: { md: 647, sm: 647, xs: 800 },
          bgcolor: COLORS.dark.main,
        }}
      >
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
                <Typography sx={{ fontSize: { md: 60, sm: 40, xs: 30 } }}>
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
                    height: "400px",
                    width: { md: "70%", sm: "100%", xs: "100%" },
                    bgcolor: "transparent",
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
                  <FormControl
                    sx={{ p: { md: 6, sm: 6, xs: 2 }, color: "white" }}
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
                        type="number"
                        sx={{
                          border: "2px solid white",
                          borderRadius: "4px",
                          color: "white",
                        }}
                        placeholder={"18"}
                      />
                      to:
                      <TextField
                        size="small"
                        type="number"
                        sx={{
                          border: "2px solid white",
                          borderRadius: "4px",
                          color: "white",
                        }}
                        placeholder={"50"}
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
                      Caste:
                      <FormControl sx={{ width: { md: 200 } }}>
                        <Select
                          value={personName}
                          size="small"
                          onChange={handleChange}
                          input={<OutlinedInput/>}
                          MenuProps={MenuProps}
                          sx={{ border: "2px solid white", color: "white" }}
                        >
                          {CAST_DROPDOWN.map((name) => (
                            <MenuItem
                              key={name}
                              value={name}
                              style={getStyles(name, personName, theme)}
                            >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                    Country:
                    <FormControl sx={{ width: { md: 300 } }}>
                      <Select
                        size="small"
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput/>}
                        MenuProps={MenuProps}
                        sx={{ border: "2px solid white", color: "white" }}
                      >
                        {COUNTRY_DROPDOWN.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
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
