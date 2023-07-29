import React from 'react'

function TodoItem({item}) {
  return (
    <li>{item.name}
        <button>↑</button>
        <button>↓</button>
        <button>←</button>
        <button>→</button>
    </li>

  )
}

export default TodoItem