import './TodoItem.css'

function getStatusColor(isCompleted) {
  if (isCompleted) {
    return '#4c8063'
  }

  return '#c67b3d'
}

function TodoItem({ task }) {
  const { code, title, isCompleted } = task
  const statusColor = getStatusColor(isCompleted)
  const completionClass = isCompleted ? ' is-completed' : ''
  const statusLabel = isCompleted ? 'הושלמה' : 'בתהליך'

  return (
    <li
      className={`task-item${completionClass}`}
      style={{ '--task-color': statusColor }}
    >
      <span className="task-code">{code}</span>
      <span className="task-title">{title}</span>
      <span className="task-status">{statusLabel}</span>
    </li>
  )
}

export default TodoItem