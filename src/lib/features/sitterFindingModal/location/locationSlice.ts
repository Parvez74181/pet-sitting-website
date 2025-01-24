import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LocationState = {
  location: string;
};
const initialState: LocationState = {
  location: "",
};

const location = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, actions: PayloadAction<string>) => {
      state.location = actions.payload;
    },
  },
});

export const { setLocation } = location.actions;
export default location.reducer;
