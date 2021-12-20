import React from 'react';

const Subtitulo = (props) => {
    //aqui va la logica

    return (
        //aqui va el maquetado y un poquito de logica
        <div>
            <h3 className='text-center'>Tareas de la comision {props.comision}</h3>
        </div>
    );
};

export default Subtitulo;