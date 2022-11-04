import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import Avatar from "@mui/material/Avatar";

function SidebarChat(addNewChat) {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("please enter the name for chat");
    if (roomName) {
      //do some clever database stuff
    }
  };

  return (
    <>
      {!addNewChat ? (
        <div className="sidebarChat">
          <Avatar
            alt="João Espinheira"
            src={`https://avatars.dicebear.com/api/pixel-art/${seed}.svg`}
            sx={{ width: 38, height: 38 }}
          />
          <div className="sidebarChat__info">
            <h2>room name</h2>
            <p>last message...</p>
          </div>
        </div>
      ) : (
        <div onClick={createChat} className="sidebarChat">
          <h2>add new chat</h2>
        </div>
      )}
    </>
  );
}

export default SidebarChat;
