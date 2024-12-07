import React from 'react';
import { Grid, Paper, Typography, Box, LinearProgress } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import TaskList from './TaskList';
import TimeTracker from './TimeTracker';

const Dashboard = () => {
  // Sample data for the activity chart
  const activityData = {
    labels: ['Completed', 'In Progress', 'Pending'],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: ['#4CAF50', '#2196F3', '#FFC107'],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    cutout: '75%',
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: 'background.default' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ mb: 3, color: 'text.primary', fontWeight: 600 }}>
            Dashboard
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <TaskList />
        </Grid>

        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 3, bgcolor: 'background.paper', borderRadius: '16px' }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'text.primary', fontWeight: 600 }}>
                  Activity Overview
                </Typography>
                <Box sx={{ height: 200, position: 'relative' }}>
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
                    <Typography variant="h4" sx={{ color: 'text.primary', fontWeight: 600 }}>
                      65%
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Completed
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ mt: 2 }}>
                  {activityData.labels.map((label, index) => (
                    <Box
                      key={label}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 1,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: activityData.datasets[0].backgroundColor[index],
                            mr: 1,
                          }}
                        />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {label}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ color: 'text.primary' }}>
                        {activityData.datasets[0].data[index]}%
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <TimeTracker />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
