import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Avatar, 
  Box,
  InputBase,
  alpha
} from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Header = () => {
  const username = 'Amanda';
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
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        backgroundColor: '#fff'
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
              backgroundColor: alpha('#000', 0.04),
              '&:hover': {
                backgroundColor: alpha('#000', 0.06),
              },
              width: '240px',
            }}
          >
            <Box sx={{ position: 'absolute', p: 2 }}>
              <SearchOutlinedIcon sx={{ color: '#666', fontSize: 20 }} />
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
              <Avatar 
                alt={username}
                src="/avatar.jpg"
                sx={{ 
                  width: 32, 
                  height: 32,
                  border: '2px solid #fff',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              />
              <Typography 
                variant="subtitle1"
                sx={{ 
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: '#1a1a1a'
                }}
              >
                {username}
              </Typography>
            </Box>
            <IconButton size="small">
              <SettingsOutlinedIcon sx={{ fontSize: 20, color: '#666' }} />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
