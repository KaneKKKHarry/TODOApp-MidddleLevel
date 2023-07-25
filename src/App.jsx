import React, { useEffect, useState } from "react"
import InputTodo from "./components/InputTodo"
import IncompleteTodo from "./components/IncompleteTodo"
import CompleteTodo from "./components/CompleteTodo"
import EditTodo from "./components/EditTodo"

export const App= () => {
  const [incompleteTodoLists, setIncompleteTodoLists] = useState([{id: 0,content: '資格学習'}])
  const [completeTodoLists, setCompleteTodoLists] = useState([{id:1 ,content: 'Java学習'}])
  const [todoId, setTodoId] = useState(2)
  const [todoContent, setTodoContent] = useState('')
  const [isEditable, setIsEditable] = useState(false)

  const handleGetTodoContent = (e) => {
    setTodoContent(e.target.value)
  }
  const handleAddTodoContent = () => {
    const newTodoLists = [...incompleteTodoLists, {
      id: todoId,
      content: todoContent
    }]
    setIncompleteTodoLists(newTodoLists)
    setTodoContent('')
    setTodoId((prev) => prev + 1)
  }
  const handleCompleteTodo = (targetTodo) => {
    const newIncompleteTodoLists = incompleteTodoLists.filter((todo) => targetTodo.id !== todo.id)
    setIncompleteTodoLists(newIncompleteTodoLists)
    const newCompleteTodoLists = [...completeTodoLists, targetTodo]
    setCompleteTodoLists(newCompleteTodoLists)
  }
  const handleDeleteTodo = (targetTodo) => {
    setIncompleteTodoLists(incompleteTodoLists.filter((todo) => targetTodo.id !== todo.id))
  }
  const handleBackTodoContent = (targetTodo) => {
    const newCompleteTodoLists = completeTodoLists.filter((todo) => targetTodo.id !== todo.id)
    setCompleteTodoLists(newCompleteTodoLists)
    const newIncompleteTodoLists = [...incompleteTodoLists, targetTodo]
    setIncompleteTodoLists(newIncompleteTodoLists)
  }
  const showEdit = (targetTodo) => {
    setIsEditable(!isEditable)
    setTodoContent(targetTodo.content)
  }
  const handleEditTodoContent = (targetTodo) => {
    const newIncompleteTodoLists = [...incompleteTodoLists]
    newIncompleteTodoLists[targetTodo.id].content = todoContent
    setIncompleteTodoLists(newIncompleteTodoLists)
  }
    const handleCancel = () => {
    setIsEditable(!isEditable)
    setTodoContent('')
  }


  return (
    <>
      <h1>TODOリスト</h1>
      { !isEditable ? (
        <>
        { incompleteTodoLists.length <= 5 ?
          <InputTodo
            todo={todoContent}
            onChange={handleGetTodoContent}
            onClick={handleAddTodoContent}
          />
          :
          <p className="info-max">登録できるTODOの上限です</p>
        }
        </>):(
        <EditTodo
          todo={todoContent}
          onChange={handleGetTodoContent}
          onClick={handleEditTodoContent}
          Cancel={handleCancel}
        />
      )}
      <IncompleteTodo
        IncompleteLists={incompleteTodoLists}
        Complete={handleCompleteTodo}
        Delete={handleDeleteTodo}
        Edit={showEdit}
      />
      <CompleteTodo
        CompleteLists={completeTodoLists}
        Back={handleBackTodoContent}
      />
      
    </>
  )
}
