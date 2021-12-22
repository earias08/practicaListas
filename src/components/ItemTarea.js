import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const ItemTarea = (props) => {
    return (
        <ListGroup.Item className='d-flex justify-content-between'>
            {props.dato} 
            <Button variant='danger' onClick={()=> props.borrarTarea(props.dato)}>Borrar</Button>
        </ListGroup.Item>     
    );
};

export default ItemTarea;