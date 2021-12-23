
import { Button } from "@mui/material";
import React from "react";

function ServiceDetail(props) {
  console.log(props);
  const {
    id,
    title,
    description,
    shortdescription,
    status,
    icon,
    uploaded_at,
  } = props.mService;
  return (
    <div>
      <br />
      <div>{shortdescription}</div>
      <br />
      <div>{description}</div>
      <br />
      <Button variant="outlined" color="primary">
        Book Service
      </Button>
    </div>
  );
}

export default ServiceDetail;