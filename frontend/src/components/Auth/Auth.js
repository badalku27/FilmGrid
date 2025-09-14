import React, { useState } from "react";
import { Avatar, Button, Paper, Grid, Typography, Container, Alert } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { signin, signup } from "../../actions/auth";
import Input from "./Input";
import useStyles from "./styles";
import axios from "axios";

const Auth = () => {
   const { classes } = useStyles();
   const dispatch = useDispatch();
   const [showPassword, setShowPassword] = useState(false);
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);
   const [inputText, setInputText] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
   });

   const [isSignup, setIsSignup] = useState(false);

   const handleShowPassword = () => {
      setShowPassword((prev) => !prev )
   }

   const handleSubmit = async (event) => {
      event.preventDefault();
      setError("");
      setLoading(true);
      
      try {
         if (isSignup) {
            await dispatch(signup(inputText));
         } else {
            await dispatch(signin(inputText));
         }
      } catch (err) {
         console.error("Auth error:", err);
         setError(err.message || "Authentication failed. Please try again.");
      } finally {
         setLoading(false);
      }
   }

   const handleChange = (event) => {
      const { name, value } = event.target;
      setInputText({ ...inputText, [name]: value });
   }
   
   const switchMode = () => {
      setIsSignup((prev) => !prev);
      setError("");
   }

   // Temporarily disabled Google OAuth - requires proper Client ID setup
   /*
   const login = useGoogleLogin({
      onSuccess: async tokenResponse => {
         setLoading(true);
         setError("");
         try {
            const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
               headers: {
                  "Authorization": `Bearer ${tokenResponse.access_token}`
               }
            });
            dispatch({ type: "AUTH", payload: res.data});
            window.location.replace("/");            
         } catch (error) {
            console.error("Google auth error:", error);
            setError("Google authentication failed. Please try again.");
         } finally {
            setLoading(false);
         }
      },
      onError: (error) => {
         console.error("Google login error:", error);
         setError("Google login failed. Please try again.");
         setLoading(false);
      }
   });
   */

   // Error boundary fallback
   if (!classes) {
      return (
         <Container component="main" maxWidth="xs">
            <Paper style={{padding: '20px', marginTop: '64px', textAlign: 'center'}}>
               <Typography variant="h6" color="error">
                  Loading Error: Unable to load styles
               </Typography>
               <Typography variant="body2">
                  Please refresh the page or try again later.
               </Typography>
            </Paper>
         </Container>
      );
   }

   return (
      <Container component="main" maxWidth="xs">
         <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
               <LockOutlined />
            </Avatar>
            <Typography variant='h5'>{isSignup? "Sign up" : "Sign in"}</Typography>
            
            {error && (
               <Alert severity="error" sx={{ width: '100%', mt: 2 }}>
                  {error}
               </Alert>
            )}
            
            <form className={classes.form} onSubmit={handleSubmit}>
               <Grid container spacing={2}>
                  {
                  isSignup && (
                     <>
                        <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half value={inputText.firstName}/>
                        <Input name="lastName" label="Last Name" handleChange={handleChange} half value={inputText.lastName}/>                     
                     </>
                  )
                  }
                  <Input name="email" label="Email Address" handleChange={handleChange} type="email" value={inputText.email} />
                  <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} value={inputText.password}/>
                  {isSignup && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" value={inputText.confirmPassword}/>}
               </Grid>
               
               <Button 
                  type="submit" 
                  fullWidth 
                  variant="contained" 
                  color="primary" 
                  className={classes.submit}
                  disabled={loading}
               >
                  {loading ? "Processing..." : (isSignup? "Sign Up" : "Sign In")}
               </Button>
               {/* Temporarily disabled Google OAuth - requires proper Client ID setup
               <Button 
                  id="google" 
                  className={classes.googleButton} 
                  color="primary" 
                  fullWidth 
                  variant="contained" 
                  onClick={() => login()}
                  disabled={loading}
               >
                  {loading ? "Processing..." : "Sign in with Google"}
               </Button>
               */}  
                           
               <Grid container justifyContent="flex-end">
                  <Grid item>
                     <Button onClick={switchMode} disabled={loading}>
                        {isSignup ? "Already have Account? Sign In!" : "Don't have account? Sign Up!"}
                     </Button>                  
                  </Grid>
               </Grid>
            </form>
         </Paper>
      </Container>
   )
}

export default Auth;