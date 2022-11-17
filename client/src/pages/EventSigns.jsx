import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const EventSigns = () => {
  return (
    <>
      <Container maxWidth='lg' sx={{ mt: 3, mb: 3 }}>
        <Typography
          variant='h4'
          noWrap
          sx={{ mb: 3, fontWeight: 'bold', color: '#522888' }}
        >
          Events and Signs
        </Typography>
      </Container>
    </>
  );
};

export default EventSigns;
