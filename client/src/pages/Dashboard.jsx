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
import { mainListItems } from '../components/Drawer/listItems';
import { Avatar, Card, useMediaQuery } from '@mui/material';
import avatar from '../assets/images/profile.jpg';
import logo from '../assets/images/thcs-logo-for-web.png';

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
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

const DashboardContent = () => {
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
          <Container maxWidth='lg' sx={{ mt: 3, mb: 3 }}>
            <Typography
              variant='h4'
              noWrap
              sx={{ mb: 3, fontWeight: 'bold', color: '#522888' }}
            >
              Welcome, Michelle!
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card
                  onClick={() => alert('Clicked!')}
                  sx={{
                    backgroundColor: '#522888',
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 140,
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant='h5'
                    sx={{ color: '#fff', fontWeight: 'bold' }}
                  >
                    Submit Ticket
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card
                  onClick={() => alert('Clicked!')}
                  sx={{
                    backgroundColor: '#522888',
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 140,
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant='h5'
                    sx={{ color: '#fff', fontWeight: 'bold' }}
                  >
                    Submit Event or Digital Sign image/video
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card
                  onClick={() => alert('Clicked!')}
                  sx={{
                    backgroundColor: '#522888',
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 140,
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant='h5'
                    sx={{ color: '#fff', fontWeight: 'bold' }}
                  >
                    Request Equipment
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card
                  onClick={() => alert('Clicked!')}
                  sx={{
                    backgroundColor: '#522888',
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 140,
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant='h5'
                    sx={{ color: '#fff', fontWeight: 'bold' }}
                  >
                    Checked out Equipment
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth='lg' sx={{ mt: 3, mb: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Card
                  sx={{
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 160,
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant='h6'
                    noWrap
                    sx={{ fontSize: 18, color: '#522888' }}
                  >
                    My Tickets
                  </Typography>
                  <Divider />
                </Card>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Card
                  sx={{
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 160,
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant='h6'
                    noWrap
                    sx={{ fontSize: 18, color: '#522888' }}
                  >
                    My Property
                  </Typography>
                  <Divider />
                </Card>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth='lg' sx={{ mt: 3, mb: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Card
                  sx={{
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 160,
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant='h6'
                    noWrap
                    sx={{ fontSize: 18, color: '#522888' }}
                  >
                    Help Docs
                  </Typography>
                  <Divider />
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default function Dashboard() {
  return <DashboardContent />;
}
