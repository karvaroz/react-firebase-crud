import { NavLink } from "react-router-dom";
import { logoutRequest } from "../controllers/authControllers";

const Navbar = ({ userInfo }) => {
    const handleLogout = () => {
        logoutRequest()
    }
    
	return (
		<nav className="navbar sticky-top">
			<div className="container-fluid">
				<NavLink
					className="navbar-brand d-flex align-items-baseline"
					to="/">
					<ion-icon
						name="rocket-sharp"
						style={{ color: "lightblue" }}></ion-icon>
					<p className="text-info mx-2"> React + Firebase CRUD App</p>
				</NavLink>
				<NavLink to="/">
					<p className="text-white">{userInfo}</p>
                </NavLink>
                <button className="btn btn-danger" onClick={handleLogout}>
                    Cerrar Sesión
                </button>
			</div>
		</nav>
	);
};

export default Navbar;
