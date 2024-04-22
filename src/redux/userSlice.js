// redux/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: [],
  },
  reducers: {
    saveUserData: (state, action) => {
      state.userData.push(action.payload);
    },
  },
});

export const { saveUserData } = userSlice.actions;

export const selectUserData = (state) => state.user.userData;

export default userSlice.reducer;
