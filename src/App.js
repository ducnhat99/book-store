import {
  BrowserRouter,
} from 'react-router-dom';
import Home from './screen/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
