import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function SubServiceItem(props) {


  console.log(props);
  const {
    id,
    title,
    description,
    shortdescription,
    status,
    icon,
    uploaded_at,
  } = props.service;

  return (
    <Link
      to={{
        pathname: "/subservices/" + id + "/",
        state: { service: props.service },
      }}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <ListItem key={id}>
        <ListItemAvatar>
          <Avatar
            variant="rounded"
            src={"https://krishnabharambe.pythonanywhere.com/" + icon}
          ></Avatar>
        </ListItemAvatar>
        <ListItemText primary={title} secondary={shortdescription} />
      </ListItem>
    </Link>
  );
}