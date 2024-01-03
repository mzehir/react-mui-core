import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appName: "App Name",
};

export const generalAppConfigSlice = createSlice({
  name: "generalAppConfigs",
  initialState,
  reducers: {
    appNameChange: (state, action) => {
      state.appName = action.payload;
    },
  },
});
