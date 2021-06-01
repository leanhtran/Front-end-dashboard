import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.scss';
import DashboardScreen from './screen/dashboard/DashboardScreen';
import DetailUserScreen from "./screen/detailUser/DetailUserScreen";

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
        <Route exact path="/user:id" render={(props) => <DetailUserScreen id={props.match.params.id.slice(1)}/>}/>
        <Route exact path="/login" component={DashboardScreen} />
      </Switch>
    </Router>
  );
}

export default App;
