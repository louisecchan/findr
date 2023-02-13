import React from "react";
import "./Chat.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/icons-material";

function Chat({ name, message, timeStamp, profilePic }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat__image" src={profilePic} />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat__timeStamp">{timeStamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
