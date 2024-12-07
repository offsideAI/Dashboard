import React, { useState, useEffect } from 'react';
import { Paper, Typography, IconButton, Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';

const TimeTracker = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds
    ).padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    setIsRunning(!isRunning);
  };

  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <Paper
      sx={{
        p: 3,
        background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
        color: 'white',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Time tracker
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          my: 4,
        }}
      >
        <Typography variant="h2" component="div" sx={{ fontFamily: 'monospace', mb: 2 }}>
          {formatTime(time)}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton
            onClick={handlePlayPause}
            sx={{ color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            {isRunning ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          <IconButton
            onClick={handleStop}
            sx={{ color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <StopIcon />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default TimeTracker;
