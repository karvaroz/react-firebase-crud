import Navbar from "./Navbar";

const Home = ({ userInfo }) => {
	return (
		<div className="container-fluid">
			<Navbar userInfo={userInfo} />
		</div>
	);
};

export default Home;
