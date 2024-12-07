import React from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  Box,
  Avatar,
  AvatarGroup,
  IconButton,
  Tab,
  Tabs,
} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

interface Task {
  id: number;
  title: string;
  progress: number;
  assignees: string[];
  priority: number;
  color: string;
}

const TaskList = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tasks: Task[] = [
    {
      id: 1,
      title: 'New Ideas for campaign',
      progress: 60,
      assignees: ['user1.jpg', 'user2.jpg'],
      priority: 8,
      color: '#FF6B6B'
    },
    {
      id: 2,
      title: 'Change button',
      progress: 27,
      assignees: ['user3.jpg'],
      priority: 7,
      color: '#FFB020'
    },
    {
      id: 3,
      title: 'New BrandBook',
      progress: 95,
      assignees: ['user1.jpg', 'user4.jpg'],
      priority: 8,
      color: '#FF6B6B'
    },
    {
      id: 4,
      title: 'Wireframe for List',
      progress: 78,
      assignees: ['user2.jpg', 'user3.jpg'],
      priority: 3,
      color: '#14B8A6'
    },
    {
      id: 5,
      title: 'Design PPT #4',
      progress: 112,
      assignees: ['user1.jpg', 'user4.jpg'],
      priority: 2,
      color: '#14B8A6'
    },
  ];

  return (
    <Paper 
      sx={{ 
        p: 3,
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontSize: '1.1rem',
            fontWeight: 600,
            color: '#1a1a1a'
          }}
        >
          Tasks I've assigned
        </Typography>
        <IconButton size="small">
          <AddOutlinedIcon sx={{ fontSize: 20, color: '#666' }} />
        </IconButton>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
        <Tabs 
          value={value} 
          onChange={handleChange}
          sx={{
            minHeight: '36px',
            '& .MuiTab-root': {
              minHeight: '36px',
              textTransform: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              color: '#666',
              padding: '6px 16px',
            },
            '& .Mui-selected': {
              color: '#2196f3',
            },
          }}
        >
          <Tab label="Upcoming" />
          <Tab label="Overdue" />
          <Tab label="Completed" />
        </Tabs>
      </Box>

      <List sx={{ '& > li': { px: 0 } }}>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              py: 2,
              borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
              '&:last-child': {
                borderBottom: 'none',
              },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: '6px',
                    backgroundColor: task.color + '20',
                    color: task.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                  }}
                >
                  {task.priority}
                </Box>
                <Typography 
                  variant="subtitle1"
                  sx={{ 
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: '#1a1a1a'
                  }}
                >
                  {task.title}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: task.progress > 100 ? '#FF6B6B' : '#666',
                    fontSize: '0.9rem'
                  }}
                >
                  {task.progress}%
                </Typography>
                <IconButton size="small">
                  <MoreHorizOutlinedIcon sx={{ fontSize: 20, color: '#666' }} />
                </IconButton>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pl: 5 }}>
              <Box
                sx={{
                  height: 4,
                  flexGrow: 1,
                  borderRadius: 2,
                  bgcolor: 'rgba(0, 0, 0, 0.04)',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    width: `${Math.min(task.progress, 100)}%`,
                    height: '100%',
                    bgcolor: task.progress > 100 ? '#FF6B6B' : '#2196f3',
                    borderRadius: 2,
                  }}
                />
              </Box>
              <AvatarGroup 
                max={3}
                sx={{
                  '& .MuiAvatar-root': {
                    width: 24,
                    height: 24,
                    fontSize: '0.8rem',
                    border: '2px solid #fff',
                  },
                }}
              >
                {task.assignees.map((assignee, index) => (
                  <Avatar
                    key={index}
                    src={assignee}
                    alt={`Assignee ${index + 1}`}
                  />
                ))}
              </AvatarGroup>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TaskList;
