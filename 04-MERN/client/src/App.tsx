import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Homes';
import Navbar from './components/Navbar';

const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
              <Route
                path='/'
                element={<Home/>}
              />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
