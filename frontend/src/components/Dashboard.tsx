import React from 'react';
import { Grid, Paper, Typography, Box, LinearProgress } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import TaskList from './TaskList.tsx';
import TimeTracker from './TimeTracker.tsx';

const Dashboard = () => {
  // Sample data for the activity chart
  const activityData = {
    labels: ['Working Hours', 'Tasks Completed', 'Projects Completed'],
    datasets: [
      {
        data: [29, 8, 4],
        backgroundColor: ['#FFB020', '#14B8A6', '#5048E5'],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <TaskList />
      </Grid>

      <Grid item xs={12} md={4}>
        <TimeTracker />
        
        <Paper sx={{ p: 3, mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Activity
          </Typography>
          <Box sx={{ height: 300, position: 'relative' }}>
            <Doughnut data={activityData} options={chartOptions} />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
              }}
            >
              <Typography variant="h4">75%</Typography>
              <Typography variant="body2" color="textSecondary">
                Completion
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Working Hours (29/40)
              </Typography>
              <LinearProgress
                variant="determinate"
                value={72.5}
                sx={{ height: 8, borderRadius: 4 }}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Tasks Completed (8/12)
              </Typography>
              <LinearProgress
                variant="determinate"
                value={66.7}
                sx={{ height: 8, borderRadius: 4 }}
              />
            </Box>
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Projects Completed (4/7)
              </Typography>
              <LinearProgress
                variant="determinate"
                value={57.1}
                sx={{ height: 8, borderRadius: 4 }}
              />
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
