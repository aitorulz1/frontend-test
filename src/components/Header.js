import React from 'react';
import logo from '../mba.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <nav className="header-container">
            <div className='logo'>
                <Link to={'/'}><img src={logo} className="App-logo" alt="logo" /></Link>
            </div>

            <Link to={'/pelicula/nueva'}>Crear Nueva Película</Link>

        </nav>
     );
}
 
export default Header;