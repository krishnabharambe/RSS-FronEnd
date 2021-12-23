import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GridItem from "./GridItem";
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";


export default function FrontCard() {
  const [V_MainServices, setV_MainServices] = useState([]);

  const retriveAllMainServices = async () => {
    const response = await axios.get(
      "https://krishnabharambe.pythonanywhere.com/api/MainServicesList/"
    );
    console.log(response);
    return response.data;
  };

  useEffect(() => {
    const getAllMainServices = async () => {
      const allMainServices = await retriveAllMainServices();
      if (allMainServices) setV_MainServices(allMainServices);
    };

    getAllMainServices();
  }, []);

  const RenderServices = V_MainServices.map((service) => {
    return <GridItem key={service.id} service={service} />;
  });

  return (
    <Card>
      <CardContent>
        <Box fontWeight="fontWeightBold">Services</Box>
        <Typography color="textSecondary"></Typography>
        <Typography variant="body2" component="p"></Typography>
        <Grid container>{RenderServices}</Grid>
      </CardContent>
      <CardActions>
        <Link to="/allservices" color="inherit" style={{marginLeft: "auto",
    textDecoration: "none"}}>
            All Services 
        </Link>
      </CardActions>
    </Card>
  );
}