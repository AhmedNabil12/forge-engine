import "./NavBar.css";
import image from './Forge_Logo.jpg';
import { Link } from "react-router-dom";

function NavBar ()  {
  return (
    <div className="navbar-wrapper">
      <Link to="/home">
      <img src={image} className="logo" />
      </Link>
      <nav>
        <ul className="nav-list">
          <li className="list-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="list-item">
            <Link to="/AboutUs">About</Link>
          </li>
          <li className="list-item">
            <Link to="/Learn">Learn</Link>
          </li>

          <li className="list-item">
            <Link to="/Download">Download</Link>
          </li>

          <li className="list-item">
            <Link to="/LogIn_SignUp">LogIn/SignUp</Link>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};
export default NavBar;