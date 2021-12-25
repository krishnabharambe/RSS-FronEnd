import { AppBar, Box, Card, CardContent, Hidden, List, Toolbar, Typography } from '@mui/material';
import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserBooking } from '../../../Redux/apiCalls';
import { startloading, stoploading, viewMyBooking } from '../../../Redux/BookingSlice';
import BookingItem from '../../Components/BookingComp/BookingItem';
import LoadingPage from '../../Components/LoadingPage';

export default function BBooking() {
    const globalbooking = useSelector((state) => state.booking.mybookings);
    const globalbookingStatus = useSelector((state) => state.booking);
    const [gloBookingItem, setGloBookingItem] = useState([])
    const [loadingState, setloadingState] = useState(true)
    const dispatch = useDispatch();

    const RenderBookings = gloBookingItem.map((booking) => {
        return <BookingItem service={booking} />;
    });

    const retriveUserrBookings = async () => {
        dispatch(startloading());
        const token = localStorage.getItem("Token");

        try {
            const res = await axios.get("https://krishnabharambe.pythonanywhere.com/api/requests/", {
                headers: {
                    Authorization: `token ${token}`,
                },
            });
            if (res.data) {
                dispatch(viewMyBooking(res.data));
                dispatch(stoploading());
                return res.data;
            } else {
                console.log("i am out")
                dispatch(stoploading());
            }
        } catch (err) {
            dispatch(stoploading());
            console.log("i am Error")
            console.log("err", err)
        }
        // console.log(response);
        
    };

    useEffect(() => {
        const getAllUserBookings = async () => {
            const allServices = await retriveUserrBookings();
            if (allServices) setGloBookingItem(allServices);
        };

        getAllUserBookings();
    }, []);

    return (
        <div>
            {globalbookingStatus.loadingview ? <LoadingPage /> : <div>
                <div>
                    <Hidden mdUp>
                        <AppBar>
                            <Toolbar>
                                <Typography variant="h6">
                                    My Bookings
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <br />
                        <br />
                        <br />
                    </Hidden>
                    <CardContent>
                        <Box fontWeight="fontWeightBold">My Bookings</Box>
                        <List>{RenderBookings}</List>
                    </CardContent>

                </div>
            </div>
            }
        </div>
    )
}
