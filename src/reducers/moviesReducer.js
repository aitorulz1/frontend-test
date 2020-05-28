import {
    AGREGAR_PELICULA,  
    AGREGAR_PELICULA_EXITO,  
    AGREGAR_PELICULA_ERROR,  
} from '../types'

const initialState = {
    peliculas: [],
    error: false,
    loading: false,
}

export default function(state = initialState, action) {
    switch(action.type) {
    case AGREGAR_PELICULA:
        return {
            ...state,
            peliculas: action.payload
        }
    case AGREGAR_PELICULA_EXITO:
        return{
            ...state,
            loading:false,
            peliculas: [...state.peliculas, action.payload]
        }
    case AGREGAR_PELICULA_ERROR:
        return{
            ...state,
            error: action.payload
        }
        default:
            return state;
    }
}