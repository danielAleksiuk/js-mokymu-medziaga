import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Homes';
import Navbar from './components/Navbar';
import TaskForm from './components/TaskForm';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuthContext } from './hooks/useAuthContext';

const App = () => {
  const {user} = useAuthContext();

  const protectedRoute = () => {
    return user ? <Outlet/>
      : '/login';
  }

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
              <Route
                path='/login'
                element={<Login/>}
              />
              <Route 
                path='/signup'
                element={<Signup/>}
              />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
