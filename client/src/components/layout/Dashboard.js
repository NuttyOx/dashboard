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
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { mainListItems } from '../../configs/listItems';
import { Avatar, Card } from '@mui/material';
import avatar from '../../assets/images/profile.jpg';
import logo from '../../assets/images/thcs-logo-for-web.png';

const drawerWidth = 225;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
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
              variant='h6'
              color='inherit'
              noWrap
              sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: 30 }}
            >
              Throckmorton IT Services
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
        <Drawer variant='permanent'>
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
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth='lg' sx={{ mt: 3, mb: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card
                  sx={{
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 160,
                    borderRadius: 2,
                  }}
                ></Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card
                  sx={{
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 160,
                    borderRadius: 2,
                  }}
                ></Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card
                  sx={{
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 160,
                    borderRadius: 2,
                  }}
                ></Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card
                  sx={{
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 160,
                    borderRadius: 2,
                  }}
                ></Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
