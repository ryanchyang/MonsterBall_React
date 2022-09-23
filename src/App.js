import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Market from './pages/Market';
import Invite from './pages/Invite';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/market">
          <Market />
        </Route>
        <Route path="/invite">
          <Invite />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
