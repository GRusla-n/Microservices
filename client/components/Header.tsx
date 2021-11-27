import { FC } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6">Header</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
