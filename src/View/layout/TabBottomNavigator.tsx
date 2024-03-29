import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/style.css";
function TabBottomNavigator() {
  const location = useLocation();

  const isActive = (pathname) => location.pathname === pathname;

  const tabs = [
    {
      icon: "fas fa-home",
      path: "/",
      name: "Home",
    },

    {
      icon: "fa-solid fa-clipboard-list",
      path: "/Order",
      name: "Order",
    },

    {
      icon: "fas fa-exchange-alt",
      path: "/grap",
      name: "Grap",
    },

    {
      icon: "fas fa-newspaper",
      path: "/Online",
      name: "Online",
    },

    {
      icon: "fas fa-user",
      path: "/profile",
      name: "Account",
    },
  ];
  return (
    <div className="tabbottomNavigator">
      {tabs.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          style={{ color: "grey", textDecoration: "none" }}
        >
          <div className="singleTab">
            <i
              style={{ fontSize: 21 }}
              className={`${item.icon} ${isActive(item.path) && "active"}`}
            ></i>
            <p className={`text__link ${isActive(item.path) && "active"}`}>
              {item.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default TabBottomNavigator;
