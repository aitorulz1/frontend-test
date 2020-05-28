import React, { Fragment, useState } from 'react';
import logo from '../mba-logo.png';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux'

// Actions Redux
import { crearNuevaPeliculaAction } from '../actions/movieActions'

const NuevaPelicula = () => {

    const [ pelicula, guardarPelicula ] = useState({ titulo:'', categorias: '' })
    const [ peliculasList, updateCategories ] = useState([])
    const { titulo, categorias } = pelicula;

    // utilizar usedispacth
    const dispatch = useDispatch();

    // mandar llamar al action de peliculasAction
    const agregarNuevaPelicula = (pelicula) => dispatch(crearNuevaPeliculaAction());

    const addCategorias = e => {
        e.preventDefault()
        updateCategories([...peliculasList, pelicula.categorias])
        guardarPelicula({
            ...pelicula,
            categorias : ''
        })
        console.log(peliculasList)
    }

    const onChange = e => {
        guardarPelicula({
            ...pelicula,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        // Validar formulario

        // crear la nueva película
        agregarNuevaPelicula(pelicula)
    }

    return ( 

        <div className="form-container">

            <div className='logo'>
                <Link to={'/'}><img src={logo} className="App-logo" alt="logo" /></Link>
            </div>

            <button
                type= 'button'
                className= 'button-dark'
                onClick=''
            >
                Add a Movie
            </button>
    

            <form
                onSubmit={onSubmit}
            >
            
                <input
                    type='text'
                    className='input-line'
                    placeholder='Add a Title'
                    name='titulo'
                    value={titulo}
                    onChange= {e => onChange(e)}
                />
            
            <div className='categorias-input'>

                    <ul>
                        {peliculasList.map((categoria, index) => (
                            <li key={index}>
                                <span>{categoria}</span>
                            </li>
                        ))}
                    </ul>

                <input
                    type='text'
                    className='input-line'
                    placeholder='Add Categories'
                    name='categorias'
                    value={categorias}
                    onChange= {e => onChange(e)}
                />

                <div className="categorias-container">
                    <div>Horror, Comedia, Suspense, Acción,
                        Romántico, Drama, Ficción, Crimen</div>
                </div>

                <button
                    onClick={e => addCategorias(e)}
                    className= 'button-dark-categories'
                    >
                    Añadir Categorías
                </button>


            </div>

            <button
                type='submit'
                className= 'button-dark-submit'
            >
                Agregar
            </button>
        </form>

        </div>

     );
}
 
export default NuevaPelicula;