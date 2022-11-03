import React from "react";
import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ForumIcon from "@mui/icons-material/Forum";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function Sidebar() {
  return (
    <div className="sidebar">
      Sidebar
      <div className="sidebar__header">
        <Avatar
          alt="João Espinheira"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 48, height: 48 }}
        />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats"></div>
    </div>
  );
}

export default Sidebar;
