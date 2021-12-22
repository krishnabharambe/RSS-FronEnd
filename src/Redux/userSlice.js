import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: {
            id: 0,
            phone: "",
            first_login: false
        },
        pending: false,
        error: false,
        OtpSent: false,
        otpSentError: "",
        otpValidation: false,
        otpValidationError: "",
        regValidation: false,
        registrationError: "",
        isAuth: false,
        authFailureMsg: "",

    },
    reducers: {
        startValidatingPhone: (state) => {
            state.pending = true;
        },
        updateUserInfo: (state, action) => {
            state.pending = false;
            state.userInfo = action.payload;
        },
        phonevalidatedOtpSent: (state) => {
            state.OtpSent = true;
        },
        validationfailure: (state) => {
            state.pending = false;
            state.error = true
            state.otpSentError = "Something Went Wrong or you are already registered. Please try again later."
        },
        otpValidationfailure: (state) => {
            state.pending = false;
            state.otpValidationError = "Please enter correct OTP."
        }, phonevalidatedOtpValidation: (state) => {
            state.otpValidation = true;
        },
        registerValidationError: (state) => {
            state.pending = false;
            state.registrationError = "Please enter password"
        }, registerValidation: (state) => {
            state.regValidation = true;
        }, loginSuccess: (state) => {
            state.isAuth = true
        }, loginFailure: (state) => {
            state.authFailureMsg = "Mobile no. or password is wrong."
        },loginFailure2: (state) => {
            state.authFailureMsg = "Invalid Token"
        }

    },
});


export const { startValidatingPhone,
    phonevalidatedOtpSent,
    otpValidationfailure,
    phonevalidatedOtpValidation,
    validationfailure,
    registerValidation,
    registerValidationError, 
    loginFailure,
    loginSuccess,
    updateUserInfo,
    loginFailure2
 } = userSlice.actions
export default userSlice.reducer;