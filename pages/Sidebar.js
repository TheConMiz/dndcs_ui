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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MoveToInbox from '@mui/icons-material/MoveToInbox';
import ContextWindow from './ContextWindow';

const drawerWidth = 60;

export default function PermanentDrawerLeft() {

  const [spellList, setSpellList] = useState(null);
  const [error, setError] = useState(null);
  const [contextWindowVis, setContextWindowVis] = useState(false);
  const [currentContext, setCurrentContext] = useState(null)

  const base_url = "https://www.dnd5eapi.co";

  const fetchSpells = () => {
    const params = {
      "method": "GET",
      "headers": {
        "Content-Type": "application/json"
      }
    }

    let spell_url = base_url + "/api/spells"

    fetch(spell_url, params)
      .then(response => {
        if (!response.ok) {
          setError(response.status);
        }
        return response.json(); 
      })

      .then(data => {
        setSpellList(data.results)
        setError(null)
      })
      .catch((err) => {
        setError(err.message)
        setSpellList(null)
      })
  }

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

        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography> */}
        {/* <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </Box>
    </Box>
  );
}
