import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Button from './components/Button'



function App() {
  //estados de la aplicacion
  const [value, setValue] = useState('') // valor del input (la tarea a agregar)
  const [todos, setTodos] = useState([])// la lista de tareas ( es un array de strings)

  //funcion que agrega las tareas a la lista y elimina el valor del input
  const handleClickAdd = () => {
    setTodos([...todos, value])
    setValue('')

  }
//funcion donde se guarda el valor del input
  const handleChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)

  }
//funcion que elimina las tareas de la lista
  const handleDelete = (index) => {

    return () => {
      // obtenemos una copia del array de tareas
      const newTodos = [...todos]
      // eliminamos la tarea que se encuentra en el indice
      newTodos.splice(index, 1)
      // actualizamos el estado de la lista de tareas
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
