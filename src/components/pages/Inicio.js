import React from 'react';
import { Container } from 'react-bootstrap';
import ListaTareas from '../ListaTareas';

const Inicio = (props) => {
    return (
        <div className='text-light'>
       {/* <ListaTareas arregloTareas={listaTareas} borrarTarea={borrarTarea}></ListaTareas> */}
       <Container className='my-4'>
       <h1 className='text-center'>Lista de tareas</h1>
       <ListaTareas arregloTareas={props.tareas}></ListaTareas>    
       </Container>
    </div>
    );
};

export default Inicio;