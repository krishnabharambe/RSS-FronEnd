import { Box } from '@mui/material'
import React from 'react'
import AllServices from './HomePage/AllServices'
import Search from './HomePage/Search/Search'
import Slider from './HomePage/Slider/Slider'

export default function BHome() {
    return (
        <div>
            <Box sx={{ marginY: 2 }} ><Search  /></Box>
            
            <Slider />
           <AllServices />
        </div>
    )
}
