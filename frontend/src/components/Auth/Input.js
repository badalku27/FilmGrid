import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Input = ({ half, name, label, autoFocus, type, handleChange, handleShowPassword, value }) => {
   // Safe event handling
   const handleInputChange = (event) => {
      if (handleChange && typeof handleChange === 'function') {
         handleChange(event);
      }
   };

   const handleTogglePassword = () => {
      if (handleShowPassword && typeof handleShowPassword === 'function') {
         handleShowPassword();
      }
   };

   return (
      <Grid item xs={12} sm={half ? 6 : 12}>
         <TextField 
            name={name}
            onChange={handleInputChange}
            variant="outlined"
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            value={value || ""}
            InputProps={name === "password" ? {
               endAdornment: (
                  <InputAdornment position="end">
                     <IconButton onClick={handleTogglePassword} edge="end">
                           {type === "password"? <Visibility /> : <VisibilityOff />}
                     </IconButton>
                  </InputAdornment>
               )
            } : null }
         />
      </Grid>
   )
}

export default Input;