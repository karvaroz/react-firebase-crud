import { Navigate } from "react-router-dom";

const PublicRoute = ({ isAuth, children }) => {
	return !isAuth ? children : <Navigate to="/home" />;
};

export default PublicRoute;
