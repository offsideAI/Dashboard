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
  ListItemButton,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const drawerWidth = 240;

const Sidebar = () => {
  const mainMenuItems = [
    { text: 'Home', icon: <HomeOutlinedIcon sx={{ color: '#666' }} />, count: 0 },
    { text: 'My Tasks', icon: <AssignmentOutlinedIcon sx={{ color: '#666' }} />, count: 22 },
    { text: 'Inbox', icon: <EmailOutlinedIcon sx={{ color: '#666' }} />, count: 15 },
    { text: 'Reporting', icon: <InsertChartOutlinedIcon sx={{ color: '#666' }} />, count: 0 },
    { text: 'Portfolios', icon: <FolderOutlinedIcon sx={{ color: '#666' }} />, count: 0 },
  ];

  const workspaceItems = [
    { text: 'Branding and Identity', icon: '🎨', color: '#FF6B6B' },
    { text: 'Marketing Team', icon: '📢', color: '#4ECDC4' },
    { text: 'Product Launch', icon: '🚀', color: '#45B7D1' },
    { text: 'Team Brainstorm', icon: '💡', color: '#96CEB4' },
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
          borderRight: '1px solid rgba(0, 0, 0, 0.08)',
          backgroundColor: '#FFFFFF',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="h6" component="div" sx={{ color: '#1a1a1a', fontWeight: 600 }}>
          Dashboard
        </Typography>
      </Box>

      <Box sx={{ px: 2, py: 1 }}>
        <ListItemButton
          sx={{
            borderRadius: '8px',
            mb: 1,
            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
          }}
        >
          <ListItemIcon>
            <AddCircleOutlineIcon sx={{ color: '#666' }} />
          </ListItemIcon>
          <ListItemText primary="Create" sx={{ color: '#666' }} />
        </ListItemButton>
      </Box>

      <Box sx={{ px: 2, py: 1 }}>
        <Typography variant="caption" sx={{ color: '#666', px: 2 }}>
          GENERAL
        </Typography>
      </Box>

      <List>
        {mainMenuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            sx={{
              px: 2,
              py: 1,
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
              borderRadius: '0 20px 20px 0',
              mr: 2,
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
            <ListItemText 
              primary={item.text} 
              sx={{ 
                '& .MuiTypography-root': { 
                  fontSize: '0.95rem',
                  color: '#1a1a1a',
                  fontWeight: 500
                } 
              }} 
            />
            {item.count > 0 && (
              <Typography variant="caption" sx={{ color: '#666' }}>
                {item.count}
              </Typography>
            )}
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2, mx: 2 }} />

      <Box sx={{ px: 2, py: 1 }}>
        <Typography variant="caption" sx={{ color: '#666', px: 2 }}>
          MY WORKSPACE
        </Typography>
      </Box>

      <List>
        {workspaceItems.map((item) => (
          <ListItem
            button
            key={item.text}
            sx={{
              px: 2,
              py: 1,
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
              borderRadius: '0 20px 20px 0',
              mr: 2,
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  backgroundColor: item.color + '20',
                  color: item.color,
                }}
              >
                {item.icon}
              </Box>
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              sx={{ 
                '& .MuiTypography-root': { 
                  fontSize: '0.95rem',
                  color: '#1a1a1a',
                  fontWeight: 500
                } 
              }} 
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <List>
        <ListItem
          button
          sx={{
            px: 2,
            py: 1,
            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
          }}
        >
          <ListItemIcon>
            <HelpOutlineOutlinedIcon sx={{ color: '#666' }} />
          </ListItemIcon>
          <ListItemText 
            primary="Get help" 
            sx={{ 
              '& .MuiTypography-root': { 
                fontSize: '0.95rem',
                color: '#666',
                fontWeight: 500
              } 
            }} 
          />
        </ListItem>
        <ListItem
          button
          sx={{
            px: 2,
            py: 1,
            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
          }}
        >
          <ListItemIcon>
            <SettingsOutlinedIcon sx={{ color: '#666' }} />
          </ListItemIcon>
          <ListItemText 
            primary="Settings" 
            sx={{ 
              '& .MuiTypography-root': { 
                fontSize: '0.95rem',
                color: '#666',
                fontWeight: 500
              } 
            }} 
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
