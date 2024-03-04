import React from "react";
import { Typography, Box, TextField, Container, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { COLORS } from "@/constant/color";

const QuickSearch = () => {
  return (
    <div>
      <Typography fontSize={{ md: 60, sm: 40, xs: 30 }} fontWeight={"bold"} color={COLORS.primary.main}>
        Quick Search...
      </Typography>
      <Container
        maxWidth="md"
        sx={{
           bgcolor: "white",
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
            placeholder="Enter Full Name"
            fullWidth
            type="search"
            sx={{
              borderRadius: "none",
              border: "none",
            }}
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: "0px 5px 5px 0px",
              ml: -1,
              bgcolor: "gray",
              "&:hover": {
                bgcolor: "black",
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
