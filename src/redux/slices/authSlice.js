import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: null,
    idToken: null,
    uid: null,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIdToken: (state, action) => {
      state.idToken = action.payload;
    },
    setUid: (state, action) => {
      state.uid = action.payload;
    },
    // eslint-disable-next-line no-unused-vars
    clearUser: (state, action) => {
      state.user = "";
      state.idToken = "";
    }
  }
});

export const {setUser, setIdToken, setUid, clearUser} = authSlice.actions;

export default authSlice.reducer;