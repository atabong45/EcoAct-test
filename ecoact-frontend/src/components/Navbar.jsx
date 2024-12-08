import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard-industrie">Dashboard Industrie</Link>
        </li>
        <li>
          <Link to="/defis-industrie">Défis Industrie</Link>
        </li>
        <li>
          <Link to="/dashboard-maison">Dashboard Maison</Link>
        </li>
        <li>
          <Link to="/defis-maison">Défis Maison</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
