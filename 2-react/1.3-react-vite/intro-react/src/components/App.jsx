import { Component } from "./Component";
import { State } from "./State";

import '../styles/app.css';


const App = () => {

  return (
    <>
      <h1 className="titulo">¡Hola, mundo!</h1>
      <p id="parrafo">desde una funcion de flecha</p>
      <Component />
      < State initialState={200} titulo={"titulo1"}  />
      < State initialState={100} titulo={"titulo2"}/>
      < State initialState={50}  titulo={"titulo3"} />
      < State initialState={10}  titulo={"titulo4"} />
    </>
  )
}

export default App


// function App(){
//   return (
//     <div>
//       <h1>¡Hola, mundo!</h1>
//       <p>desde una funcion</p>
//     </div>
//   )
// }

