import { useState } from "react";
import { Col, Form } from "react-bootstrap"

const InputForm = ({ labelTitle, buttonLabel, placeholder, handleSubmitFromApp }) => {

  const [texto, setTexto] = useState('');

  const handleInput = (event) => {
    setTexto(event.target.value)
  }
    // const [texto, setTexto] = useState({
  //   textoUno: '',
  //   textoDos: '',
  //   textoTres: ''
  // });
  // const handleInput = (event) => {
  //   setTexto({
  //     ...texto,
  //     [event.target.name]: event.target.value
  //     //TextoUno: Valor del input
  //     //TextoDos: Valor del segundo input
  //     //TextoTres: Valor del tercer input
  //   })
  // }

  return (
    <Col>
      <Form onSubmit={(e) =>handleSubmitFromApp(e, texto)}>
        <Form.Group>
          <Form.Label>{ labelTitle }</Form.Label>
          {/* <Form.Label>{ texto }</Form.Label> */}
          <Form.Control
            type="text"
            placeholder={ placeholder }
            value={texto.textoUno}
            name="textoUno"
            onChange={(event)=> handleInput(event)}
          />
          {/* <Form.Control
            type="text"
            placeholder={ placeholder }
            value={texto.textoDos}
            name="textoDos"
            onChange={(event)=> handleInput(event)}
          />
          <Form.Control
            type="text"
            placeholder={ placeholder }
            value={texto.textoTres}
            name="textoTres"
            onChange={(e)=> handleInput(e)}
          /> */}
          {/* <Button variant="success" className="mt-2"onClick={() => wrongSetTexto()}>Cambiar Texto</Button> */}

          <button type="submit" className="btn btn-primary mt-2">{ buttonLabel }</button>
        </Form.Group>

      </Form>
    </Col>
  )
}

export default InputForm