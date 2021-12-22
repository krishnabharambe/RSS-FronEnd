import { BottomNavigation, BottomNavigationAction, Typography } from '@mui/material';
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EventIcon from '@mui/icons-material/Event';
import BHome from './TabViews/BHome';
import BBooking from './TabViews/BBooking';
import BOffers from './TabViews/BOffers';
import BProfile from './TabViews/BProfile';

export default function Home() {
    const [value, setValue] = React.useState('B_HOME');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div>
                {value === "B_HOME" ? <BHome /> :
                    <div>
                        {value === "B_Bookings" ? <BBooking /> :
                            <div>
                                {value === "B_Offers" ? <BOffers /> :
                                    <BProfile />
                                }
                            </div>
                        }
                    </div>}
            </div>
            <BottomNavigation sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} value={value} onChange={handleChange}>
                <BottomNavigationAction value="B_HOME" label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction value="B_Bookings" label="Bookings" icon={<EventIcon />} />
                <BottomNavigationAction value="B_Offers" label="Offers" icon={<LocalOfferIcon />} />
                <BottomNavigationAction value="B_Profile" label="Profile" icon={<PersonIcon />} />
            </BottomNavigation>
        </div>
    )
}