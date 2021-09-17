import { useEffect } from 'react'
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import Home from './screen/Home'
import './styles/index.css'
import Admin from './screen/Admin';
import ROUTE from './constants/Router'
import ScrollToTop from './components/common/card/ScrollToTop';
import { USERLOGIN } from './constants/UserLogin'


function App() {
  // localStorage.setItem(USERLOGIN, 0)

  const isUserLogin = JSON.parse(localStorage.getItem(USERLOGIN))
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path={ROUTE.ADMIN} component={Admin} />
          <Route path={ROUTE.USER} component={Home}>
          </Route>
        </Switch>
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
