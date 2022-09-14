import { Form, Button } from "react-bootstrap";

function Contacto() {
  return (
    <Form>
      <br></br>
      <div className="contenedor-contacto">
        <h2>Cuentanos, ¿en que te podemos ayudar?</h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="ingresa tu correo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <div className="boton-container">
        <Button variant="danger" className="boton">Enviar</Button>
        </div>
      </div>
    </Form>
  );
}

export default Contacto;
