import { AppBar, Box, Card, CardContent, Hidden, List, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserBooking } from '../../../Redux/apiCalls';
import BookingItem from '../../Components/BookingComp/BookingItem';

export default function BBooking() {
    const globalbooking = useSelector((state) => state.booking.mybookings);
    const [gloBookingItem, setGloBookingItem] = useState([])
    const dispatch = useDispatch();


    useEffect(() => {
        const getAllSubServices = async () => {
            await getUserBooking(dispatch);
        };
        getAllSubServices();

        setGloBookingItem(globalbooking)
        console.log(globalbooking)
    }, []);

    const RenderBookings = gloBookingItem.map((booking) => {
        return <BookingItem service={booking} />;
      });

    return (
        <div>
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
    )
}
