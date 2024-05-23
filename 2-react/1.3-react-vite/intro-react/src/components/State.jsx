import { useState } from "react";



export const State = ({initialState, titulo}) => {

  const [contador, setContador] = useState(initialState)
  //    nombre     funcion que actualiza el estado   (estado inicial);

  return (
    <>
    <span>{titulo}</span>
      <div>{contador}</div>
      <button onClick={ () => setContador(contador+1) }>+1</button>
    </>
  )
}
