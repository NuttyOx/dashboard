import {
  Container,
  Typography,
  Card,
  Grid,
  Select,
  MenuItem,
  FormControl,
  TextField,
  Button,
} from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import React from 'react';

const NewTicket = () => {
  const [department, setDepartment] = React.useState('');
  const [category, setCategory] = React.useState('');

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeDepartment = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <Container maxWidth='false' sx={{ mt: 3, mb: 3 }}>
      <Typography
        variant='h4'
        noWrap
        sx={{ mb: 3, fontWeight: 'bold', color: '#522888' }}
      >
        Create New Ticket
      </Typography>

      <Card
        sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 2,
        }}
      >
        <Typography variant='h6' noWrap sx={{ fontSize: 18, color: '#522888' }}>
          Select Department
        </Typography>
        <FormControl>
          <Select
            required
            value={department}
            onChange={handleChangeDepartment}
            sx={{ height: 40 }}
          >
            <MenuItem value={10}>Agronomy</MenuItem>
            <MenuItem value={20}>HNR</MenuItem>
            <MenuItem value={30}>PPath</MenuItem>
          </Select>
        </FormControl>

        <Typography
          variant='h6'
          noWrap
          sx={{ fontSize: 18, color: '#522888', mt: 2 }}
        >
          Select Category
        </Typography>
        <FormControl sx={{ minWidth: 120 }}>
          <Select
            required
            value={category}
            onChange={handleChangeCategory}
            sx={{ height: 40 }}
          >
            <MenuItem value={10}>Trouble</MenuItem>
            <MenuItem value={20}>Purchase</MenuItem>
            <MenuItem value={30}>Poster</MenuItem>
          </Select>
        </FormControl>
        <Typography
          variant='h6'
          noWrap
          sx={{ fontSize: 18, color: '#522888', mt: 2 }}
        >
          Summary
        </Typography>
        <TextField
          variant='outlined'
          size='small'
          inputProps={{ maxLength: 90 }}
        />
        <Typography
          variant='h6'
          noWrap
          sx={{ fontSize: 18, color: '#522888', mt: 2 }}
        >
          Description
        </Typography>
        <TextField multiline inputProps={{ maxLength: 500 }} sx={{ mb: 2 }} />

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card
              sx={{
                backgroundColor: '#522888',
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 100,
                borderRadius: 2,
              }}
            >
              <Typography
                variant='h5'
                sx={{ color: '#fff', fontWeight: 'bold' }}
              >
                Add Property
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card
              sx={{
                backgroundColor: '#522888',
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 100,
                borderRadius: 2,
              }}
            >
              <Typography
                variant='h5'
                sx={{ color: '#fff', fontWeight: 'bold' }}
              >
                Add Image
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card
              sx={{
                backgroundColor: '#522888',
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 100,
                borderRadius: 2,
              }}
            >
              <Typography
                variant='h5'
                sx={{ color: '#fff', fontWeight: 'bold' }}
              >
                Add Documents
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Grid container justifyContent='flex-end'>
          <Button
            size='large'
            sx={{ mt: 2, backgroundColor: '#522888' }}
            variant='contained'
            endIcon={<ArrowCircleRightIcon />}
          >
            Submit
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};

export default NewTicket;
