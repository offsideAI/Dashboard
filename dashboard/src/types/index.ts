export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'in-progress' | 'completed';
  dueDate?: Date;
  priority: 'low' | 'medium' | 'high';
  projectId?: string;
  assignedTo?: string;
}

export interface Project {
  id: string;
  name: string;
  description?: string;
  status: 'active' | 'completed' | 'archived';
  startDate: Date;
  endDate?: Date;
  tasks: Task[];
}