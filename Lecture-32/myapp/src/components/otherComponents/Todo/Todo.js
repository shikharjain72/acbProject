import React from 'react';
import { TodoInput } from '../TodoInput';
import TodoList from "../TodoList/TodoList";
import { Todoheading } from '../TodoHeading';

function Todo() {
  return (
    <div>
      <Todoheading/>
      <TodoInput/>
      <TodoList/>
    </div>
  )
}

export default Todo;