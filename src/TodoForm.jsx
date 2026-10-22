import { useState } from 'react'
import './TodoForm.css'

function TodoForm({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const title = taskTitle.trim()
    if (!title) {
      return
    }

    onAddTask(title)
    setTaskTitle('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        aria-label="כותרת המשימה החדשה"
        onChange={(event) => setTaskTitle(event.target.value)}
        placeholder="מה צריך לעשות?"
        type="text"
        value={taskTitle}
      />
      <button type="submit">הוספת משימה</button>
    </form>
  )
}

export default TodoForm