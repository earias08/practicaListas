import React, { useState, useEffect } from "react";
//import Form from 'react-bootstrap/Form'
//import Button from 'react-bootstrap/Button'
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import Swal from "sweetalert2";

const FormTareas = (props) => {
  //aqui va la logica
  //aqui creo los state
  let tareasLocalstorage =
    JSON.parse(localStorage.getItem("listaTareas")) || [];
  const [listaTareas, setListaTareas] = useState(tareasLocalstorage);
  const [tarea, setTarea] = useState("");
  const URL = process.env.REACT_APP_API_CAFETERIA;

  //ciclo de vida de un componente
  // useEffect(()=>{
  //   console.log('esto es una prueba');
  //   //guardar el arreglo en localstorage
  //   localStorage.setItem('listaTareas', JSON.stringify(listaTareas));
  // },[listaTareas])

  const handleSubmit = async (e) => {
    e.preventDefault();
    //guardar el contenido del state tarea dentro del arreglo listatareas
    // setListaTareas([...listaTareas, tarea]);

    //creo el objeto a enviar
    const dato={
      nombreTarea: tarea
    }
    //envie a la api la tarea
    console.log(dato)
    console.log(URL)
    try {
      const respuesta = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dato),
      });
      console.log(respuesta)
      if (respuesta.status === 201) {
        Swal.fire(
          "Tarea creada",
          "la tarea fue agregada correctamente",
          "success"
        );
         props.getApi();
        // navigate("/product/table");
        setTarea("");
      }
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Error",
        "la tarea no pudo ser agregada, intentelo nuevamente",
        "error"
      );
    }
  };

  const borrarTarea = (nombre) => {
    //filtramos el state sacando el elemento que quiero borrar
    let arregloModificado = listaTareas.filter((valor) => valor !== nombre);
    //actualizar el state
    setListaTareas(arregloModificado);
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="ingrese una tarea"
            onChange={(e) => setTarea(e.target.value.trimStart())}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas arregloTareas={props.tareas} getApi={props.getApi}></ListaTareas>
    </div>
  );
};

export default FormTareas;
