import React from 'react';
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
        <Switch>
          <Route exact path='/' component={NuevaPelicula} />
          <Route exact path='/' component={Peliculas} />
          <Route excat path='/peliculas/:categoria' component={Categorias} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
