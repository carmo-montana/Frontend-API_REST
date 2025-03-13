import React, { useState } from 'react';
import { 
  Layout, 
  Users, 
  CheckSquare, 
  FolderKanban,
  Bell,
  Search,
  Plus,
  Menu
} from 'lucide-react';

function App() {
  const [currentProject, setCurrentProject] = useState('Project Alpha');
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Layout className="h-6 w-6 text-indigo-600" />
            <span className="font-bold text-xl">TaskFlow</span>
          </div>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg hover:bg-gray-100">
                <FolderKanban size={20} />
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg hover:bg-gray-100">
                <CheckSquare size={20} />
                <span>My Tasks</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg hover:bg-gray-100">
                <Users size={20} />
                <span>Team</span>
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">Project Manager</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              <button className="md:hidden">
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-xl font-semibold">{currentProject}</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search tasks..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              
              <button className="relative">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* Task Board */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Tasks</h2>
            <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              <Plus className="h-5 w-5" />
              <span>Add Task</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* To Do Column */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-medium text-gray-900">To Do</h3>
              </div>
              <div className="p-4 space-y-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium">Design new landing page</h4>
                    <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded">High</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Create a modern and responsive landing page design for the new product launch.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <img
                        className="h-6 w-6 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        className="h-6 w-6 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <span className="text-sm text-gray-500">Due in 3 days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* In Progress Column */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-medium text-gray-900">In Progress</h3>
              </div>
              <div className="p-4 space-y-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium">API Integration</h4>
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded">Medium</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Integrate the new payment gateway API with the existing system.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <img
                        className="h-6 w-6 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <span className="text-sm text-gray-500">Due tomorrow</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Completed Column */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-medium text-gray-900">Completed</h3>
              </div>
              <div className="p-4 space-y-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow opacity-75">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium line-through">Bug fixes</h4>
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">Done</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Fix reported bugs in the user authentication system.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <img
                        className="h-6 w-6 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <span className="text-sm text-gray-500">Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;