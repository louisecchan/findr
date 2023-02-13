import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="YO whats up"
        timestamp="40 seconds ago"
        profilePic="..."
      />
    </div>
  );
}

export default Chats;
