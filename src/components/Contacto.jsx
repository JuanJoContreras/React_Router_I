import { Form, Button} from 'react-bootstrap';

export default function TextControlsExample() {
  return (
    <>
    <Form>
      <Form.Group className="text-center mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu correo..." />
      </Form.Group>
      <Form.Group className="text-center mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion:</Form.Label>
        <Form.Control as="textarea" placeholder="Ingresa tu descripcion..." rows={3} />
      </Form.Group>
    </Form>
    <Button variant="info" className="text-white mb-3 text-center justify-content-center">Enviar</Button>{' '}
    </> 
  );
}