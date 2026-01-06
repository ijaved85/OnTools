import React,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = name => {
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

                {menuOpen && (
                    <div className="menu-overlay" onClick={closeMenu}></div>
                )}

                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <Link to="/" onClick={closeMenu}>
                        <i className="fa fa-home"></i> Home
                    </Link>

                    {/* CONVERTERS */}
                    <div className="nav-accordion">
                        <div
                            className="accordion-header"
                            onClick={() => toggleAccordion("conv")}
                        >
                            <span>
                                <i className="fa fa-refresh"></i> Converters
                            </span>
                            <i
                                className={`fa fa-chevron-${
                                    activeAccordion === "conv" ? "up" : "down"
                                }`}
                            ></i>
                        </div>
                        <div
                            className={`accordion-content ${
                                activeAccordion === "conv" ? "show" : ""
                            }`}
                        >
                            <Link to="/currency-converter" onClick={closeMenu}>
                                Currency Converter
                            </Link>
                            <Link to="/text-converter" onClick={closeMenu}>
                                Text Converter
                            </Link>
                            <Link to="/unit-converter" onClick={closeMenu}>
                                Unit Converter
                            </Link>
                        </div>
                    </div>

                    {/* FINANCE */}
                    <div className="nav-accordion">
                        <div
                            className="accordion-header"
                            onClick={() => toggleAccordion("fin")}
                        >
                            <span>
                                <i className="fa fa-university"></i> Finance
                            </span>
                            <i
                                className={`fa fa-chevron-${
                                    activeAccordion === "fin" ? "up" : "down"
                                }`}
                            ></i>
                        </div>
                        <div
                            className={`accordion-content ${
                                activeAccordion === "fin" ? "show" : ""
                            }`}
                        >
                            <Link to="/age-calculator" onClick={closeMenu}>
                                Age Calculator
                            </Link>
                            <Link to="/emi-calculator" onClick={closeMenu}>
                                EMI Calculator
                            </Link>
                            <Link to="/gst-calculator" onClick={closeMenu}>
                                GST Calculator
                            </Link>
                        </div>
                    </div>

                    {/* PDF */}
                    <div className="nav-accordion">
                        <div
                            className="accordion-header"
                            onClick={() => toggleAccordion("pdf")}
                        >
                            <span>
                                <i className="fa fa-file-text"></i> PDF Tools
                            </span>
                            <i
                                className={`fa fa-chevron-${
                                    activeAccordion === "pdf" ? "up" : "down"
                                }`}
                            ></i>
                        </div>
                        <div
                            className={`accordion-content ${
                                activeAccordion === "pdf" ? "show" : ""
                            }`}
                        >
                            <Link to="/pdf-compress" onClick={closeMenu}>
                                PDF Compress
                            </Link>
                            <Link to="/pdf-merge" onClick={closeMenu}>
                                PDF Merge
                            </Link>
                            <Link to="/pdf-split" onClick={closeMenu}>
                                PDF Split
                            </Link>
                        </div>
                    </div>

                    {/* DAILY ESSENTIALS */}
                    <div className="nav-accordion">
                        <div
                            className="accordion-header"
                            onClick={() => toggleAccordion("misc")}
                        >
                            <span>
                                <i className="fa fa-star"></i> Daily Essentials
                            </span>
                            <i
                                className={`fa fa-chevron-${
                                    activeAccordion === "misc" ? "up" : "down"
                                }`}
                            ></i>
                        </div>
                        <div
                            className={`accordion-content ${
                                activeAccordion === "misc" ? "show" : ""
                            }`}
                        >
                            <Link to="/qr-generator" onClick={closeMenu}>
                                QR Generator
                            </Link>
                            <Link to="/whatsapp" onClick={closeMenu}>
                                WhatsApp Direct
                            </Link>
                        </div>
                    </div>

                    <Link to="/about" onClick={closeMenu}>
                        <i className="fa fa-info-circle"></i> About
                    </Link>
                    <Link to="/terms-of-service" onClick={closeMenu}>
                        <i className="fa fa-gavel"></i> Terms Of Service
                    </Link>
                    <Link to="/privacy-policy" onClick={closeMenu}>
                        <i className="fa fa-lock"></i> Privacy Policy
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
