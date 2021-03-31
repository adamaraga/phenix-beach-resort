
import './App.css';

import Error from './pages/Error';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Gallary from '../src/component/Gallary'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './component/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/rooms' component={Rooms} />
          <Route exact path='/rooms/:slug' component={SingleRoom} />
          <Route exact path='/gallary' component={Gallary} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
