import React, { useEffect, useState } from "react";
import axios from "axios";
import SubServiceItem from "./SubServiceItem";
import ServiceDetail from "./ServiceDetail";
import { AppBar, Box, Card, CardContent, Hidden, List, Toolbar, Typography } from "@mui/material";
import  { useParams } from 'react-router-dom'

export default function SubServices(props) {
  //   state = {
  //     SubServiceFlag: true,
  //   };


console.log("SubserviceProps  : ", useParams)

  const [SubServiceFlag, setSubServiceFlag] = useState(false);

  const [V_SubServices, setV_SubServices] = useState([]);
  const {mainID} =useParams()

//   const {
//     id,
//     title,
//     description,
//     shortdescription,
//     status,
//     icon,
//     uploaded_at,
//   } = props.location.state.service;

  


  //getting all services efrom api
  const retriveAllSubServices = async () => {
    const url = "https://krishnabharambe.pythonanywhere.com/api/allServicesList/" + mainID + "/";
    const response = await axios.get(url);
    if (!response.data || response.data.length == 0) {
      setSubServiceFlag(false);
    } else {
      setSubServiceFlag(true);
      return response.data;
    }
  };

  useEffect(() => {
    //   const retriveV_services = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    //   if (retriveV_services) setContacts(retriveV_services);

    const getAllSubServices = async () => {
      const allSubServices = await retriveAllSubServices();
      if (allSubServices) {
        setV_SubServices(allSubServices);
      }
    };

    getAllSubServices();
  }, []);

  const RenderSubServices = V_SubServices.map((service) => {
    return <SubServiceItem service={service} />;
  });
  if (SubServiceFlag) {
    return (
      <div>
        <Hidden mdUp>
          <AppBar>
            <Toolbar>
              <Typography variant="h6">
                Service
              </Typography>
            </Toolbar>
          </AppBar>
          <br />
          <br />
          <br />
        </Hidden>
        <Card >
          <CardContent>
            <Box fontWeight="fontWeightBold"></Box>
            <List >{RenderSubServices}</List>
          </CardContent>
        </Card>
      </div>
    );
  }
  {
    return (
      <div>
No Service Found.
      </div>
    );
  }
}