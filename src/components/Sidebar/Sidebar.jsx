// Sidebar.js
import React from "react";
import "./Sidebar.css";
import { Sidebar } from "../../data/SidebarData";
import { Link, useLocation } from "react-router-dom";

const Sidebaritems = ({ children }) => {
  const location = useLocation();
  const pathValue = location.pathname;
  return (
    <div className="side__bar__main__card">
      {pathValue !== "/login" && pathValue !== "/" && pathValue !== "*" && (
        <div className="sidebar">
          {/* Your sidebar content goes here */}
          {Sidebar?.map((i) => (
            <Link style={{ textDecoration: "none", color: "grey" }} to={i.link}>
              <div className="sidebar-item">
                <span style={{ marginRight: "12px" }}>{i.icon}</span>
                <span>{i.name}</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      <main className="sidebar__right__side">{children}</main>
    </div>
  );
};

export default Sidebaritems;
