import {
    AGREGAR_PELICULA,
    AGREGAR_PELICULA_EXITO,  
    AGREGAR_PELICULA_ERROR,  
} from '../types';

import clienteAxios from '../config/axios';


// Crear nuevas Peliculas
export function crearNuevaPeliculaAction(pelicula) {
    return async (dispatch) => {
        dispatch( agregarPelicula() );

        try {
            // Insertar en la API
            clienteAxios.post('/peliculas', pelicula);

            // Si todo va bien, actualizar el State
            dispatch( agregarPeliculaExito(pelicula) );
        
        } catch (error) {
            console.log(error)
            // Si hay un error cambiar el state
            dispatch( agregarPeliculaError(true));
        }
    }
}

const agregarPelicula = () => ({
    type: AGREGAR_PELICULA
})

const agregarPeliculaExito = pelicula => ({
    type: AGREGAR_PELICULA_EXITO,
    payload: pelicula
})

const agregarPeliculaError = estado => ({
    type: AGREGAR_PELICULA_ERROR,
    payload: true
})