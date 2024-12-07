import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Divider,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TaskIcon from '@mui/icons-material/Assignment';
import InboxIcon from '@mui/icons-material/Inbox';
import BarChartIcon from '@mui/icons-material/BarChart';
import FolderIcon from '@mui/icons-material/Folder';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

const drawerWidth = 240;

const Sidebar = () => {
  const mainMenuItems = [
    { text: 'Home', icon: <HomeIcon />, count: 0 },
    { text: 'My Tasks', icon: <TaskIcon />, count: 22 },
    { text: 'Inbox', icon: <InboxIcon />, count: 15 },
    { text: 'Reporting', icon: <BarChartIcon />, count: 0 },
    { text: 'Portfolios', icon: <FolderIcon />, count: 0 },
  ];

  const workspaceItems = [
    { text: 'Design Team', icon: '🎨' },
    { text: 'Marketing', icon: '📢' },
    { text: 'Development', icon: '💻' },
    { text: 'Product Launch', icon: '🚀' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: '1px solid rgba(0, 0, 0, 0.12)',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" component="div">
          Dashboard
        </Typography>
      </Box>

      <List>
        {mainMenuItems.map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
            {item.count > 0 && (
              <Typography variant="caption" color="textSecondary">
                {item.count}
              </Typography>
            )}
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ px: 2, mb: 2 }}>
        <Typography variant="subtitle2" color="textSecondary">
          MY WORKSPACE
        </Typography>
      </Box>

      <List>
        {workspaceItems.map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon>
              <Typography fontSize="1.2rem">{item.icon}</Typography>
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <List>
        <ListItem button>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
