import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import  HomePage  from './pages/pageHome';

import './App.css';
import ButtonAppBar from './components/navbar';


const App = () => (
  <div>
    <ButtonAppBar/>
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route  path="/home" component={HomePage} />
  </Switch>
  </div>
);

export default App;
