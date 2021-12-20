import React, { useEffect, useState } from "react";
import axios from "axios";
import { AppBar, Box, Card, CardContent, Hidden, List, makeStyles, Toolbar, Typography } from "@mui/material";
import ServiceItem from "./ServiceItem";


export default function AllServices() {


  const [V_services, setV_services] = useState([]);
  //getting all services efrom api
  const retriveAllServices = async () => {
    const response = await axios.get(
      "https://krishnabharambe.pythonanywhere.com/api/MainServicesList/"
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
    <div>       <Box fontWeight="fontWeightBold">Services</Box>
      <Card>
    
          <List>{RenderServices}</List>
      </Card>
    </div>
  );
}