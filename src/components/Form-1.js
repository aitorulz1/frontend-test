import React, { useState } from 'react';
import logo from '../mba-logo.png';






const Form = () => {

    const [ peliculas, guardarPeliculas ] = useState({
        titulo:'',
        categorias: []
    });

    const { titulo, categorias } = peliculas;

 



    // const addCategorias = e => {
    //     if(e.key === 'Enter' && e.target.value !== '') {
    //         guardarCategorias([...categorias, e.target.value]);
    //         e.target.value = '';
    //     }
    // }



    return ( 
        <div className="form-container">

            <div className="logo">
                <img src={logo} className="App-logo" alt="logo" />
            </div>

            <button
                type= 'button'
                className= 'button-dark'
                onClick=''
            >
                Add a Movie
            </button>

            <form>
                <input
                    type='text'
                    className='input-line'
                    placeholder='Add a Title'
                    name='titulo'
                    value={titulo}
                    onChange={e => guardarPeliculas(e.target.value)}
                />

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
                    placeholder='Press Enter to Add a Genre'
                    onChange={e => guardarPeliculas(e.target.value)}
                    // onKeyUp ={e => addCategorias(e)}
                />
                 <button
                        type= 'submit'
                        className= 'button-dark-submit'
                        onClick=''
                >
                ADD CATEGORIES
                </button>
                </div>

            <button
                type= 'submit'
                className= 'button-dark-submit'
                onClick=''
            >
                SUBMIT
            </button>
            </form>



        </div>
     );
}

 
export default Form;