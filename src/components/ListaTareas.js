import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = (props) => {
  return (
    <div>
      <ListGroup>
    {
      props.arregloTareas.map((valor, posicion)=> <ItemTarea key={posicion} dato={valor} borrarTarea={props.borrarTarea}></ItemTarea> )
    }
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
