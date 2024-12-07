import React from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  LinearProgress,
  Box,
  Avatar,
  AvatarGroup,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface Task {
  id: number;
  title: string;
  progress: number;
  assignees: string[];
}

const TaskList = () => {
  const tasks: Task[] = [
    {
      id: 1,
      title: 'New Ideas for campaign',
      progress: 60,
      assignees: ['user1.jpg', 'user2.jpg'],
    },
    {
      id: 2,
      title: 'Change button',
      progress: 27,
      assignees: ['user3.jpg'],
    },
    {
      id: 3,
      title: 'New BrandBook',
      progress: 95,
      assignees: ['user1.jpg', 'user4.jpg'],
    },
    {
      id: 4,
      title: 'Wireframe for List',
      progress: 78,
      assignees: ['user2.jpg', 'user3.jpg'],
    },
    {
      id: 5,
      title: 'Design PPT #4',
      progress: 112,
      assignees: ['user1.jpg', 'user4.jpg'],
    },
  ];

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Tasks I've assigned</Typography>
        <IconButton>
          <AddIcon />
        </IconButton>
      </Box>

      <List>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            sx={{
              borderRadius: 1,
              mb: 1,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            <Box sx={{ width: '100%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="subtitle1">{task.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {task.progress}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={Math.min(task.progress, 100)}
                sx={{ height: 6, borderRadius: 3, mb: 1 }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <AvatarGroup max={3}>
                  {task.assignees.map((assignee, index) => (
                    <Avatar
                      key={index}
                      src={assignee}
                      sx={{ width: 24, height: 24 }}
                    />
                  ))}
                </AvatarGroup>
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TaskList;
