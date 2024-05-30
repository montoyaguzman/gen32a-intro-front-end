import { Col } from "react-bootstrap"
import TaskItem from "./TaskItem"

const TaskList = ({ titulo, tareas, setTareas }) => {

  console.log(tareas)
  return (
    <Col>
      <h2 className="text-center mb-3">{titulo}</h2>
      <ul>
        {
          tareas.map((tarea, index) => (
            <TaskItem key={index} tarea={tarea} setTareas={setTareas} />
          ))
        }
      </ul>

    </Col>
  )
}

export default TaskList