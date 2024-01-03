import { configureStore } from "@reduxjs/toolkit";
import generalAppConfigReducer from "../reducers/generalAppConfigReducer";

export const store = configureStore({
  reducer: {
    generalAppConfigs: generalAppConfigReducer,
  },
});
