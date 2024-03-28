import React from "react";
import classes from "./navbar.module.css";

import Container from "@mui/material/Container";

import Navlink from "../navlink/navlink";
import Navlinks from "../navlinks/navlinks";
import SidebarToggle from "../sidebarToggle/sidebarToggle";

const navbar = (props) => {
  return (
    <Container maxWidth="sm">
      <header className={classes.navbar}>
        <Navlink link="/">
          <h1>Logo</h1>
        </Navlink>

        <nav className={classes.links}>
          <Navlinks />
        </nav>

        <SidebarToggle clicked={props.toggleSidebar} />
      </header>
    </Container>
  );
};

export default navbar;
