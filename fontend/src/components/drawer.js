import React from "react";
import {
  createStyles,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  useTheme,
} from "@mui/material";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import clsx from "clsx";
import { Link } from "react-router-dom";

const DrawerComponent = (props) => {
  const drawerWidth = props.drawerWidth;

  const useStyles = createStyles((theme) => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.shortest,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.shortest,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));

  const classes = useStyles();
  const theme = useTheme();

  const open = props.open;

  const drawerOptions = props.drawerOptions;

  const CustomLink = (to) =>
    React.useMemo(
      () =>
        React.forwardRef((linkProps, ref) => (
          <Link ref={ref} to={to} {...linkProps} />
        )),
      [to]
    );

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={props.handleDrawerClose}>
          {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {drawerOptions.map((option, index) => (
          <ListItem button key={index} component={CustomLink(option.link)}>
            <ListItemIcon>{option.icon}</ListItemIcon>
            <ListItemText primary={option.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default DrawerComponent;
