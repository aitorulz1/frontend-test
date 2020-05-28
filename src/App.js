import React from 'react';
import Header from './components/Header'
import NuevaPelicula from './components/NuevaPelicula';
import Peliculas from './components/Peliculas'
import Categorias from './components/Categorias';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// Redux
import { Provider } from 'react-redux';
import store from './store'



function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path='/pelicula/nueva' component={NuevaPelicula} />
          <Route exact path='/' component={Peliculas} />
          <Route excat path='/peliculas/:categoria' component={Categorias} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
