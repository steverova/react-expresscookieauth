import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import useAuth from "../auth/useAuth";
import { Paper } from "@mui/material";
import {
  LogoutIcon,
  AccountCircleIcon,
  SettingsIcon,
} from "./../plugins/icons";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";
import { useAuthStore } from "../store/useAuthStore";

// const pages = ["Products", "Pricing", "Blog"];

function NavBar({ handleDrawerToggle }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user } = useUserStore();
  const { isLogged } = useAuthStore()

  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = [
    {
      name: "Dshboard",
      route: "/dashboard",
      callback: () => navigate("/dashboard"),
    },
    {
      name: "Table",
      route: "/table",
      callback: () => navigate("/dashboard/table"),
    },
    {
      name: "SignUP",
      route: "/",
      callback: () => navigate("/"),
    },
  ];

  const settings = [
    {
      name: "Profile",
      route: "/profile",
      callback: () => console.log("Profile"),
      svgIcon: <AccountCircleIcon />,
    },
    {
      name: "Settings",
      route: "/settings",
      callback: () => navigate("/settings"),
      svgIcon: <SettingsIcon />,
    },
    {
      name: "Logout",
      route: "/",
      callback: logOut,
      svgIcon: <LogoutIcon />,
    },
  ];

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleDrawerToggle}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={() => page.callback()}>
                <Box>
                  <Typography textAlign="center">{page.name}</Typography>
                </Box>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page.name}
              onClick={() => page.callback()}
              sx={{ my: 2, display: "block" }}
            >
              {page.name}
            </Button>
          ))}
        </Box>

        <Box
          className="flex flex-row items-center gap-x-3"
          sx={{ flexGrow: 0 }}
        >
          <Typography>{isLogged && "logged"}</Typography>
          <Typography>{`${user.name} ${user.lastname}`}</Typography>
          <Tooltip title="Open settings">
            <IconButton
              className="shadow-lg"
              onClick={handleOpenUserMenu}
              sx={{ p: 0 }}
            >
              <Avatar
                component={Paper}
                alt={`${user.name} ${user.lastname} avatar`}
                src={user.avatar}
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                className="flex flex-row justify-between gap-x-2 "
                onClick={() => setting.callback()}
                key={setting.name}
              >
                {setting.svgIcon}
                <Typography textAlign="center">{setting.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  );
}
export default NavBar;
