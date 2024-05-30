import { useState } from "react"
import { Container, Row } from "react-bootstrap"
import NavBar from "./components/NavBar"
import InputForm from "./components/InputForm"
import TaskList from "./components/TaskList"


function App() {

  const [Tareas, setTareas] = useState([])

  const handleSubmit = (e, tarea) => {
    e.preventDefault();
    const task = {
      id: Tareas.length + 1,
      titulo: tarea,
      completed: false
    }
    
    setTareas([...Tareas, task])
     //utiliza lo que tengas en el arreglo de Tareas y agrega lo que tengas en el input
  }



  return (
    <>
      <NavBar title='Todo App' name='Charly' /> 
      <Container>
        <h1 className="text-center mt-2">Todo App</h1>
        <Row>
          <InputForm
            labelTitle='Agrega Una Tarea'
            buttonLabel='Agregar'
            placeholder='Ingresa una Tarea'
            handleSubmitFromApp={handleSubmit}
          />
          <TaskList
            titulo='Lista de Tareas desde App'
            tareas={Tareas}
            setTareas={setTareas}
          />
          
        </Row>

      </Container>
    </>
  )
}

export default App
