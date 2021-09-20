import { useEffect } from 'react'
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import Home from './screen/Home'
import './styles/index.css'
import Admin from './screen/Admin';
import ROUTE from './constants/Router'
import ScrollToTop from './components/common/card/ScrollToTop';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const isAdmin = useSelector(state => state.book.isAdmin)
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        {isAdmin === true ? <Switch>
          <Route path={ROUTE.ADMIN} component={Admin} />
          <Route path={ROUTE.USER} component={Home}>
          </Route>
        </Switch> : <Switch>
          <Route path={ROUTE.USER} component={Home}>
          </Route>
        </Switch>}
        {/* <Switch>
          <Route path={ROUTE.ADMIN} component={Admin} />
          <Route path={ROUTE.USER} component={Home}>
          </Route>
        </Switch> */}
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
