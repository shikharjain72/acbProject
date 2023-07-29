import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

function TodoList() {
  const todos = [
    {id:1, name:'Cricket'},
    {id:2, name:'Hockey'},
    {id:3, name:'Badminton'},
    {id:4, name:'Football'}
  ]
  return (
    <div>
        <ul>
            {todos.map(item => {return <TodoItem item={item} key={item.id}/>
            })}
        </ul>
    </div>
  )
}

export default TodoList