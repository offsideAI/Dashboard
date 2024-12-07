import React, { useState } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon
} from '@mui/material';
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon
} from '@mui/icons-material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const username = 'USC';
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ 
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        backgroundColor: 'background.paper'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: '72px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton size="small" sx={{ color: '#666' }}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton size="small" sx={{ color: '#666' }}>
            <KeyboardArrowRightIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: '#666',
              fontWeight: 400
            }}
          >
            {currentDate}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Box
            sx={{
              position: 'relative',
              borderRadius: '8px',
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.06)',
              },
              width: '240px',
            }}
          >
            <Box sx={{ position: 'absolute', p: 2 }}>
              <SearchIcon sx={{ color: '#666', fontSize: 20 }} />
            </Box>
            <InputBase
              placeholder="Search..."
              sx={{
                pl: 6,
                pr: 1,
                py: 1,
                width: '100%',
                '& .MuiInputBase-input': {
                  fontSize: '0.95rem',
                },
              }}
            />
          </Box>

          <IconButton size="large" sx={{ color: '#666' }}>
            <NotificationsNoneOutlinedIcon />
          </IconButton>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar 
                  sx={{ 
                    width: 32, 
                    height: 32,
                    bgcolor: 'primary.main'
                  }}
                >
                  U
                </Avatar>
              </IconButton>
              <Typography 
                variant="subtitle1"
                sx={{ 
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: 'text.primary'
                }}
              >
                {username}
              </Typography>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  bgcolor: 'background.paper',
                  '& .MuiMenuItem-root': {
                    color: 'text.primary',
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonIcon fontSize="small" sx={{ color: 'text.primary' }} />
                </ListItemIcon>
                Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <SettingsIcon fontSize="small" sx={{ color: 'text.primary' }} />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" sx={{ color: 'text.primary' }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
            <IconButton size="small">
              <SettingsIcon sx={{ fontSize: 20, color: '#666' }} />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
