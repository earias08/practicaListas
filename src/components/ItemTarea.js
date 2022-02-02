import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ItemTarea = (props) => {
    const URL = process.env.REACT_APP_API_CAFETERIA;

    const handleDelete = (id) => {
        Swal.fire({
          title: "Esta seguro de borrar la tarea",
          text: "no puedes revertir este paso",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Borrar",
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              const res = await fetch(`${URL}/${id}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              });
              if (res.status === 200) {
                Swal.fire("Tarea eliminada!", "la tarea fue borrada correctamente", "success");
                props.getApi();
              }
            } catch (error) {
              console.log(error);
            }
          }
        });
      };

    return (
        <ListGroup.Item className='d-flex justify-content-between'>
            {props.dato.nombreTarea} 
            <Button variant='danger'  onClick={() => handleDelete(props.dato.id)}>Borrar</Button>
        </ListGroup.Item>     
    );
};

export default ItemTarea;