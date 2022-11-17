import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { mainListItems } from '../Sidebar/listItems';
import { Avatar, Container, useMediaQuery } from '@mui/material';
import avatar from '../../assets/images/profile.jpg';
import logo from '../../assets/images/thcs-logo-for-web.png';
import Router from '../../routes/Router';

const drawerWidth = 225;

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: '#f2f2f2',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      backgroundColor: '#f2f2f2',
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
    }),
  },
}));

const mdTheme = createTheme();

const Layout = () => {
  const greaterThan375 = useMediaQuery(mdTheme.breakpoints.up('sm'));
  const [open, setOpen] = React.useState(greaterThan375);

  React.useEffect(() => {
    setOpen(greaterThan375);
  }, [greaterThan375]);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='absolute' elevation={0}>
          <Toolbar
            sx={{
              backgroundColor: '#522888',
              pr: '24px',
              height: '65px',
            }}
          >
            <Box
              component='img'
              sx={{
                mr: 2,
                height: '45px',
              }}
              alt='Your logo.'
              src={logo}
            />
            <Typography
              component='h1'
              color='inherit'
              noWrap
              sx={{
                flexGrow: 1,
                fontWeight: 'bold',
                fontSize: 30,
              }}
            >
              Throckmorton IT Service
            </Typography>
            <IconButton color='inherit'>
              <Typography variant='h6'>Michelle</Typography>
              <Avatar
                alt='Michelle Kejr'
                src={avatar}
                sx={{ width: 40, height: 40, ml: 1.5 }}
              />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant='permanent' open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          ></Toolbar>
          <Divider />
          <List component='nav'>{mainListItems}</List>
        </Drawer>
        <Box
          component='main'
          sx={{
            backgroundColor: '#F7F8FA',
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Router />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
