import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Homes';
import Navbar from './components/Navbar';
import TaskForm from './components/TaskForm';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuthContext } from './hooks/useAuthContext';

const App = () => {


  const ProtectedRoute = () => {
     const {user} = useAuthContext();

     console.log(user)
    return user ? <Outlet/> : <Navigate  to='/login' replace/>;
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
              <Route
                path='/login'
                element={<Login/>}
              />
              <Route 
                path='/signup'
                element={<Signup/>}
              />

              <Route element={<ProtectedRoute/>}>
                <Route
                  path='/'
                  element={<Home/>}
                />
                <Route
                  path='/newTask'
                  element={<TaskForm action='new'/>}
                />
              </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
