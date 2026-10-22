import './TodoList.css'

const tasks = [
  { code: 101, title: 'להשלים את תרגיל React', isCompleted: true },
  { code: 102, title: 'לתרגל עבודה עם מערכים', isCompleted: false },
  { code: 103, title: 'לבדוק את האפליקציה בדפדפן', isCompleted: false },
]

function TodoList() {
  return (
    <main className="todo-page" dir="rtl">
      <header className="todo-header">
        <p className="todo-kicker">TODO LIST APP V2</p>
        <h1>רשימת המשימות</h1>
        <p className="todo-count">{tasks.length} משימות</p>
      </header>

      <ul className="task-list">
        {tasks.map((task) => (
          <li
            className={`task-item${task.isCompleted ? ' is-completed' : ''}`}
            key={task.code}
          >
            <span className="task-code">{task.code}</span>
            <span className="task-title">{task.title}</span>
            <span className="task-status">
              {task.isCompleted ? 'הושלמה' : 'בתהליך'}
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default TodoList
