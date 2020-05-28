import React, { Fragment } from 'react';

const Peliculas = () => {
    return ( 
        <Fragment>
            <h2 className="text-center my-5">
                Peliculas Favoritas
            </h2>


            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope='col'>Título</th>
                        <th scope='col'>Categorías</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {/* { productos.length === 0 ? 'No hay productos' : (
                        productos.map(producto => (
                            <Producto 
                                key={producto.id}
                                producto={producto}
                            />
                        ))
                    )}  */}
                </tbody>
            </table>
        </Fragment>
     );
}
 
export default Peliculas;