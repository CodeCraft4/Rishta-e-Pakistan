import React from "react";
import { Box, Button } from "@mui/material";
import { COLORS } from "@/constant/color";

const CustomizeButton = (props:any) => {
    const {title} = props
  return (
    <div>
      <Box
        sx={boxStyle}
      >
        <Button
          variant="contained"
          sx={btnStyle}
        >
          {title}
        </Button>
      </Box>
    </div>
  );
};

export default CustomizeButton;


const boxStyle = {
  border: `1px solid ${COLORS.primary.main}`,
  margin: "auto",
  textAlign: "center",
  marginTop:'5px',
  borderRadius: "5px",
  width:"100px",
  padding: 0.5,
  position: "relative",
  transition: "1s",
  "&:hover": {
    border: `1px solid ${COLORS.primary.main}`,
  },
};

const btnStyle = {
  backgroundColor: COLORS.primary.main,
  color:"white",
  width: "100%",
  padding: "5px",
  transition: ".3s",
  "&:hover": {
    backgroundColor:"black",
  },
};