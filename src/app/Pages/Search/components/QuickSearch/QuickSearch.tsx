import React from "react";
import { Typography, Box, TextField, Container, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { COLORS } from "@/constant/color";

const QuickSearch = () => {
  return (
    <div>
      <Typography fontSize={{ md: 60, sm: 40, xs: 30 }} color="white">
        Quick Search...
      </Typography>
      <Container
        maxWidth="md"
        sx={{
           bgcolor: "transparent",
            p: 3,
            borderRadius: "8px",
            border:`1px solid ${COLORS.primary.main}`
             }}
      >
        <Box
          sx={{
            bgcolor: "white",
            display: "flex",
            m: "auto",
            justifyContent: "center",
            borderRadius: "5px",
          }}
        >
          <TextField
            placeholder="Search by Name and ID"
            fullWidth
            type="search"
            sx={{
              border: "none",
              boxShadow: "inset 0px 0px 3px 2px gray",
            }}
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: "0px 5px 5px 0px",
              ml: -1,
              bgcolor: "black",
              "&:hover": {
                bgcolor: "gray",
              },
            }}
          >
            <SendIcon />
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default QuickSearch;
