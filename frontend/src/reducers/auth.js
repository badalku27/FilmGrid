import { AUTH, LOGOUT, SIGNIN, SIGNUP } from "../constants/actionTypes";

// Safe localStorage operations
const setProfileToStorage = (profile) => {
   try {
      if (profile && typeof profile === 'object') {
         window.localStorage.setItem("profile", JSON.stringify(profile));
      }
   } catch (error) {
      console.error("Error storing profile to localStorage:", error);
   }
};

const clearProfileFromStorage = () => {
   try {
      window.localStorage.removeItem("profile");
   } catch (error) {
      console.error("Error clearing profile from localStorage:", error);
   }
};

const authReducers = (state = { authData: null }, action) => {
   switch (action.type) {
      case AUTH:    
         const authPayload = action?.payload;
         setProfileToStorage(authPayload);
         return {...state, authData: authPayload};
         
      case SIGNIN:
      case SIGNUP:
         const userPayload = action?.payload?.result || action?.payload?.user || action?.payload;
         setProfileToStorage(userPayload);
         return {...state, authData: userPayload};
         
      case LOGOUT:
         clearProfileFromStorage();
         return {...state, authData: null};
         
      default:
         return state;
   }
}

export default authReducers;