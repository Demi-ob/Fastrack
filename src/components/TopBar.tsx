import { useState } from "react";
import {
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function TopBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const menuItems = [
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Location", href: "#location" },
  ];

  return (
    <div
      style={{
        backdropFilter: "blur(2px)",
        backgroundColor: "rgba(0, 0, 34, 0.9)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        padding: "0.5rem",
      }}
    >
      <Toolbar sx={{ maxWidth: "1600px", margin: "auto" }}>
        <img src="images/fastrack-logo.png" height="60" alt="" />
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ flexGrow: 1, color: "#fff" }}
        >
          Fastrack
        </Typography>

        <IconButton
          size="large"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
        >
          <MenuIcon />
        </IconButton>

        <List
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
          }}
        >
          {menuItems.map((item, index) => (
            <ListItem key={index} component="a" href={item.href}>
              <ListItemText sx={{ color: "#fff", "&:hover":{
                color:"#B1120F"
              } }} primary={item.label} />
            </ListItem>
          ))}
          <ListItem>
            <a
              href="#contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#B1120F",
                  color: "#fff",
                  width: "8rem",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#000",
                  },
                }}
              >
                Contact us
              </Button>
            </a>
          </ListItem>
        </List>
      </Toolbar>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <List sx={{ width: "15rem", paddingLeft: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="images/fastrack-logo.png" height="50" alt="" />
            <Typography
              variant="h5"
              fontWeight="bold"
              color="primary"
              sx={{ flexGrow: 1 }}
            >
              Fastrack
            </Typography>
          </div>
          {menuItems.map((item, index) => (
            <ListItem key={index} onClick={handleDrawerClose}>
              <ListItemText
                primary={
                  <a
                    href={item.href}
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    {item.label}
                  </a>
                }
              />
            </ListItem>
          ))}
          <ListItem>
            <a
              href="#contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button variant="contained" size="large">
                Contact us
              </Button>
            </a>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
