import FormUsers from "./FormUsers";
import ListUsers from "./ListUsers";
import Navbar from "./Navbar";

const Home = ({ userInfo }) => {
	return (
		<div className="container-fluid">
      <Navbar userInfo={userInfo} />
      <div className="row">
        <FormUsers />
        <ListUsers />
      </div>
		</div>
	);
};

export default Home;
