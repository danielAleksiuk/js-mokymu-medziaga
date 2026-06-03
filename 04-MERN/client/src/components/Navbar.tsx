import { Link } from "react-router-dom"

const Navbar = () => {
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
                        <Link to='/login'>Prisijungti</Link>
                        <Link to='/signup'>Registracija</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;