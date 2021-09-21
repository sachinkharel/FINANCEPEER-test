import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import Home from "./components/Home";
import { useStateValue } from "./components/Context/StateProvider";

import PrivateRoutes from "./PrivateRoutes";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/SignUp" component={SignUp} exact />
          <PrivateRoutes path="/Home" component={Home} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
