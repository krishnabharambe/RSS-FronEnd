import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import logo from './../../assets/HSA-logo.svg'
export default function loading() {
    return (
        <div>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <img src={logo} alt="React Logo" width={300} />
            </Box>
        </div>
    )
}
