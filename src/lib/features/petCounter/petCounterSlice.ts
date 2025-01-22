import petCategories from "@/data/petCategories ";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = petCategories.reduce((acc, pet) => {
  acc[pet.name] = 0; // Initialize each pet category with a count of 0
  return acc;
}, {} as { [key: string]: number });

const petCounterSlice = createSlice({
  name: "petCounter",
  initialState,
  reducers: {
    incrementPetCount: (state, action: PayloadAction<string>) => {
      const petName = action.payload;
      console.log(petName);

      if (state[petName] < 20) {
        state[petName]++;
      }
    },
    decrementPetCount: (state, action: PayloadAction<string>) => {
      const petName = action.payload;
      if (state[petName] > 0) {
        state[petName]--;
      }
    },
  },
});
export const { incrementPetCount, decrementPetCount } = petCounterSlice.actions;
export default petCounterSlice.reducer;
