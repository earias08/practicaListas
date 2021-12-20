import React from "react";
//import Form from 'react-bootstrap/Form'
//import Button from 'react-bootstrap/Button'
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3 d-flex">
          <Form.Control type="text" placeholder="ingrese una tarea" />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </div>
  );
};

export default FormTareas;
