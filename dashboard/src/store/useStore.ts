import { create } from 'zustand';
import { Task, Project } from '../types';

interface DashboardStore {
  tasks: Task[];
  projects: Project[];
  addTask: (task: Task) => void;
  addProject: (project: Project) => void;
  updateTask: (taskId: string, updates: Partial<Task>) => void;
  updateProject: (projectId: string, updates: Partial<Project>) => void;
}

export const useStore = create<DashboardStore>((set) => ({
  tasks: [],
  projects: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  addProject: (project) => set((state) => ({ projects: [...state.projects, project] })),
  updateTask: (taskId, updates) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, ...updates } : task
      ),
    })),
  updateProject: (projectId, updates) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === projectId ? { ...project, ...updates } : project
      ),
    })),
}));