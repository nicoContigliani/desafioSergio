import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import generateStore from '../src/features/Redux/Store';
import Headers from './components/Headers';
import Tabla from './components/Tables'
import Main from './components/Main'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  const store = generateStore();

  return (
    <div className="App">
      <Provider store={store}>
      <div >
        <Router>
          <Headers />
          <Switch>
            <Route exact path="/" component={Tabla} />
            <Route path="/formulario" component={Main} />
          </Switch>
        </Router>
      </div>
      </Provider>
    </div>
  );
}

export default App;
