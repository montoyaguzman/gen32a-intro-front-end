import { useState } from "react";
import { Col, Form } from "react-bootstrap"

const InputForm = ({ labelTitle, buttonLabel, placeholder, handleSubmit }) => {

  const [texto, setTexto] = useState('');

  const handleInput = (fulanito) => {
    setTexto(fulanito.target.value)
  }


  return (
    <Col>
      <Form onSubmit={(e) =>handleSubmit(e)}>
        <Form.Group>
          <Form.Label>{ labelTitle }</Form.Label>
          {/* <Form.Label>{ texto }</Form.Label> */}
          <Form.Control
            type="text"
            placeholder={ placeholder }
            value={ texto }
            onChange={(fulanito)=> handleInput(fulanito)}
          />
          {/* <Button variant="success" className="mt-2"onClick={() => wrongSetTexto()}>Cambiar Texto</Button> */}

          <button type="submit" className="btn btn-primary mt-2">{ buttonLabel }</button>
        </Form.Group>

      </Form>
    </Col>
  )
}

export default InputForm