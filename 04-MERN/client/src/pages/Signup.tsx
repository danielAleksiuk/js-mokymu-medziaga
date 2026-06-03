import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const Signup = () => {
    const [user, setUser] = useState({
        userName: '',
        password: ''
    });
    const {data, loading, makeApiCall} = useFetch();
    

    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user)

        makeApiCall(
            'http://localhost:4000/api/user/signup',
            'POST',
            user
        );
    };



    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <h3>Naujo vartotojo registracija:</h3>
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
            <button>sukurk nauja vartotoja</button>
        </form>
    )
}

export default Signup;