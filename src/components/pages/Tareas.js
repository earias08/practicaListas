import React from "react";
import Titulo from "../Titulo";
import FormTareas from "../FormTareas";

const Tareas = (props) => {
  return (
    <div className="text-light">
      <Titulo></Titulo>
      <hr />
      <FormTareas tareas={props.tareas} getApi={props.getApi}></FormTareas>
    </div>
  );
};

export default Tareas;
