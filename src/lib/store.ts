import { configureStore } from "@reduxjs/toolkit";
import petCounterReducer from "./features/sitterFindingModal/petCounter/petCounterSlice";
import petServicesReducer from "./features/sitterFindingModal/petServices/petServicesSlice";
import locationReducer from "./features/sitterFindingModal/location/locationSlice";
import dateChosenReducer from "./features/sitterFindingModal/dateChosen/dateChosenSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      petCounter: petCounterReducer,
      petServices: petServicesReducer,
      location: locationReducer,
      dateChosen: dateChosenReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
