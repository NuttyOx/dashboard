import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material';

const Dashboard = () => {
  return (
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
                height: 120,
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
                height: 120,
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
                height: 120,
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
                height: 120,
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
  );
};

export default Dashboard;
