import React from "react";
import "./Home.scss";

const About = () => {
    return (
        <section className="about-wrapper">
            <div className="about-hero">
                <h1>
                    About <span>OnTools</span>
                </h1>
                <p>
                    OnTools is your all-in-one platform for smart, fast, and 
                    reliable online utilities—built to simplify your daily digital life.
                </p>
            </div>

            <div className="about-content">
                <p>
                    We created <strong>OnTools</strong> with a simple idea:  
                    everyday tasks shouldn't be complicated. Whether you need 
                    to calculate GST, convert a file, generate a QR code, or 
                    check your age—OnTools gives you quick solutions without ads, 
                    without clutter, and completely free.
                </p>

                <p>
                    Our platform is continuously evolving. We are adding new tools,
                    improving performance, and making the experience smoother 
                    across desktop and mobile devices. Your convenience is the 
                    core of everything we build.
                </p>
            </div>

            <div className="features-container">
                <div className="feature-item">
                    <h2>🎯 Our Vision</h2>
                    <p>
                        To build the largest collection of simple, smart, and 
                        efficient tools that anyone can use, anytime—without confusion.
                    </p>
                </div>

                <div className="feature-item">
                    <h2>🛠 What We Provide</h2>
                    <ul className="tools-list">
                        <li><strong>Financial Tools:</strong> GST Calculator, EMI Calculator</li>
                        <li><strong>Date Utilities:</strong> Age Calculator, Day Counter</li>
                        <li><strong>Media & Document Tools:</strong> Image Tools, PDF Tools</li>
                        <li><strong>Miscellaneous:</strong> QR Generator, Password Maker</li>
                    </ul>
                </div>

                <div className="feature-item full">
                    <h2>🚀 Growing Every Day</h2>
                    <p>
                        New features, new tools, new ideas—OnTools keeps expanding.  
                        If you have a suggestion, your idea might become a tool tomorrow!
                    </p>
                </div>
            </div>

            <footer className="about-footer">
                <p>
                    Thank you for choosing <strong>OnTools</strong>.  
                    We’re here to make your tasks easier—one tool at a time.
                </p>
            </footer>
        </section>
    );
};

export default About;