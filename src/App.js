import store from './store/bookStore'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
} from 'react-router-dom';
import Home from './screen/Home'
import './styles/index.css'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
