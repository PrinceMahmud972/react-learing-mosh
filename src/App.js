import React from 'react';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import Counters from './components/counter/counterMain';
import Vidly from './components/vidly/vidly';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav className="navbar navbar-expand-sm bg-light">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Counter
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/vidly" className="nav-link">
                  Vidly
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={Counters} />
            <Route path="/vidly" exact component={Vidly} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
