import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { Link } from 'react-router-dom';

const DashboardUser = () => {
  return (
    <>
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
            <Link
              to='/newticket'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Card
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
            </Link>
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
                Digital Sign Request
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
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontSize: '1rem', padding: '0px 0px' }}>
                      Status
                    </TableCell>
                    <TableCell sx={{ fontSize: '1rem', padding: '0px 0px' }}>
                      Tkt#
                    </TableCell>
                    <TableCell sx={{ fontSize: '1rem', padding: '0px 0px' }}>
                      Subject
                    </TableCell>
                    <TableCell sx={{ fontSize: '1rem', padding: '0px 0px' }}>
                      Date
                    </TableCell>
                    <TableCell sx={{ fontSize: '1rem', padding: '0px 0px' }}>
                      Modified
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
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
    </>
  );
};

export default DashboardUser;
