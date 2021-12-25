import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


export default function BookingItem(props) {
 
  console.log(props);
  const {
    id,
    Contact,
    Address,
    Comments,
    Status,
    uploaded_at,
    ServiceID,
    UserId
  } = props.service;

  return (
    <Link
      to={""}
      style={{ color: "inherit", textDecoration: "inherit" }}
      key={id}
    >
      <ListItem key={id}>
        <ListItemAvatar>
          <Avatar
            variant="rounded"
            src={"https://krishnabharambe.pythonanywhere.com/" + ServiceID.icon}
          ></Avatar>
        </ListItemAvatar>
        <ListItemText primary={Status} secondary={ServiceID.title} />
      </ListItem>
    </Link>
  );
}