import Task from "../TaskItem";


const TaskList = ({ tasks, filter, onToggle, onDelete, onSetFilter }) => {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
  });

  return (
    <div className="bg-gray-800 rounded p-4">
      {filteredTasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onToggle={() => onToggle(task.id)}
          onDelete={() => onDelete(task.id)}
        />
      ))}
      <div className="mt-4 flex justify-between items-center text-sm text-gray-400">
        <span>{tasks.filter(task => !task.completed).length} items left</span>
        <div>
          <button onClick={() => onSetFilter('all')} className={`mr-2 ${filter === 'all' ? 'text-white' : ''}`}>All</button>
          <button onClick={() => onSetFilter('active')} className={`mr-2 ${filter === 'active' ? 'text-white' : ''}`}>Active</button>
          <button onClick={() => onSetFilter('completed')} className={`${filter === 'completed' ? 'text-white' : ''}`}>Completed</button>
        </div>
        <button
          onClick={() => onDeleteCompleted()}
          className="text-gray-400 hover:text-white"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TaskList;
