import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function ServiceItem(props:any) {


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
    
          style={{ color: "inherit", textDecoration: "inherit" }}
          key={id} to={""}    >
      <ListItem key={id}>
        <ListItemAvatar>
          <Avatar
            variant="rounded"
            src={"https://krishnabharambe.pythonanywhere.com" + icon}
          ></Avatar>
        </ListItemAvatar>
        <ListItemText primary={title} secondary={shortdescription} />
      </ListItem>
    </Link>
  );
}