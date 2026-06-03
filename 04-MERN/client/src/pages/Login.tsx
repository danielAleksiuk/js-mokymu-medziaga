import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";


// 123A!aaaaaaaaaa
// newPvzExample
const Login = () => {
   const [user, setUser] = useState({
          userName: '',
          password: ''
    });
    const {data, loading, makeApiCall} = useFetch();
    const navigate = useNavigate();

    useEffect(() => {
        if (data && data.token) {
            localStorage.setItem('token', data.token);
            navigate('/');
            
        }
    }, [data])

    const handleSubmit = (event) => {
        event.preventDefault();


        makeApiCall(
            'http://localhost:4000/api/user/login',
            'POST',
            user
        );
    };
  
      return (
          <form className="login-form" onSubmit={handleSubmit}>
              <h3>Prisijungimas:</h3>
              <label htmlFor="userName">slapyvardis:</label>
              <input 
                  type="text" id="userName"
                  value={user.userName}
                  onChange={(e) => setUser(prev => ({
                      ...prev,
                      userName: e.target.value
                  }))}
              />
              <hr/>
              <label htmlFor="password">slaptazodis:</label>
              <input
                  type="password" id="password"
                  value={user.password}
                  onChange={(e) => setUser(prev => ({
                      ...prev,
                      password: e.target.value
                  }))}
              /> 
              <hr/>
              <button>prisijungti</button>
          </form>
      )
}

export default Login;