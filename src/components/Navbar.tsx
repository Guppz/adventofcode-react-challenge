import { AppBar, Box,Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Navbar = () => {


  return (
    <AppBar position='sticky' sx={{backgroundColor:'#282a36'}}>
        <Toolbar>
            <Typography variant='h4'>Advent of Code 20023</Typography>
        </Toolbar>
    </AppBar>
  );
}

export default Navbar;
