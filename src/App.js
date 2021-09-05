import store from './store/bookStore'
import { Provider } from 'react-redux'
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import Home from './screen/Home'
import './styles/index.css'
import Admin from './screen/Admin';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/" component={Home}>
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
