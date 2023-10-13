import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterReducer";

export default configureStore({
  reducer: {
    counter: counterSlice,
    // some reducers here ...
  },
});
