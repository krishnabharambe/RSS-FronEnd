import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserBooking } from '../../../Redux/apiCalls';

export default function BBooking() {
    const globalbooking = useSelector((state) => state.booking);
    const dispatch = useDispatch();


    useEffect(() => {
        const getAllSubServices = async () => {
             await getUserBooking(dispatch);
        };
        getAllSubServices();

        console.log(globalbooking)
    }, []);

    return (
        <div>
            BBooking.js
        </div>
    )
}
