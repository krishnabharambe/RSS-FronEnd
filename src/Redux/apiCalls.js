import axios from "axios";
import { getSliderImages, startfetchingImages, startfetchingImagesComplete } from "./sliderSlice";
import {
    startValidatingPhone, 
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
}
    from "./userSlice";

export const apiCall_ValidatePhone = async (phone, dispatch) => {
    dispatch(startValidatingPhone());
    try {
        const res = await axios.post("https://krishnabharambe.pythonanywhere.com/api/ValidatePhone/", { phone });
        console.log(res.data)
        console.log(res.data.status)
        if (res.data.status) {
            dispatch(phonevalidatedOtpSent());
        } else {
            dispatch(validationfailure());
        }
    } catch (err) {
        dispatch(validationfailure());
    }
};


export const apiCall_ValidateOtp = async (phone, otp, dispatch) => {
    dispatch(startValidatingPhone());
    try {
        const res = await axios.post("https://krishnabharambe.pythonanywhere.com/api/ValidateOTP/", {
            phone: phone,
            otp: otp,
        });
        if (res.data.status) {
            dispatch(phonevalidatedOtpValidation());
        } else {
            dispatch(otpValidationfailure());
        }
    } catch (err) {
        dispatch(otpValidationfailure());
    }
};

export const apiCall_Register = async (phone, password, dispatch) => {
    dispatch(startValidatingPhone());
    try {
        const res = await axios.post("https://krishnabharambe.pythonanywhere.com/api/register/", {
            phone: phone,
            password: password,
        });
        console.log(res.data)
        if (res.data.status) {
            dispatch(registerValidation());
            apiCall_Login(phone, password, dispatch)
        } else {
            dispatch(registerValidationError());
        }
    } catch (err) {
        dispatch(registerValidationError());
        console.log(err)
    }
};

export const apiCall_Login = async (phone, password, dispatch) => {
    dispatch(startValidatingPhone());
    try {
        const res = await axios.post("https://krishnabharambe.pythonanywhere.com/api/login/", {
            phone: phone,
            password: password,
        });
        console.log(res.data)
        if (res.data.token) {
            localStorage.setItem("Token", res.data.token);
            // dispatch(loginSuccess());
            apiCall_CheckLogin(res.data.token,dispatch);
        } else {
            dispatch(loginFailure());
        }
    } catch (err) {
        dispatch(loginFailure());
        console.log(err)
    }
};

export const apiCall_CheckLogin = async (token, dispatch) => {
    dispatch(startValidatingPhone());
    try {
        const token = localStorage.getItem("Token");
        const res = await axios
        .get("https://krishnabharambe.pythonanywhere.com/api/userAPI/", {
          headers: {
            Authorization: `token ${token}`,
          },
        });

        console.log(res.data)
        if(res.data.id) {
            dispatch(updateUserInfo({
                'id': res.data.id,
                'phone': res.data.phone,
                'first_login': res.data.first_login,
            }));
            dispatch(loginSuccess());
        } else {
            dispatch(loginFailure2());
        }
    } catch (err) {
        dispatch(loginFailure2());
        console.log(err)
    }
};



export const apiCall_FetchSliderData = async (dispatch) => {
    dispatch(startfetchingImages());
    try {

        const res = await axios
        .get("https://krishnabharambe.pythonanywhere.com/api/allSlidercards/");
        console.log(res.data)
        if(res.data) {
            dispatch(getSliderImages(res.data));
            dispatch(startfetchingImagesComplete());
        } else {
            console.log("Error while fetchng slidering images")
        }
    } catch (err) {
        dispatch(loginFailure2());
        console.log(err)
    }
};