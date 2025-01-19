import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    userAuthentication: true,
    sellerAuthentication: false,
    adminAuthentication: false,
    loginPopup: false,
    signupPopup: false,
  },
  reducers: {
    setLogin: (state,action) =>{
        state.loginPopup = action.payload;
    },

    setSignup: (state, action)=>{
        state.signupPopup = action.payload
    },

    setUserTrue: (state)=>{
        state.userAuthentication = true;
    },
    setUserFalse: (state)=>{
        state.userAuthentication = false;
    }
    ,
    setSellerTrue: (state)=>{
        state.sellerAuthenticationAuthentication = true;
    },
    setSellerFalse: (state)=>{
        state.sellerAuthenticationAuthentication = true;
    },

    setAdminTrue: (state)=>{
        state.adminAuthentication = true;
    }
    ,
    setAdminFalse: (state)=>{
        state.adminAuthentication = false;
    }





  },
})

// Action creators are generated for each case reducer function
export const { setLogin,setSignup,setUserTrue,setUserFalse, setSellerTrue,setSellerFalse, setAdminTrue, setAdminFalse } = counterSlice.actions

export default counterSlice.reducer;