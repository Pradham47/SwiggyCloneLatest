import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";
import Profile from "./Profile";
const About = () => {
  return (
    <div className="about">
      <Navbar />
      <Link to={"profile"}>
        <button>Profile</button>
      </Link>
      <h1>THis is about page</h1>
      <Outlet/>
    </div>
  );
};
export default About;
