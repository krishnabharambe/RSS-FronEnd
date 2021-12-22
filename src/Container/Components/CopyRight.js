import { Link, Typography } from '@mui/material'
import React from 'react'

export default function CopyRight() {
    return (
        <div>
            <Typography color="text.secondary" variant="body2" align="center" sx={{ mt: 2 }}> 
            Copyright &copy; <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>2021.</Typography>
        </div>
    )
}
