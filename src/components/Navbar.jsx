import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    OnTools
                </Link>

                <button
                    className={`hamburger-menu ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <Link to="/gst-calculator" onClick={closeMenu}>GST</Link>
                    <Link to="/about" onClick={closeMenu}>About</Link>
                    <Link to="/contact" onClick={closeMenu}>Contact</Link>
                    <Link to="/terms-of-service" onClick={closeMenu}>Terms of Service</Link>
                    <Link to="/privacy-policy" onClick={closeMenu}>Privacy Policy</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;