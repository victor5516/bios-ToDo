import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Button from './components/Button'



function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  const handleClickAdd = () => {
    setTodos([...todos, value])
    setValue('')
    console.log(todos)
  }

  const handleChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)

  }

  const handleDelete = (index) => {

    return () => {
      const newTodos = [...todos]
      newTodos.splice(index, 1)
      setTodos(newTodos)
    }
    //indices = [0,1,2,3,4]
    // array =  [1,2,3,4,5]

  }
  return (
    <div>
      <h1>TODO</h1>
      <Input onChange={handleChange} value={value} />
      <Button text="Agregar"  onClick={handleClickAdd}/>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo} <Button text="Eliminar" onClick={handleDelete(index)}/> </li>
        ))}
      </ul>
    </div>
  )
}

export default App
