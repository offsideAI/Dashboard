import React from 'react';
import { Layout, Clock, Calendar } from 'lucide-react';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { ProjectList } from './components/ProjectList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layout className="text-blue-500" />
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <Clock className="text-gray-500" />
            <Calendar className="text-gray-500" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Tasks</h2>
              <TaskForm />
              <TaskList />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ProjectList />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;