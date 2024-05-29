import { useState } from "react"
import { Container, Row } from "react-bootstrap"
import NavBar from "./components/NavBar"
import InputForm from "./components/InputForm"


function App() {

  const [Tareas, setTareas] = useState([])

   const handleSubmit = (e) => {
    e.preventDefault();
     setTareas([...Tareas, e.target[0].value])
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
            handleSubmit={handleSubmit}
          />
          {
            Tareas
          }
        </Row>

      </Container>
    </>
  )
}

export default App
