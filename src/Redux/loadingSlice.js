import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        loadingview : false,
        apiRequest: {
            status : false,
            detail : ""
        }
    },

    reducers: {
        startloading: (state) => {
            state.loadingview = true;
        },
        stoploading: (state,) => {
            state.loadingview = false;
        },
        ApiRequestErrorReducer: (state, action) => {
            state.apiRequest = action.payload;
        },
    },
});

export const { startloading, stoploading, ApiRequestErrorReducer
 } = loadingSlice.actions
export default loadingSlice.reducer;