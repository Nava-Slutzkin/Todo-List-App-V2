import './TodoList.css'
import TodoItem from './TodoItem'

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
          <TodoItem key={task.code} task={task} />
        ))}
      </ul>
    </main>
  )
}

export default TodoList
