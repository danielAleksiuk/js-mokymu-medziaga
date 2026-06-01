import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Homes';
import Navbar from './components/Navbar';
import TaskForm from './components/TaskForm';

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
              <Route
                path='/newTask'
                element={<TaskForm action='new'/>}
              />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
