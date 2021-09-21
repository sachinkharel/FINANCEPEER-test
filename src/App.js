import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import Home from "./components/Home";
import { useStateValue } from "./components/Context/StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import PrivateRoutes from "./PrivateRoutes";

function App() {
  // const [{}, dispatch] = useStateValue();
  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     console.log("The user is >>>>>", authUser);

  //     if (authUser) {
  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser,
  //       });
  //     } else {
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  // }, []);
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/SignUp" component={SignUp} exact />
          <PrivateRoutes exact path="/Home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
