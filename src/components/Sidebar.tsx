import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Sidebar = () => {


  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: "block" } }}>
      <List>
        <ListItem>
          <ListItemButton component="a" href="#day1" >
            <ListItemText primary="Day 1" />
          </ListItemButton>
        </ListItem>
        <ListItem >
          <ListItemButton component="a" href="#day2">
            <ListItemText primary="Day 2" />
          </ListItemButton>
        </ListItem>
        <ListItem >
          <ListItemButton component="a" href="#day3">
            <ListItemText primary="Day 3" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;