import { AppBar, Hidden, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function BProfile() {
    return (
        <div>
            <Hidden mdUp>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6">
                            My Profile
                        </Typography>
                    </Toolbar>
                </AppBar>
                <br />
                <br />
                <br />
            </Hidden>
        </div>
    )
}
