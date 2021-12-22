import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import sliderReducer from "./sliderSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    slider:sliderReducer
  },
  // reducer: {
  //   user: userReducer,
  //   post: postReducer,
  // },
});