import "./components.css";
import { NavLink, useLocation } from "react-router-dom";

function Topbar(props) {
  const location = useLocation();

  let link, label;
  if (location.pathname == "/") {
    link = "/currentemployees";
    label = "View Current Employees";
  } else {
    link = "/";
    label = "Home";
  }

  return (
    <>
      <header>
        <h1>HRnet</h1>
        <nav className="main-nav">
          <NavLink to={link} className="nav-link">
            {label}
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Topbar;
