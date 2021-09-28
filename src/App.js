import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideNavBar from "./components/SideNavBar";

// import view components
import ErrorView from "./views/ErrorView";
import HomeView from "./views/HomeView";
import ReserveView from "./views/ReserveView";
import LoginView from "./views/LoginView";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <SideNavBar />
          </div>
          <div className="col-10">
            <Switch>
              <Route exact path="/reserve" component={ReserveView} />
              <Route exact path="/" component={HomeView} />
              <Route exact path="/login" component={LoginView} />
              <Route exact path="**" component={ErrorView} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
