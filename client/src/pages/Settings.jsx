import { Box, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Settings = () => {
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
          Settings
        </Typography>
      </Container>
    </Box>
  );
};

export default Settings;
