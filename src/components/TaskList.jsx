import TaskItem from './TaskItem';
import './TaskList.css';

// TaskList component - displays filtered list of tasks
function TaskList({ tasks, onDelete, onToggleComplete, onEdit, filter }) {
  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.isCompleted;
    if (filter === 'Completed') return task.isCompleted;
    return true;
  });

  return (
    <div className="task-list">
      {filteredTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TaskList;