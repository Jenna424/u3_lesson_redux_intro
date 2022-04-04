import { ADD_TODO, NEW_TODO, REMOVE_TODO } from '../types'

export const AddTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
})

export const CreateNewTodo = (formValue) => ({
  type: NEW_TODO,
  payload: formValue
})

export const RemoveTodo = (idx) => ({
  type: REMOVE_TODO,
  payload: idx
})
