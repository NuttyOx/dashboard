import { React, useState } from 'react';
import {
  Card,
  Typography,
  Container,
  Grid,
  Button,
  FormGroup,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)`
  background-color: #522888;
  color: #fff;
  margin: 10 10;
  borderradius: 2;
  &:active {
    background-color: black;
  }
`;

const assets = [
  {
    display: 'PP-1302-Tab',
  },
  {
    display: 'PP-1302-Lap01',
  },
  {
    display: 'PP-1302-Desk',
  },
  {
    display: 'PP-1302-Print',
  },
];

const building_assets = [
  {
    display: 'Attach a Room',
  },
  {
    display: 'Search others',
  },
  {
    display: 'Request New',
  },
];

const NewTicketUser = () => {
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      alert('clicked');
    }
  };

  const [alignment, setAlignment] = useState('');

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
        <Typography
          variant='h6'
          noWrap
          sx={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#522888',
            mt: 2,
            mb: 1,
          }}
        >
          Select Device
        </Typography>
        <ToggleButtonGroup
          value={alignment}
          exclusive={true}
          onChange={handleAlignment}
          aria-label='text alignment'
        >
          <Grid container spacing={3}>
            {assets.map((asset) => (
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <StyledButton
                  value={asset.display}
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 100,
                    borderRadius: 2,
                  }}
                >
                  <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                    {asset.display}
                  </Typography>
                </StyledButton>
              </Grid>
            ))}
          </Grid>
        </ToggleButtonGroup>
        <Typography
          variant='h6'
          noWrap
          sx={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#522888',
            mt: 3,
            mb: 1,
          }}
        >
          General Building/Room Assets
        </Typography>
        <FormGroup value={alignment} exclusive onChange={handleAlignment}>
          <Grid container spacing={3}>
            {building_assets.map((asset) => (
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <StyledButton
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
                    {asset.display}
                  </Typography>
                </StyledButton>
              </Grid>
            ))}
          </Grid>
        </FormGroup>
        <Grid container justifyContent='flex-end'>
          <StyledButton
            size='large'
            variant='contained'
            endIcon={<ArrowCircleRightIcon />}
          >
            Continue
          </StyledButton>
        </Grid>
      </Card>
    </Container>
  );
};

export default NewTicketUser;
