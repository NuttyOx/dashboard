import { Container, Typography } from '@mui/material';
import React from 'react';

const Tickets = () => {
  return (
    <>
      <Container maxWidth='lg' sx={{ mt: 3, mb: 3 }}>
        <Typography
          variant='h4'
          noWrap
          sx={{ mb: 3, fontWeight: 'bold', color: '#522888' }}
        >
          Tickets
        </Typography>
      </Container>
    </>
  );
};

export default Tickets;
