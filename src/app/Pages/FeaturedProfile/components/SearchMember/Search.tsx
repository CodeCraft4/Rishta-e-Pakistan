import React from 'react'
import { Box, FormControl, Grid, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material'
import {
    RELIGION,
    LANGUAGE,
    EDUCATION,
    OCCUPATION,
    COUNTRY_DROPDOWN,
    CAST_DROPDOWN,
    STATE_LIST,
    MARTIAL_STATUS,
    GENDER,
    CITIZENSHIP,
  } from "@/constant/content";
import { COLORS } from "@/constant/color";
import CustomizeButton from '@/components/Button/Button';


const Search = () => {
  return (
    <div>
      <Box boxShadow={`3px 4px 23px ${COLORS.secondary.main}`} mt={4} bgcolor={"white"}>
          <Grid container spacing={2} p={{md:5,sm:1,xs:2}} border={`1px solid ${COLORS.secondary.main}`}>
            <Grid item md={6} sm={6} xs={6}>
            <Typography fontWeight={"bold"}>Age:</Typography>
                    <TextField
                      placeholder="from"
                      type="number"
                      size="small"
                      sx={{
                        boxShadow: "inset 0px 0px 2px 2px gray",
                      }}
                    />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
            <Typography fontWeight={"bold"}>To:</Typography>
                    <TextField
                      placeholder="to"
                      type="number"
                      size="small"
                      sx={{
                        boxShadow: "inset 0px 0px 2px 2px gray",
                      }}
                    />
            </Grid>
            <Box p={1} fontWeight="bold">
            Gender:
                <FormControl sx={{ width: { md: 300, sm: 200, xs: 250 } }}>
                  <Select
                    size="small"
                    input={<OutlinedInput />}
                    sx={{
                      border: "2px solid white",
                      color: "black",
                      boxShadow: "inset 0px 0px 2px 2px gray",
                    }}
                  >
                    {GENDER.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                </Box>
            <Box p={1} fontWeight="bold">
            Martial Status:
                <FormControl sx={{ width: { md: 300, sm: 200, xs: 250 } }}>
                  <Select
                    size="small"
                    input={<OutlinedInput />}
                    sx={{
                      border: "2px solid white",
                      color: "black",
                      boxShadow: "inset 0px 0px 2px 2px gray",
                    }}
                  >
                    {MARTIAL_STATUS.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                </Box>
            <Box p={1} fontWeight="bold">
            Religion:
                <FormControl sx={{ width: { md: 300, sm: 200, xs: 250 } }}>
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
            <Box p={1} fontWeight="bold">
            Country:
                <FormControl sx={{ width: { md: 300, sm: 200, xs: 250 } }}>
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
            <Box p={1} fontWeight="bold">
            State:
                <FormControl sx={{ width: { md: 300, sm: 200, xs: 250 } }}>
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
            <Box p={1} fontWeight="bold">
            Caste:
                <FormControl sx={{ width: { md: 300, sm: 200, xs: 250 } }}>
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
            <Box p={1} fontWeight="bold">
            Language:
                <FormControl sx={{ width: { md: 300, sm: 200, xs: 250 } }}>
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
                <Box
                sx={{display:'flex',justifyContent:"center",m:'auto'}} 
                >
                <CustomizeButton title={"Search"}/>
                </Box>
          </Grid>
      </Box>
    </div>
  )
}

export default Search
