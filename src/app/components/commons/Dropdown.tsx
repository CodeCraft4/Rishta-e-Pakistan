"use client"
import React from "react";
import { Avatar,Button,Menu,MenuItem } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event:any) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseEnter={handleClick}
        sx={{color:"white"}}
      >
        <AccountCircleIcon fontSize="large"/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onMouseLeave={handleClose}
        sx={{ml:-2,p:10,width:"100%"}}
      >
        <MenuItem onClick={handleClose}><HowToRegIcon/>Register</MenuItem>
        <MenuItem onClick={handleClose}><LoginIcon/> Log In</MenuItem>
      </Menu>
    </div>
  );
}

export default SimpleMenu