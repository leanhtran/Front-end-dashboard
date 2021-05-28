import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import DashboardScreen from './screen/dashboard/DashboardScreen';
import './App.scss';

function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(true);

  return (
    <Router>
      <Switch>
        <Route 
          exact 
          path="/" 
          render={() => {
            return (isUserAuthenticated
              ? <Redirect to="/dashboard" />
              : <Redirect to="/login" />)}}
        />
        <Route exact path="/dashboard" component={DashboardScreen} />
        <Route exact path="/login" component={DashboardScreen} />
      </Switch>
    </Router>
  );
}

export default App;
