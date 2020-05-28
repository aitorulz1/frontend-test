import React, { Fragment, useState } from 'react';

const NuevaPelicula = () => {

    const [ pelicula, guardarPelicula ] = useState({
        titulo:'',
        categorias: []
    })

    const { titulo, categorias } = pelicula;

    const addCategorias = e => {
        guardarPelicula([...pelicula, e.target.value])
    }

    const onChange = e => {
        guardarPelicula({
            ...pelicula,
            [e.target.name] : [e.target.value]
        })
    }

    return ( 
        <Fragment>
        <h1>Agregar Nueva película </h1>

        <form>
            <label>Titulo</label>
                <input
                    type='text'
                    className='input-line'
                    placeholder='Add a Title'
                    name='titulo'
                    value={titulo}
                    onChange= {e => onChange(e)}
                />
            <label>Categorías</label>
            <div className='categorias-input'>
                    <ul>
                        {categorias.map((categoria, index) => (
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
                <button
                    type='submit'
                    onClick={e => addCategorias(e)}
                    >
                        añadir categoría
                    </button>
            </div>

            <button
                type='submit'
                className=''
            >
                Agregar
            </button>
        </form>

        </Fragment>
     );
}
 
export default NuevaPelicula;