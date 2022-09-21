import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Market from './pages/Market';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/market" exact>
          <Market />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
