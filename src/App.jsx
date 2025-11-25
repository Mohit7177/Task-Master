import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Footer from './components/Footer'

// Main App component - manages all tasks and state
function App() {
  const [tasks, setTasks] = useState([]); // Store all tasks
  const [filter, setFilter] = useState('All'); // Track active filter

  // Add a new task to the list
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Delete a task by ID
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle task completion status
  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  // Update an existing task
  const editTask = (id, updatedTask) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, ...updatedTask } : task
    ));
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="left-column">
          <TaskForm onAddTask={addTask} />
        </div>
        <div className="right-column">
          {/* Filter buttons */}
          <div className="filter-buttons">
            {['All', 'Active', 'Completed'].map(filterType => (
              <button
                key={filterType}
                className={`filter-btn ${filter === filterType ? 'active' : ''}`}
                onClick={() => setFilter(filterType)}
              >
                {filterType}
              </button>
            ))}
          </div>
          <TaskList
            tasks={tasks}
            onDelete={deleteTask}
            onToggleComplete={toggleComplete}
            onEdit={editTask}
            filter={filter}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App