import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function GridItem(props) {
  const { id, title, shortdescription, icon } = props.service;
  return (
    <Grid
      item
      xs={3}
      lg={1}
      align="center"
      style={{ marginTop: 5, marginBottom: 10 }}
    >
      {" "}
      <Link
        to={{
          pathname: "/services/" + id + "/",
          state: { service: props.service },
        }}
        style={{ color: "inherit", textDecoration: "inherit" }}
        key={id}
      >
        <img src={"https://krishnabharambe.pythonanywhere.com" + icon} width="50%" align="center" />
        <br />
        <Typography sx={{ fontSize: 12}}>{title}</Typography>
      </Link>
    </Grid>
  );
}

export default GridItem;