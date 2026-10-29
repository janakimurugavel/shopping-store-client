import { NavLink } from "react-router-dom";
function Menu() {
    return (
        <nav className="menu" aria-label="Main menu">
            <NavLink to="/" end> Home</NavLink>
            <NavLink to="/login">
                Login
            </NavLink>
            <NavLink to="/register">
                Register
            </NavLink>
        </nav>

    );
}

export default Menu;