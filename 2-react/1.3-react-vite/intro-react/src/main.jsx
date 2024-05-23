//Estas son importaciones de paquetes que se instalaron con npm
import React from 'react'
import ReactDOM from 'react-dom/client'
//Estas son importaciones de archivos que se crearon en el proyecto
import App from './components/App'

//Este es el punto de entrada de la aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
  //HOC
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
