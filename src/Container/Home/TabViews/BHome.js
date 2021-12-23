
import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from "react-redux";
import FrontCard from '../../Components/HomeComp/FrontCard';
import HomeSlider from '../../Components/HomeComp/HomeSlider';
import Search from '../../Components/HomeComp/Search';


export default function BHome() {
    const globalSlider = useSelector((state) => state.slider.sliderdata);
    console.log(globalSlider)

    return (
        <div>
            <Box sx={{ marginY: 2 }} ><Search /></Box>
            <HomeSlider />
            <FrontCard />
        </div>
    )
}
