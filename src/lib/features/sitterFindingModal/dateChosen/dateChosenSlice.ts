import { createSlice } from "@reduxjs/toolkit";

const initialState = { date: "" };

const dateChosenSlice = createSlice({
  name: "dateChosen",
  initialState,
  reducers: {
    setDateChosen: (state, action) => {
      state.date = action.payload;
    },
  },
});
export default dateChosenSlice.reducer;
export const { setDateChosen } = dateChosenSlice.actions;
