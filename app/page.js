'use client'
import { useState } from 'react';
import TaskList from './components/TaskList';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = () => {
    if (newTaskText.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTaskText, completed: false }]);
      setNewTaskText('');
    }
  };

  const handleToggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleDeleteCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">TODO</h1>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          className="bg-gray-800 text-white border-none rounded p-4 flex-grow"
          placeholder="What to do ?"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white p-4 rounded ml-4"
        >
          Add Task
        </button>
      </div>
      <TaskList
        tasks={tasks}
        filter={filter}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
        onSetFilter={setFilter}
        onDeleteCompleted={handleDeleteCompleted}
      />
    </div>
  );
}
