import React, { useEffect, useState } from "react";
import axios from "axios";
import ServiceItem from "./ServiceItem";
import { AppBar, Box, Card, CardContent, Hidden, List, Toolbar, Typography } from "@mui/material";



export default function AllServices() {


  const [V_services, setV_services] = useState([]);
  //getting all services efrom api
  const retriveAllServices = async () => {
    const response = await axios.get(
      "https://krishnabharambe.pythonanywhere.com/api/allServicesList/"
    );
    // console.log(response);
    return response.data;
  };

  useEffect(() => {
    //   const retriveV_services = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    //   if (retriveV_services) setContacts(retriveV_services);

    const getAllServices = async () => {
      const allServices = await retriveAllServices();
      if (allServices) setV_services(allServices);
    };

    getAllServices();
  }, []);

  const RenderServices = V_services.map((service) => {
    return <ServiceItem service={service} />;
  });

  return (
    <div>
      <Hidden mdUp>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">
              All Services
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <br />
        <br />
      </Hidden>
      <Card>
        <CardContent>
          <Box fontWeight="fontWeightBold">All Services</Box>
          <List>{RenderServices}</List>
        </CardContent>
      </Card>
    </div>
  );}