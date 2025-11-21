import { create } from 'zustand'

type Todo = {
  todo:{
  id:string
  title:string
  }[],
  setTodo: (todo:{
  id:string
  title:string
  }) => void,
  clearOne:(id:string)=>void,
  edit:(id:string,newtitle:string)=>void

}

export const useTodo = create<Todo>()((set) => ({
  todo:[],
  setTodo: (newTodo) => set((todos) => ({todo:[...todos.todo,newTodo]})),
  clearOne:(id)=>set((previous)=>({todo:previous.todo.filter((allitem)=>allitem.id !==id)})),
  edit:(id,newtitle)=>set((previous)=>({todo:previous.todo.map((item)=>item.id===id ?{...item,title:newtitle}:item)}))
}))