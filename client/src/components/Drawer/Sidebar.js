import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { mainListItems } from './listItems';
import { Drawer } from '@mui/material';

const Sidebar = () => {
  return (
    <Drawer variant='permanent'>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      />
      <Divider />
      <List component='nav'>{mainListItems}</List>
    </Drawer>
  );
};

export default Sidebar;
