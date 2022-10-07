import React, { Fragment, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, Grid } from '@mui/material';
import ListPane from '../ui/ListPane';
import IosShareIcon from '@mui/icons-material/IosShare';

const drawerWidth = 55;

const sx_drawer = {
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
}

const sx_content = {
  width: "100%",
  height: "100vh",
  backgroundColor: 'primary.dark',
  paddingTop: 2,
}

const Sidebar = () => {

  return (
    <Fragment>
      
      <CssBaseline />

      <Drawer
        sx={sx_drawer}
        variant="permanent"
        anchor="left"
      >

        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Avatar
                  sx={{width: "40px", height: "40px", left:"-7px"}}
                >
                  VV
                </Avatar>
              </ListItemIcon>
              <ListItemText/>
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />

        <List>
          {['Item1', 'Export', 'Settings'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <IosShareIcon/>
                </ListItemIcon>
                <ListItemText/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        
        <List>
          {/* {['Item1', 'Export', 'Settings'].map((text, index) => ( */}
          <ListItem
            disablePadding
            sx={{anchor: "bottom"}}
            
          >
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon/>
                </ListItemIcon>
                <ListItemText/>
              </ListItemButton>
            </ListItem>
          {/* ))} */}
        </List>

      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 0 }}
      >

        <Box
          sx={sx_content}
        >
          <Grid
              sx={{
                  width: "100%",
                  height: "100%",
              }}
              container
              direction="row"
              justifyContent="space-around"
              alignItems="flex-start"
          >
            
            <ListPane />

          </Grid>
        </Box>

      </Box>
    </Fragment>
  );
}


export default Sidebar;