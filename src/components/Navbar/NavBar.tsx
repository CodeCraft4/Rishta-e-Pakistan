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
import { usePathname } from "next/navigation";


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

  const pathname = usePathname();

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center",boxShadow:"inset 0px 0px 134px 8px #00695c",height:"100vh"}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Rishta Pakistan
      </Typography>
      <Divider />
      <List>
      <ListItem>
          <Box
            sx={{
              "& a": {
                color: pathname === "/Pages/Home" ? "red" : "white",
                textDecoration: pathname === "/Pages/Home" ? "underline": "none",
                "&:hover": {
                  color: "red",
                  textDecoration:"underline"
                },
              },
            }}
          >
            <Link href={"/Pages/Home"}> Home </Link>
          </Box>
        </ListItem>
        <ListItem>
          <Box
            sx={{
              "& a": {
                color: pathname === "/Pages/Search" ? "red" : "black",
                textDecoration: pathname === "/Pages/Search" ? "underline": "none",
                "&:hover": {
                  color: "red",
                  textDecoration:"underline"
                },
              },
            }}
          >
            <Link href={"/Pages/Search"}> Search </Link>
          </Box>
        </ListItem>
        <ListItem>
          <Box
            sx={{
              "& a": {
                color: pathname === "/Pages/Profile" ? "red" : "black",
                textDecoration: pathname === "/Pages/Profile" ? "underline": "none",
                "&:hover": {
                  color: "red",
                  textDecoration:"underline"
                },
              },
            }}
          >
            <Link href={"/Pages/Profile"}> LatestProfile </Link>
          </Box>
        </ListItem>
        <ListItem>
          <Box
            sx={{
              "& a": {
                color: pathname === "/Pages/FeaturedProfile" ? "red" : "black",
                textDecoration: pathname === "/Pages/FeaturedProfile" ? "underline": "none",
                "&:hover": {
                  color: "red",
                  textDecoration:"underline"
                },
              },
            }}
          >
            <Link href={"/Pages/FeaturedProfile"}> FeaturedProfile </Link>
          </Box>
        </ListItem>
        <ListItem>
          <Box
            sx={{
              "& a": {
                color: pathname === "/Pages/Stories" ? "red" : "black",
                textDecoration: pathname === "/Pages/Stories" ? "underline": "none",
                "&:hover": {
                  color: "red",
                  textDecoration:"underline"
                },
              },
            }}
          >
            <Link href={"/Pages/Stories"}> SuccessStories </Link>
          </Box>
        </ListItem>
        <ListItem>
          <Box
            sx={{
              "& a": {
                color: pathname === "/Pages/Donate" ? "red" : "black",
                textDecoration: pathname === "/Pages/Donate" ? "underline": "none",
                "&:hover": {
                  color: "red",
                  textDecoration:"underline"
                },
              },
            }}
          >
            <Link href={"/Pages/Donate"}> Donate </Link>
          </Box>
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
          <Box
            sx={{
              "& a": {
                color: pathname === "/Pages/Home" ? "red" : "white",
                textDecoration: pathname === "/Pages/Home" ? "underline": "none",
                "&:hover": {
                  color: "red",
                  textDecoration:"underline"
                },
              },
            }}
          >
            <Link href={"/Pages/Home"}> Home </Link>
          </Box>
        </ListItem>
              <ListItem>
          <Box
            sx={{
              "& a": {
                color: pathname === "/Pages/Search" ? "red" : "white",
                textDecoration: pathname === "/Pages/Search" ? "underline": "none",
                "&:hover": {
                  color: "red",
                  textDecoration:"underline"
                },
              },
            }}
          >
            <Link href={"/Pages/Search"}> Search </Link>
          </Box>
        </ListItem>
              <ListItem>
          <Box
            sx={{
              "& a": {
                color: pathname === "/Pages/Profile" ? "red" : "white",
                textDecoration: pathname === "/Pages/Profile" ? "underline": "none",
                "&:hover": {
                  color: "red",
                  textDecoration:"underline"
                },
              },
            }}
          >
            <Link href={"/Pages/Profile"}> LatestProfile </Link>
          </Box>
        </ListItem>
              <ListItem>
          <Box
            sx={{
              "& a": {
                color: pathname === "/Pages/FeaturedProfile" ? "red" : "white",
                textDecoration: pathname === "/Pages/FeaturedProfile" ? "underline": "none",
                "&:hover": {
                  color: "red",
                  textDecoration:"underline"
                },
              },
            }}
          >
            <Link href={"/Pages/FeaturedProfile"}> FeaturedProfile </Link>
          </Box>
        </ListItem>
              <ListItem>
          <Box
            sx={{
              "& a": {
                color: pathname === "/Pages/Stories" ? "red" : "white",
                textDecoration: pathname === "/Pages/Stories" ? "underline": "none",
                "&:hover": {
                  color: "red",
                  textDecoration:"underline"
                },
              },
            }}
          >
            <Link href={"/Pages/Stories"}> SuccessStories </Link>
          </Box>
        </ListItem>
              <ListItem>
          <Box
            sx={{
              "& a": {
                color: pathname === "/Pages/Donate" ? "red" : "white",
                textDecoration: pathname === "/Pages/Donate" ? "underline": "none",
                "&:hover": {
                  color: "red",
                  textDecoration:"underline"
                },
              },
            }}
          >
            <Link href={"/Pages/Donate"}> Donate </Link>
          </Box>
        </ListItem>



            </List>
            <List className={styles.dropdown}>
              <Typography>
                <AccountCircleOutlined
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
