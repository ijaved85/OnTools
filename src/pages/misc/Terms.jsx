import React from "react";
import "./Misc.scss";

const Terms = () => {
    return (
        <div className="terms-wrapper">
            <div className="terms-card">
                <header className="terms-header">
                    <h1>Terms & Conditions</h1>
                    <p>Last Updated: December 2025</p>
                </header>

                <main className="terms-content">
                    <section className="terms-section">
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By using{" "}
                            <span className="highlight-term">OnTools</span>, you
                            agree to follow all rules listed on this page. If
                            you disagree, please stop using our services
                            immediately.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2>2. Use of Services</h2>
                        <p>
                            OnTools offers free tools for general use. You agree
                            not to misuse, damage, or illegally exploit the
                            platform.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2>3. No Professional Advice</h2>
                        <p>
                            All calculators and tools provide approximate
                            results. Always verify important data independently.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2>4. Accuracy</h2>
                        <p>
                            We try our best to keep tools accurate, but we do
                            not guarantee perfection.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2>5. User Responsibilities</h2>
                        <ul>
                            <li>Do not hack or disrupt the site.</li>
                            <li>
                                Do not attempt to copy or reverse engineer our
                                tools.
                            </li>
                            <li>
                                Do not misuse the platform in any harmful way.
                            </li>
                        </ul>
                    </section>

                    <section className="terms-section">
                        <h2>6. Third-Party Links</h2>
                        <p>
                            Some pages may link to external websites. We are not
                            responsible for those sites.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2>7. Changes to These Terms</h2>
                        <p>
                            We may update these terms anytime. Continued use
                            means you agree to the updated rules.
                        </p>
                    </section>

                    <section className="terms-section contact-section">
                        <h2>8. Contact Us</h2>
                        <p>
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

export default Terms;
