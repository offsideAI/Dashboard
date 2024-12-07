import React from 'react';
import { Folder, BarChart2 } from 'lucide-react';
import { useStore } from '../store/useStore';

export function ProjectList() {
  const projects = useStore((state) => state.projects);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <Folder className="text-blue-500" />
        Projects
      </h2>
      <div className="grid gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">{project.name}</h3>
              <span className="text-sm text-gray-500">
                {project.tasks.length} tasks
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <BarChart2 size={16} />
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 rounded-full h-2"
                  style={{
                    width: `${
                      (project.tasks.filter((t) => t.status === 'completed')
                        .length /
                        project.tasks.length) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}