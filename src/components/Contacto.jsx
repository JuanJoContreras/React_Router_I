import { Form, Button} from 'react-bootstrap';

export default function TextControlsExample() {
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <Button variant="info" className="text-white mb-3">Enviar</Button>{' '}
    </>
  );
}