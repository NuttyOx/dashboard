import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LaptopIcon from '@mui/icons-material/Laptop';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const navLinks = [
  {
    path: '/dashboard/user',
    display: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    path: '/tickets',
    display: 'Tickets',
    icon: <AssignmentIcon />,
  },
  {
    path: '/property',
    display: 'Property',
    icon: <LaptopIcon />,
  },
  {
    path: '/events',
    display: 'Events & Signs',
    icon: <EventIcon />,
  },
  {
    path: '/settings',
    display: 'Settings',
    icon: <SettingsIcon />,
  },
];

export const mainListItems = (
  <>
    {navLinks.map((navLink) => (
      <Link
        to={navLink.path}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <ListItemButton>
          <ListItemIcon>{navLink.icon}</ListItemIcon>
          <ListItemText>{navLink.display}</ListItemText>
        </ListItemButton>
      </Link>
    ))}
  </>
);
