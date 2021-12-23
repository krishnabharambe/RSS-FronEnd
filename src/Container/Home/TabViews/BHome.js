import { Box } from '@mui/material'
import React from 'react'
import Search from '../../Components/Search'
import { useDispatch, useSelector } from "react-redux";
import HomeSlider from '../../Components/HomeSlider';

export default function BHome() {
    const globalSlider = useSelector((state) => state.slider.sliderdata);
    console.log(globalSlider)

    return (
        <div>
            <Box sx={{ marginY: 2 }} ><Search /></Box>
            <HomeSlider />
        </div>
    )
}
