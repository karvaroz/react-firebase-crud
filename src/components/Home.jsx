import { useEffect, useState } from "react";
import { getUsersList } from "../controllers/crudControllers";

import FormUsers from "./FormUsers";
import ListUsers from "./ListUsers";
import Navbar from "./Navbar";

const Home = ({ userInfo }) => {
	const [usersList, setUsersList] = useState([]);

	useEffect(() => {
		getUsersList(setUsersList);
	}, [usersList]);

	return (
		<div className="container-fluid">
			<Navbar userInfo={userInfo} />
			<div className="row">
				<FormUsers />
				<ListUsers usersList={usersList} />
			</div>
		</div>
	);
};

export default Home;
