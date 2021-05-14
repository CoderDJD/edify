import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./contexts/auth";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to="/sgup" />;
      }}
    />
  );
}
