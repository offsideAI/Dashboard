import React from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { useStore } from '../store/useStore';
import { Task } from '../types';

export function TaskList() {
  const tasks = useStore((state) => state.tasks);
  const updateTask = useStore((state) => state.updateTask);

  const toggleStatus = (task: Task) => {
    const newStatus = task.status === 'completed' ? 'todo' : 'completed';
    updateTask(task.id, { status: newStatus });
  };

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
        >
          <button
            onClick={() => toggleStatus(task)}
            className="text-gray-400 hover:text-blue-500"
          >
            {task.status === 'completed' ? (
              <CheckCircle2 className="text-green-500" />
            ) : (
              <Circle />
            )}
          </button>
          <span
            className={`flex-1 ${
              task.status === 'completed' ? 'line-through text-gray-400' : ''
            }`}
          >
            {task.title}
          </span>
          {task.dueDate && (
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Clock size={16} />
              <span>{new Date(task.dueDate).toLocaleDateString()}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}