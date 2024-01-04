import React, { useEffect, useState } from 'react';
import { useData } from './hooks/useData';
import { useDay2 } from './hooks/useDay2';
import { useDay3 } from './hooks/useDay3';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed  from './components/Feed';  
import RideBar from './components/Ridebar';
import { Box, Stack } from '@mui/material';

function App() {

  const { getData , getDataDay1part1 } = useData()
  const { getDay2Part1,getDay2 } = useDay2();
  const { getDay3 } = useDay3();




  useEffect(() => {
    getDataDay1part1()
    getData()
    getDay2Part1()
    getDay2()
    getDay3()
  }, [])


  return (
    <Box>
      <Navbar />
      <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
        <Sidebar />
        <Feed />
      </Stack>
    </Box>
  );
}

export default App;
