import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          OnTools
        </Link>

        <div className="nav-links">
          <Link to="/gst-calculator">GST</Link>
          <Link to="/currency-converter">Convert</Link>
          <Link to="/pdf-merge">PDF Tools</Link>
          <Link to="/dose-calculator">Pharmacy</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;