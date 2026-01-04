import React from "react";
import "./Misc.scss";

const Privacy = () => {
    return (
        <div className="privacy-wrapper">
            <div className="privacy-card">
                <header className="privacy-header">
                    <h1>Privacy Policy</h1>
                    <p>
                        This policy explains how OnTools handles your
                        information.
                    </p>
                    <p className="update-note">Last Updated: December 2025</p>
                </header>

                <main className="privacy-content">
                    <section className="privacy-section">
                        <h2>1. Information We Collect</h2>
                        <p>
                            As a provider of free, calculator-based tools, we
                            collect very limited personal data.
                        </p>
                        <ul>
                            <li>
                                <span className="list-heading">
                                    Non-Personal Data:
                                </span>{" "}
                                We automatically collect standard usage data
                                (like your IP address, browser type, pages
                                visited, and time spent) via third-party
                                services like Google Analytics. This data is
                                anonymized and cannot identify you personally.
                            </li>
                            <li>
                                <span className="list-heading">
                                    Input Data:
                                </span>{" "}
                                Any data you input into our tools (e.g., numbers
                                for a calculation) is processed in your browser
                                and is not stored on our servers.
                            </li>
                        </ul>
                    </section>

                    <section className="privacy-section">
                        <h2>2. How We Use the Information</h2>
                        <p>
                            We only use collected non-personal data to
                            understand how our tools are used and to improve our
                            service performance and user experience.
                        </p>
                    </section>

                    <section className="privacy-section">
                        <h2>3. Cookies and Tracking Technologies</h2>
                        <p>
                            We use standard browser cookies to operate and
                            analyze the performance of our website. These
                            cookies may be set by us or by third-party services
                            (like Google Analytics) for tracking and analytical
                            purposes.
                        </p>
                    </section>

                    <section className="privacy-section">
                        <h2>4. Third-Party Links</h2>
                        <p>
                            Our service may contain links to other websites that
                            are not operated by us. If you click on a
                            third-party link, you will be directed to that third
                            party's site. We strongly advise you to review the
                            Privacy Policy of every site you visit.
                        </p>
                    </section>

                    <section className="privacy-section">
                        <h2>5. Children's Privacy</h2>
                        <p>
                            Our service is not directed to anyone under the age
                            of 13. We do not knowingly collect personally
                            identifiable information from children under 13.
                        </p>
                    </section>

                    <section className="privacy-section contact-section">
                        <h2>6. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy,
                            please contact us:
                            <br />
                            Email:{" "}
                            <span className="contact-email">
                                contact@ontools.online
                            </span>
                        </p>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Privacy;
