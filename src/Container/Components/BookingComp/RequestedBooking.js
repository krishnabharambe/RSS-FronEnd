import { AppBar, Box, CardContent, Hidden, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function RequestedBooking() {

    const { RequestID } = useParams()
    const [RequestData, setRequestData] = useState()

    const getRequestData = async () => {
        const url = "https://krishnabharambe.pythonanywhere.com/api/request/" + RequestID + "/";
        const response = await axios.get(url);
        if (!response.data || response.data.length == 0) {

        } else {

            return response.data;
        }
    };

    useEffect(() => {
        const getRequestDataCall = async () => {
            const allSubServices = await getRequestData();
            if (allSubServices) {
                setRequestData(allSubServices)
                console.log('allSubServices', RequestData)
            }
        };

        getRequestDataCall();
    }, []);

    return (
        <div>
            {RequestData ? <div>
                <Hidden mdUp>
                    <AppBar>
                        <Toolbar>
                            <Typography variant="h6">
                                Booking Details
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <br />
                    <br />
                    <br />
                </Hidden>

                <CardContent>
                    <Box fontWeight="fontWeightBold">
                        <Typography variant="h5">
                            {RequestData.ServiceID.title}
                        </Typography>
                    </Box>
                    <Box fontWeight="fontWeightBold">Descriptions :</Box>
                    <Typography>{RequestData.ServiceID.shortdescription}</Typography>
                    <Typography>{RequestData.ServiceID.description}</Typography>
                    <Box fontWeight="fontWeightBold">Address :</Box>
                    <Typography>{RequestData.Address}</Typography>
                    <Box fontWeight="fontWeightBold">Comments :</Box>
                    <Typography>{RequestData.Comments}</Typography>
                    <Box fontWeight="fontWeightBold">Status :</Box>
                    <Typography>{RequestData.Status}</Typography>
                </CardContent>

            </div> : "Loading............................"}
        </div>
    )
}
