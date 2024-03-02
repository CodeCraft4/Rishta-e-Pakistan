"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import {
  AccountCircleOutlined,
  LoginOutlined,
  PersonAddOutlined,
} from "@mui/icons-material";
import { COLORS } from "@/constant/color";
import styles from "./navbar.module.css";


const drawerWidth = 200;
export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [bgColor, setBgColor] = React.useState(false);
  const changeBgColor = () => {
    if (window.scrollY >= 20) {
      setBgColor(true);
    } else setBgColor(false);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBgColor);
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Rishta Pakistan
      </Typography>
      <Divider />
      <List>
        <ListItem>
          <Link
            href={"/Pages/Home"}
            style={{ color: "black", textDecoration: "none" }}
          >
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href={"/Pages/Search"}
            style={{ color: "black", textDecoration: "none" }}
          >
            Search
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href={"/Pages/Profile"}
            style={{ color: "black", textDecoration: "none" }}
          >
            LatestProfile
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href={"/Pages/FeaturedProfile"}
            style={{ color: "black", textDecoration: "none" }}
          >
            FeaturedProfile
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href={"/Pages/Stories"}
            style={{ color: "black", textDecoration: "none" }}
          >
            SuccessStories
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href={"/Pages/Donate"}
            style={{ color: "black", textDecoration: "none" }}
          >
            Donate
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ bgcolor: bgColor ? "black" : "rgba(0%,0%,0%,.2)", width: "100%" }}
        elevation={0}
      >
        <Toolbar sx={{ width: "100%" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}> */}
            <Box>
              <Image
                src="https://wedding-wonders.bugfinder.net/assets/uploads/logo/logo.png"
                width={200}
                height={50}
                alt="logoImg"
              />
            </Box>
            <List sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
              <ListItem>
                <Link
                  href={"/Pages/Home"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href={"/Pages/Search"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Search
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href={"/Pages/Profile"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  LatestProfile
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href={"/Pages/FeaturedProfile"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  FeaturedProfile
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href={"/Pages/Stories"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  SuccessStories
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href={"/Pages/Donate"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Donate
                </Link>
              </ListItem>
            </List>
            <List className={styles.dropdown}>
              <Typography>
                <AccountCircleOutlined
                  fontSize="large"
                  sx={{ color: "white" }}
                />
              </Typography>
              <Box className={styles.dropdownContent}>
                <ListItem sx={{ py: 1 }}>
                  <Box
                    border={`1.5px solid ${COLORS.primary.main}`}
                    borderRadius={"50%"}
                    width={"48px"}
                    height={"48px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    mr={1}
                    p={2}
                  >
                    <LoginOutlined
                      fontSize="large"
                      sx={{
                        bgcolor: COLORS.primary.main,
                        p: 0.7,
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                  <Link
                   href={'/Pages/LogIn'}
                    style={{
                      fontSize:17,
                      textDecoration:"none",
                      color:"black"
                      }}
                      >LOGIN</Link>
                </ListItem>
                <Divider />

                <ListItem sx={{ py: 1 }}>
                  <Box
                    border={`1.5px solid ${COLORS.primary.main}`}
                    borderRadius={"50%"}
                    width={"48px"}
                    height={"48px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    mr={1}
                    p={2}
                  >
                    <PersonAddOutlined
                      fontSize="large"
                      sx={{
                        bgcolor: COLORS.primary.main,
                        p: 0.7,
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                  <Link
                   href={'/Pages/Register'} 
                   style={{
                    fontSize:17,
                    textDecoration:"none",
                    color:"black"
                    }}
                    >REGISTER</Link>
                </ListItem>
              </Box>
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
