import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const {logout} = useLogout();
    const {user} = useAuthContext();

    const handleLogoutAction = () => {
        // logout();

        console.log(user)
    }

    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h3>Mano pratimai</h3>
                </Link>
                <Link to='/newTask'>
                    <h3>Prideti nauja pratima</h3>
                </Link>
               
                <nav id='navUser'>
                    <div>
                        { !user && (
                            <>
                                <Link to='/login'>Prisijungti</Link>
                                <Link to='/signup'>Registracija</Link>
                            </>
                        )}
                        { user && (
                            <a onClick={handleLogoutAction}>Atsijungti</a>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;