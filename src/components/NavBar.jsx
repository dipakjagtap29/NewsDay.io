import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: '0',
    cursor: 'pointer',
  },

  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
    marginLeft: theme.spacing(2),
    '&:hover': {
      color: 'yellow',
      borderBottom: '1px solid white',
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          NewsDay.io
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
         
          <div className={classes.navlinks}>
          <Link to='/' className={classes.link}>
            Home
          </Link>
          <Link to='/business' className={classes.link}>
            Business
          </Link>
          <Link to='/entertainment' className={classes.link}>
            Entertainment
          </Link>
          <Link to='/general' className={classes.link}>
            General
          </Link>
          <Link to='/health' className={classes.link}>
            Health
          </Link>
          <Link to='/science' className={classes.link}>
            Science
          </Link>
          <Link to='/sports' className={classes.link}>
            Sports
          </Link>
          <Link to='/technology' className={classes.link}>
            Technology
          </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
