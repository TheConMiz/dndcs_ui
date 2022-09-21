import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MoveToInbox from '@mui/icons-material/MoveToInbox';
import ContextWindow from './ContextWindow';

const drawerWidth = 60;

export default function PermanentDrawerLeft() {

  const [spellList, setSpellList] = useState(null);
  const [error, setError] = useState(null);
  const [contextWindowVis, setContextWindowVis] = useState(false);
  const [currentContext, setCurrentContext] = useState(null)

  const base_url = "https://www.dnd5eapi.co";

  const fetchSpellContext = (spell_url) => {
    const params = {
      "method": "GET",
      "headers": {
        "Content-Type": "application/json"
      }
    }

    let context_url = base_url + spell_url

    fetch(context_url, params)
      .then(response => {
        if (!response.ok) {
          setError(response.status);
        }
        return response.json(); 
      })

      .then(data => {
        setCurrentContext(data)
        setError(null)
      })

      .catch((err) => {
        setError(err.message)
        setCurrentContext(null)
      })
  }

  useEffect(() => {
    fetchSpells()

  }, [])

  const getCurrentContext = (spell) => {
    fetchSpellContext(spell.url);
  }
  const toggleContext = (spell) => {
    if (contextWindowVis) {
      setCurrentContext(null);
    }

    getCurrentContext(spell);
    setContextWindowVis(!contextWindowVis);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        {/* <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar> */}
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Inbox'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <ListItemIcon /> : <ListItemIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Trash'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <ListItemIcon /> : <MoveToInbox/>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        
        {
          error && <div><Typography>Error, Refresh the page</Typography></div>
        }

        {
          spellList && spellList.map((spell) => {
            return (
              <button key={spell.id} onClick={() => {toggleContext(spell)}}>
                {spell.name}
              </button>
            )
          })
        }

        {
          contextWindowVis && <ContextWindow context={currentContext} toggleValue={contextWindowVis} toggle={setContextWindowVis} />
        }

      </Box>
    </Box>
  );
}