import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: null,
    error: null
  };
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        authenticateSuccess:(state,action)=>{
            state.accessToken = action.payload.accessToken;
            state.error = null;
        },
        authenticateFailure:(state,action)=>{
          state.error = action.payload.error;
          state.accessToken = null;
        },
    }
});

export const {authenticateFailure,authenticateSuccess} = authSlice.actions
export default authSlice.reducer;