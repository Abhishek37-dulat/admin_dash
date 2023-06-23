import React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeIcon from "@mui/icons-material/Home";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const [drawerState, setDrawerState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    console.log(event.type);
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState({ ...drawerState, [anchor]: open });
  };

  const handleDrawerList = (e, name) => {
    e.preventDefault();
    if (name === "Home") {
      navigate("/");
    }
    if (name === "Add Product") {
      navigate("/add");
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Add Product"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            onClick={(e) => handleDrawerList(e, text)}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <HomeIcon />
                ) : (
                  <ProductionQuantityLimitsIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="nav-left-logo">
          <b>S</b>hopME
        </div>
        <div className="nav-left-icon">
          {<MenuIcon onClick={toggleDrawer("left", true)} />}
        </div>
      </div>
      <div className="nav-mid">
        <form onSubmit={handleSearchSubmit}>
          <div className="nav-mid-search-bar">
            <input placeholder="Search Product here..." />
          </div>
          <div className="nav-mid-search-button">
            <button>
              <SearchIcon />
            </button>
          </div>
        </form>
      </div>
      <div className="nav-right">
        <div className="nav-right-user">
          <div className="nav-right-avator">
            <p>
              <AccountCircleIcon fontSize="large" />
            </p>
          </div>
          <div className="nav-right-dropdown">
            <p>My Account</p>
            <p
              className="nav-right-dropdown-button"
              style={{ cursor: "pointer" }}
            >
              <KeyboardArrowDownIcon />
            </p>
          </div>
        </div>
      </div>

      <Drawer
        anchor={"left"}
        open={drawerState["left"]}
        onClose={toggleDrawer(false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
};

export default Navbar;

{
  /* <div>
  {["left", "right", "top", "bottom"].map((anchor) => (
    <React.Fragment key={anchor}>
      <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </React.Fragment>
  ))}
</div>; */
}
