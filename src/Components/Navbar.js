/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Zoom } from "react-reveal";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Inicio",
      href:"#",
      icon: <HomeIcon />,
    },
    {
      text: "Acerca de",
      href:"#about",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonios",
      href:"#testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contacto",
      href:"#footer",
      icon: <PhoneRoundedIcon />,
    },
  ];
  return (
    <Zoom>
      <nav>
      <div className="nav-logo-container">
        <h1 className="logo" >Arrecifes</h1>
      </div>
      <div className="navbar-links-container">
        <a href="">Inicio</a>
        <a href="#about">Acerca de</a>
        <a href="#dishes">Platillos</a>
        <a href="#testimonials">Testimonios</a>
        <a href="#footer">Contacto</a>
        {/* <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a> */}
        {/* <button className="primary-button">Bookings Now</button> */}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <a style={{textDecoration:"none", color:"#515151"}} href={item.href} >{item.text}</a>
                  {/* <ListItemText primary={item.text} /> */}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
    </Zoom>
   
  );
};

export default Navbar;
