import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import sliderReducer from "./sliderSlice"
import loadingReducer from "./loadingSlice"
import bookingReducer from "./BookingSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    slider:sliderReducer,
    loading:loadingReducer,
    booking:bookingReducer
  },
  // reducer: {
  //   user: userReducer,
  //   post: postReducer,
  // },
});