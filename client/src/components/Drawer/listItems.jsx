import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LaptopIcon from '@mui/icons-material/Laptop';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';

export const mainListItems = (
  <>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary='Dashboard' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Tickets' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LaptopIcon />
      </ListItemIcon>
      <ListItemText primary='Property' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <ListItemText primary='Events & Signs' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary='Settings' />
    </ListItemButton>
  </>
);

export const navLinks = [
  {
    path: '/dashboard',
    display: 'Dashboard',
  },
  {
    path: '/bookings',
    display: 'Users',
  },
  {
    path: '/sell-car',
    display: 'Tickets',
  },
  {
    path: '/settings',
    display: 'Rooms',
  },
  {
    path: '/settings',
    display: 'GH Sensors',
  },
  {
    path: '/settings',
    display: 'Purchase Orders',
  },
];
