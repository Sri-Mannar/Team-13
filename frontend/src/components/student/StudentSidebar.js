import React from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LogoutIcon from '@mui/icons-material/Logout';
import "../../styles/dashboard.css";

const Sidebar = ({ isCollapsed }) => {

  const NAVIGATION = [
    {
      kind: 'header',
      title: 'Quick Actions',
    },
    {
      segment: 'profile',
      title: 'Profile',
      icon: <DashboardIcon />,
    },
    {
      segment: 'attendance',
      title: 'Attendance',
      icon: <HowToRegIcon />,
    },
    {
        segment: 'results',
        title: 'Results',
        icon: <HowToRegIcon />,
    },
    {
      kind: 'divider',
    },
    {
      kind: 'header',
      title: 'Analytics',
    },
    {
      segment: 'complaint',
      title: 'Complaint',
      icon: <GroupIcon />,
    },
    {
      segment: 'logout',
      title: 'Logout',
      icon: <LogoutIcon />,
    },
  ];

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <ul className="nav-list">
        {NAVIGATION.map((item, index) => (
          item.kind === 'header' ? (
            <li key={index} className="header">
              {!isCollapsed && <span className="header-text">{item.title}</span>}
            </li>
          ) : item.kind === 'divider' ? (
            <li key={index} className="divider" />
          ) : (
            <li key={index} className="nav-item">
              <div className="nav-item-wrapper">
                <NavLink
                  to={`/student/${item.segment}`}
                  className="nav-link"
                  onClick={item.segment === 'users'}
                >
                  <div className="nav-content">
                    <div className="icon-wrapper">{item.icon}</div>
                    {!isCollapsed && <span className="nav-title">{item.title}</span>}
                  </div>
                </NavLink>
              </div>
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;