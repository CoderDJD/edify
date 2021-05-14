import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Dash from "./dash";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";
import PrivateRoute from "./PrivateRoute";
export default function App() {
  return (
    <div className="h-screen w-screen">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dash} />
            <Route path="/sgin" component={SignIn} />
            <Route path="/sgup" component={SignUp} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}
