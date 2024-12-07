import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { useStore } from '../store/useStore';

export function TaskForm() {
  const [title, setTitle] = useState('');
  const addTask = useStore((state) => state.addTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({
      id: crypto.randomUUID(),
      title,
      status: 'todo',
      priority: 'medium',
      description: '',
    });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new task..."
        className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        <PlusCircle size={20} />
        Add Task
      </button>
    </form>
  );
}