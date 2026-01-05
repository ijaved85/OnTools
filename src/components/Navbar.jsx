import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (name) => {
        setActiveAccordion(activeAccordion === name ? null : name);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        setActiveAccordion(null);
    };

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src="/ontools.png" alt="OnTools Logo" />
                </Link>

                <button
                    className={`hamburger-menu ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <Link to="/" onClick={closeMenu}>Home</Link>

                    {/* CONVERTERS */}
                    <div className="nav-accordion">
                        <div className="accordion-header" onClick={() => toggleAccordion('conv')}>
                            Converters <i className={`fa fa-chevron-${activeAccordion === 'conv' ? 'up' : 'down'}`}></i>
                        </div>
                        <div className={`accordion-content ${activeAccordion === 'conv' ? 'show' : ''}`}>
                            <Link to="/currency-converter" onClick={closeMenu}>Currency Converter</Link>
                            <Link to="/text-converter" onClick={closeMenu}>Text Converter</Link>
                            <Link to="/unit-converter" onClick={closeMenu}>Unit Converter</Link>
                        </div>
                    </div>

                    {/* FINANCE */}
                    <div className="nav-accordion">
                        <div className="accordion-header" onClick={() => toggleAccordion('fin')}>
                            Finance <i className={`fa fa-chevron-${activeAccordion === 'fin' ? 'up' : 'down'}`}></i>
                        </div>
                        <div className={`accordion-content ${activeAccordion === 'fin' ? 'show' : ''}`}>
                            <Link to="/age-calculator" onClick={closeMenu}>Age Calculator</Link>
                            <Link to="/emi-calculator" onClick={closeMenu}>EMI Calculator</Link>
                            <Link to="/gst-calculator" onClick={closeMenu}>GST Calculator</Link>
                        </div>
                    </div>

                    {/* PDF */}
                    <div className="nav-accordion">
                        <div className="accordion-header" onClick={() => toggleAccordion('pdf')}>
                            PDF Tools <i className={`fa fa-chevron-${activeAccordion === 'pdf' ? 'up' : 'down'}`}></i>
                        </div>
                        <div className={`accordion-content ${activeAccordion === 'pdf' ? 'show' : ''}`}>
                            <Link to="/pdf-compress" onClick={closeMenu}>PDF Compress</Link>
                            <Link to="/pdf-merge" onClick={closeMenu}>PDF Merge</Link>
                            <Link to="/pdf-split" onClick={closeMenu}>PDF Split</Link>
                        </div>
                    </div>

                    {/* MISC */}
                    <div className="nav-accordion">
                        <div className="accordion-header" onClick={() => toggleAccordion('misc')}>
                            Others <i className={`fa fa-chevron-${activeAccordion === 'misc' ? 'up' : 'down'}`}></i>
                        </div>
                        <div className={`accordion-content ${activeAccordion === 'misc' ? 'show' : ''}`}>
                            <Link to="/qr-generator" onClick={closeMenu}>QR Generator</Link>
                            <Link to="/whatsapp" onClick={closeMenu}>WhatsApp Direct</Link>
                        </div>
                    </div>

                   {/*} <Link to="/pharmacy" onClick={closeMenu}>Pharmacy</Link>*/}
                    <Link to="/about" onClick={closeMenu}>About</Link>
                    <Link to="/terms-of-service" onClick={closeMenu}>Terms Of Service</Link>
                    <Link to="/privacy-polic" onClick={closeMenu}>Privacy Policy</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
