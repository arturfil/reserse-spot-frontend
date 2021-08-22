import React from 'react'
import Home from './views/Home'
import Reserve from './views/Reserve'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './views/Error';
import NavBar from './components/NavBar';

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>        
        <Route exact path="/reserve" component={Reserve}/>        
        <Route exact path="**" component={Error}/>        
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
