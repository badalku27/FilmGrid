import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import useStyles from "./styles";
import camera from "../../images/camera.jpg";
import { useDispatch } from "react-redux";

const Navbar = () => {
   const { classes } = useStyles();
   const dispatch = useDispatch();

   // Safe localStorage parsing with error handling
   const getUserFromStorage = () => {
      try {
         const profile = localStorage.getItem("profile");
         if (profile && profile !== "undefined" && profile !== "null") {
            return JSON.parse(profile);
         }
         return null;
      } catch (error) {
         console.error("Error parsing user profile from localStorage:", error);
         // Clear corrupted data
         localStorage.removeItem("profile");
         return null;
      }
   };

   const [user, setUser] = useState(getUserFromStorage());

   const logout = () => {
      dispatch({ type: "LOGOUT" })
      localStorage.removeItem("profile");
      setUser(null);
      window.location.replace("/");
   }

   return (
      <AppBar className={classes.appBar} position="static" color="inherit">
         <div className={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">FilmGrid</Typography>
            <img className={classes.image} src={camera} alt="memories" height="80" width="80"/>
         </div>
         <Toolbar className={classes.toolbar}>
            {user ? (
               <div className={classes.profile}>
                  <Avatar 
                     className={classes.purple} 
                     alt={user.given_name || user.name || "User"} 
                     src={user.picture || user.avatar}
                  >
                     {(user.given_name || user.name || "U").charAt(0)}
                  </Avatar>
                  <Typography className={classes.userName} variant="h6">
                     {user.given_name || user.name || "User"}
                  </Typography>
                  <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
               </div>
            ) : (
               <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}
         </Toolbar>
      </AppBar>
   )
}

export default Navbar;