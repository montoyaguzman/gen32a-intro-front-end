import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import '../styles/TaskItem.css'

const TaskItem = ({ tarea, setTareas }) => {

  const completeTask = () => {
    setTareas(( tareas ) => {
      return tareas.map((task) => {
        if (task.id === tarea.id) {
          return {...task, completed: !task.completed}
        }
        return task
      })
    }
    )
  }

  const removeTask = () => {
    setTareas((t /* Este Parametro Trae El State y le podemos llamar como nosotros queramos */) => {
      return t.filter(task => task.id !== tarea.id )
    })
  }

  return (
    <Card>
      <Card.Body >
        <Card.Title>
          Tarea { tarea.id }
        </Card.Title>
        <Card.Text as={'div'} className='d-flex justify-content-between'>
          <Card.Text className={tarea.completed === true ? 'text-muted strikethrough': ''}>
            { tarea.titulo }
          </Card.Text>
          <div>
            {/* Los Ternarios  estan compuestos por una evaluacion que siempre  tiene que ser verdadero o falso y  
            un signo de interrogacion seguido del signo de interrogacion
            si el valor es verdadero regresara el valor antes de los   :
            y si el valor es falso regresara el valor despues de los :
            */}
            <Button variant={tarea.completed === true ? 'warning' : 'success' } onClick={completeTask}>
              {
                tarea.completed === true ?'Uncomplete Tarea' : 'Complete Task' 
              }
            </Button>
            <Button variant='danger' onClick={removeTask}>
              Eliminar Tarea
            </Button>
          </div>
        </Card.Text>
        
      </Card.Body>

    </Card>
  )
}

export default TaskItem