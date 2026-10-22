import { useState } from 'react'
import './TodoForm.css'

function TodoForm({
  initialTitle = '',
  onSubmitTask,
  submitLabel = 'הוספת משימה',
  inputLabel = 'כותרת המשימה החדשה',
  className = '',
}) {
  const [taskTitle, setTaskTitle] = useState(initialTitle)

  function handleSubmit(event) {
    event.preventDefault()

    const title = taskTitle.trim()
    if (!title) {
      return
    }

    onSubmitTask(title)
    setTaskTitle('')
  }

  return (
    <form className={`task-form ${className}`.trim()} onSubmit={handleSubmit}>
      <input
        aria-label={inputLabel}
        onChange={(event) => setTaskTitle(event.target.value)}
        placeholder="מה צריך לעשות?"
        type="text"
        value={taskTitle}
      />
      <button type="submit">{submitLabel}</button>
    </form>
  )
}

export default TodoForm