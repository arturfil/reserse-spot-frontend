import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorView from './views/ErrorView';
import NavBar from './components/NavBar';
import HomeView from './views/HomeView';
import ReserveView from './views/ReserveView'

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={HomeView}/>        
        <Route exact path="/reserve" component={ReserveView}/>        
        <Route exact path="**" component={ErrorView}/>        
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
