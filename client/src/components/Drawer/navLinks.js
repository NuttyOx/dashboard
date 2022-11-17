import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LaptopIcon from '@mui/icons-material/Laptop';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';

const navLinks = [
  {
    path: '/dashboard',
    display: 'Dashboard',
    icon: DashboardIcon,
  },
  {
    path: '/bookings',
    display: 'Tickets',
    icon: AssignmentIcon,
  },
  {
    path: '/sell-car',
    display: 'Property',
    icon: LaptopIcon,
  },
  {
    path: '/settings',
    display: 'Events & Signs',
    icon: EventIcon,
  },
  {
    path: '/settings',
    display: 'Settings',
    icon: SettingsIcon,
  },
];

export default navLinks;
