import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  properties: [
    {
      id: 1,
      title: "2 BHK Apartment",
      location: "Bhiwandi, Mumbai",
      type: "Apartment",
      size: "1200 sq. ft",
      image: "/house1.jpg",

      price: "₹1.60 Cr",
      pricePerShare: 1342,

      invested: 40000,
      expectedReturn: "49.08%",
      returnAmount: 15000,
      returnPercent: "+2.5%",

      sold: 24,
      investors: 12,
    },

    {
      id: 2,
      title: "Retail Shop",
      location: "Viman Nagar, Pune",
      type: "Commercial",
      size: "900 sq. ft",
      image: "/house2.jpg",

      price: "₹1.20 Cr",
      pricePerShare: 1540,

      invested: 0,
      expectedReturn: "49.08%",
      returnAmount: 0,
      returnPercent: "0%",

      sold: 0,
      investors: 0,
    },
  ],
};

const propertiesSlice = createSlice({
  name: "properties",
  initialState,

  reducers: {

    // ✅ REMOVE PROPERTY
    removeProperty(state, action) {
      state.properties = state.properties.filter(
        (item) => item.id !== action.payload
      );
    },

  },
});

export const { removeProperty } = propertiesSlice.actions;

export default propertiesSlice.reducer;
