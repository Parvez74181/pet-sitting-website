import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type PetService = {
  selectedPetService: string;
};
const initialState: PetService = {
  selectedPetService: "",
};

const petServicesSlice = createSlice({
  name: "petServices",
  initialState,
  reducers: {
    setSelectedPetService: (state, action: PayloadAction<string>) => {
      state.selectedPetService = action.payload;
    },
  },
});
export const { setSelectedPetService } = petServicesSlice.actions;
export default petServicesSlice.reducer;
