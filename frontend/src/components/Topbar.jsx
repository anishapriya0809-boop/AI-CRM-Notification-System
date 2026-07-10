import { useState } from "react";
import { FiBell } from "react-icons/fi";

import notificationsData from "../data/notifications";
import NotificationDropdown from "./NotificationDropdown";

import "../styles/topbar.css";

function Topbar() {

  const [notifications,setNotifications]=useState(notificationsData);

  const [open,setOpen]=useState(false);

  const unreadCount=notifications.filter(n=>!n.read).length;

  const markRead=(id)=>{

    setNotifications(prev=>

      prev.map(item=>

        item.id===id

        ?{...item,read:true}

        :item

      )

    );

  };

  return (

    <header className="topbar">

      <div>

        <h2>AI CRM Notification System</h2>

      </div>

      <div className="topbar-right">

        <div
          className="bell-container"
          onClick={()=>setOpen(!open)}
        >

          <FiBell className="bell-icon"/>

          {unreadCount>0&&(

            <span className="bell-badge">

              {unreadCount}

            </span>

          )}

        </div>

        {open&&(

          <NotificationDropdown

            notifications={notifications}

            onRead={markRead}

            onClose={()=>setOpen(false)}

          />

        )}

      </div>

    </header>

  );

}

export default Topbar;