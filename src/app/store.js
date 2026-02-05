import { configureStore } from "@reduxjs/toolkit";

import investorReducer from "../redux/investorSlice";
import authReducer from "../redux/authSlice";
import shareReducer from "../redux/shareSlice";
import dashboardReducer from "../redux/dashboardSlice";
import propertiesReducer from "../redux/propertiesSlice";
import propertyReducer from "../redux/propertySlice";

const store = configureStore({
  reducer: {
    investor: investorReducer,
    auth: authReducer,
    shares: shareReducer,
    dashboard: dashboardReducer,
    properties: propertiesReducer,
    property: propertyReducer,
  },
});

export default store;
