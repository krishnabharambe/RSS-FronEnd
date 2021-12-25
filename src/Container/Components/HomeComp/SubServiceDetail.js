import { AppBar, Box, Button, Card, CardContent, Hidden, Toolbar, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";

function SubServiceDetail(props) {
  const { subMainID } = useParams()
  const [SubServiceFlag, setSubServiceFlag] = useState(false);

  const [V_SubServices, setV_SubServices] = useState([]);

  //getting all services efrom api
  const retriveAllSubServices = async () => {
    const url = "https://krishnabharambe.pythonanywhere.com/api/SubService/" + subMainID + "/";
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
        console.log(V_SubServices)
      }
    };

    getAllSubServices();
  }, []);

  return (
    <div>
      <Hidden mdUp>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" >
              Service
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <br />
        <br />
      </Hidden>

      <Card>
        <CardContent>
          <Box fontWeight="fontWeightBold">{V_SubServices.title}</Box>
          <Typography >
            {V_SubServices.shortdescription}
          </Typography>
          <Typography >
            {V_SubServices.description}
          </Typography>
          <Typography>
            <br />
          </Typography>

          <Link variant="outlined"
            color="primary" to={{
              pathname: "/subservices/createRequest/" + V_SubServices.id + "/",
              state: { service: props.service },
            }} >
            Book Service</Link>

        </CardContent>
      </Card>
    </div>
  );
}

export default SubServiceDetail;