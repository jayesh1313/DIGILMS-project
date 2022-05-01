import {
  ChevronLeft,
  ChevronRight,
  AccountCircle,
  Subscriptions,
} from "@mui/icons-material";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/material/Menu";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Menu,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import app_config from "../config";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar({ children, sideOptions, title, points }) {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [currentTrainer, setCurrentTrainer] = useState(
    JSON.parse(sessionStorage.getItem("trainer"))
  );

  const [userMenuPos, setUserMenuPos] = useState(null);
  const [trainerMenuPos, setTrainerMenuPos] = useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const location = useLocation();
  console.log(location.pathname);
  // useEffect(() => {
  // }, []);

  const url = app_config.api_url;

  const displayPoints = () => {
    if (location.pathname.includes("user") && currentUser !== null) {
      console.log("in user");
      return <Button color="inherit">Points : {currentUser.points}</Button>;
    }
  };

  const userMenu = [
    {
      name: "Profile",
      icon: <AccountCircle />,
      link: "/user/profile",
    },
    {
      name: "View Enrolled Courses",
      icon: <Subscriptions />,
      link: "/user/EnrolledCourse",
    },
    {
      name: "Logout",
      icon: <AccountCircle />,
      click: () => {
        sessionStorage.removeItem("user");
        navigate("/main/login");
      },
    },
  ];

  const trainerMenu = [
    {
      name: "Profile",
      icon: <AccountCircle />,
      link: "/trainer/profile",
    },
    {
      name: "Manage Courses",
      icon: <Subscriptions />,
      link: "/trainer/enrolled",
    },
    {
      name: "Logout",
      icon: <AccountCircle />,
      click: () => {
        sessionStorage.removeItem("user");
        navigate("/trainer/trainerlogin");
      },
    },
  ];

  const displayUserActions = () => {
    if (currentUser !== null && currentTrainer === null) {
      return (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton
              onClick={(e) => setUserMenuPos(e.currentTarget)}
              sx={{ p: 0 }}
            >
              <Avatar alt={currentUser.username} src={url + "/"} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={userMenuPos}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(userMenuPos)}
            onClose={(e) => setUserMenuPos(null)}
          >
            {userMenu.map(({ name, icon, link, click }) => (
              <MenuItem
                key={name}
                onClick={link ? (e) => navigate(link) : click}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{name}</ListItemText>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      );
    } else if (currentUser === null && currentTrainer !== null) {
      return (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton
              onClick={(e) => setTrainerMenuPos(e.currentTarget)}
              sx={{ p: 0 }}
            >
              <Avatar alt={currentTrainer.fullname} src={url + "/"} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={trainerMenuPos}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(trainerMenuPos)}
            onClose={(e) => setTrainerMenuPos(null)}
          >
            {trainerMenu.map(({ name, icon, link, click }) => (
              <MenuItem
                key={name}
                onClick={link ? (e) => navigate(link) : click}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{name}</ListItemText>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      );
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
          <Button
            color="inherit"
            onClick={(e) => navigate("/main/browsecourse")}
          >
            Browse Courses
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          {displayPoints()}
          {displayUserActions()}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sideOptions.map(({ name, icon, link }) => (
            <ListItemButton
              onClick={() => navigate(link)}
              key={name}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Box className="hj" component="div" sx={{ flexGrow: 1, height: "100vh" }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
