import { generalAppConfigSlice } from "../slices/generalAppConfigSlice";

export const generalAppConfigs = (state) => state.generalAppConfigs;

export const { appNameChange } = generalAppConfigSlice.actions;
