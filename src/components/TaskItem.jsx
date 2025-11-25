import { useState } from 'react';
import './TaskItem.css';

// TaskItem component - displays a single task with edit/delete options
function TaskItem({ task, onDelete, onToggleComplete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);
  const [editPriority, setEditPriority] = useState(task.priority);

  // Open edit modal with current task data
  const handleEditClick = () => {
    setEditTitle(task.title);
    setEditDescription(task.description);
    setEditPriority(task.priority);
    setIsEditing(true);
  };

  // Save edited task
  const handleSave = () => {
    if (editTitle.trim()) {
      onEdit(task.id, {
        title: editTitle.trim(),
        description: editDescription.trim(),
        priority: editPriority
      });
      setIsEditing(false);
    }
  };

  // Close modal without saving
  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
        <div className="task-content">
          <div className="task-header">
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => onToggleComplete(task.id)}
            />
            <h3 className="task-title">{task.title}</h3>
            <span className={`priority priority-${task.priority.toLowerCase()}`}>
              {task.priority}
            </span>
          </div>
          <p className="task-description">{task.description}</p>
        </div>
        <div className="task-actions">
          <button className="edit-btn" onClick={handleEditClick}>
            Edit
          </button>
          <button className="delete-btn" onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </div>
      </div>

      {/* Edit modal */}
      {isEditing && (
        <div className="modal-overlay" onClick={handleCancel}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Edit Task</h2>
              <button className="modal-close" onClick={handleCancel}>&times;</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="modal-input"
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="modal-textarea"
                />
              </div>
              <div className="form-group">
                <label>Priority</label>
                <select
                  value={editPriority}
                  onChange={(e) => setEditPriority(e.target.value)}
                  className="modal-select"
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-btn cancel-btn" onClick={handleCancel}>Cancel</button>
              <button className="modal-btn save-btn" onClick={handleSave}>Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TaskItem;