import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import Home from './screen/Home'
import './styles/index.css'
import Admin from './screen/Admin';
import ROUTE from './constants/Router'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={ROUTE.ADMIN} component={Admin} />
          <Route path={ROUTE.USER} component={Home}>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
