import React from "react";
import { Box, Button } from "@mui/material";
import { COLORS } from "@/app/constant/color";

const CustomizeButton = (props:any) => {
    const {title} = props
  return (
    <div>
      <Box
        sx={{
          outline: "1px solid white",
          p: "4px",
          width: "30%",
          display: "flex",
          m: "auto",
          mt: 1,
        }}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: COLORS.primary.main,
            borderRadius: 0,
            "&:hover": { bgcolor: "black" },
          }}
        >
          {title}
        </Button>
      </Box>
    </div>
  );
};

export default CustomizeButton;
