import React from "react";
import {createRoot} from "react-dom/client";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import App from "./App";
import reducers from "./reducers";
import "./index.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import ErrorBoundary from './components/ErrorBoundary';

const store = configureStore({
   reducer: {
      posts: reducers
   }
})

// Get Google Client ID from environment variables with fallback
const googleClientId = process.env.REACT_APP_CLIENT_ID || process.env.REACT_APP_GOOGLE_CLIENT_ID;

// Check if Google Client ID is available
const GoogleWrapper = ({ children }) => {
   if (!googleClientId) {
      console.warn('Google Client ID not found in environment variables. Google OAuth will not work.');
      return children;
   }
   return (
      <GoogleOAuthProvider clientId={googleClientId}>
         {children}
      </GoogleOAuthProvider>
   );
};

createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <ErrorBoundary>
         <GoogleWrapper>
            <Provider store={store}>            
               <App />
            </Provider>
         </GoogleWrapper>
      </ErrorBoundary>
   </React.StrictMode>
);