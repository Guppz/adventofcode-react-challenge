import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Ridebar = () => {


  return (
    <Box flex={1} bgcolor={'green'} p={2} sx={{display: {xs: 'none' , sm:"block"}}}>
        <p>Ridebar</p>
    </Box>
  );
}

export default Ridebar;