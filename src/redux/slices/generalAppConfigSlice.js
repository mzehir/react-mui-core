import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appName: "Startup project",
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
