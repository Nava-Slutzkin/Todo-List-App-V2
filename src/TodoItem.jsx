import { useState } from 'react'
import './TodoItem.css'
import TodoForm from './TodoForm'

function getStatusColor(isCompleted) {
  if (isCompleted) {
    return '#4c8063'
  }

  return '#c67b3d'
}

function TodoItem({ task, onComplete, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const { code, title, isCompleted } = task
  const statusColor = getStatusColor(isCompleted)
  const completionClass = isCompleted ? ' is-completed' : ''
  const statusLabel = isCompleted ? 'הושלמה' : 'בתהליך'

  function handleEdit(updatedTitle) {
    onEdit(code, updatedTitle)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <li
        className={`task-item is-editing${completionClass}`}
        style={{ '--task-color': statusColor }}
      >
        <div className="task-edit">
          <TodoForm
            className="task-edit-form"
            initialTitle={title}
            inputLabel="עריכת כותרת המשימה"
            onSubmitTask={handleEdit}
            submitLabel="שמירת שינויים"
          />
          <button
            className="task-action cancel-action"
            onClick={() => setIsEditing(false)}
            type="button"
          >
            ביטול
          </button>
        </div>
      </li>
    )
  }

  return (
    <li
      className={`task-item${completionClass}`}
      style={{ '--task-color': statusColor }}
    >
      <span className="task-code">{code}</span>
      <span className="task-title">{title}</span>
      <span className="task-status">{statusLabel}</span>
      <span className="task-actions">
        {!isCompleted && (
          <button
            className="task-action complete-action"
            onClick={() => onComplete(code)}
            type="button"
          >
            סמן כהושלמה
          </button>
        )}
        <button
          className="task-action edit-action"
          onClick={() => setIsEditing(true)}
          type="button"
        >
          עריכה
        </button>
        <button
          className="task-action delete-action"
          onClick={() => onDelete(code)}
          type="button"
        >
          מחיקה
        </button>
      </span>
    </li>
  )
}

export default TodoItem