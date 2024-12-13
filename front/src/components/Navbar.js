import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
            <div className="container">
                <Link className="navbar-brand" to="/">便當店</Link>
                <div>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/add">Add User</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/delet">Delete User</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">View Users</Link>
                    </li>
                  </ul>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;