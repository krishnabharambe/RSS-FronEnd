import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import {
    Paper,
    Button,
    Typography,
    CardMedia,
    Card,
} from '@mui/material'
import Settings, { DefaultSettingsT, SettingsT } from './Settings';
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";


const Slider = () => {
    const [settings, setSettings] = useState<SettingsT>(DefaultSettingsT);
    const globalSlider = useSelector((state: RootStateOrAny) => state.slider);
    
    return (
        <div>
            <Carousel
                className="Slider"
                {...settings}
            >
                {
                    items.map((item, index) => {
                        return <Project item={item} key={index} />
                    })
                }
            </Carousel>
            <br />
        </div>
    )
}


type Item = {
    id: number,
    title: string,
    image: string,
    uploaded_at: string
}

interface ProjectProps {
    item: Item
}

function Project({ item }: ProjectProps) {
    return (
        <Paper
            className="Project"
        >
            <Card>
                <CardMedia
                    component="img"
                    src={item.image}
                    height="140"
                >
                </CardMedia>
            </Card>
        </Paper>
    )
}

const items: Item[] = [
    {
        "id": 1,
        "title": "Restore",
        "image": "https://www.w3schools.com/howto/img_nature_wide.jpg",
        "uploaded_at": "2021-12-19T17:02:01.820405Z"
    },
    {
        "id": 2,
        "title": "Restore",
        "image": "https://www.w3schools.com/howto/img_snow_wide.jpg",
        "uploaded_at": "2021-12-19T17:02:06.389855Z"
    },
    {
        "id": 3,
        "title": "Restore",
        "image": "https://www.w3schools.com/howto/img_mountains_wide.jpg",
        "uploaded_at": "2021-12-19T17:02:10.242008Z"
    }
]

export default Slider;