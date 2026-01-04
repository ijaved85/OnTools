import React, { useState } from "react";
import Select from "react-select";
import "font-awesome/css/font-awesome.min.css";
import "./WhatsApp.scss";

import { COUNTRIES, WhatsAppSEOData } from "./countries";
import useMeta from "./useMeta";

const WhatsApp = () => {
    useMeta(WhatsAppSEOData);

    const [selectedCode, setSelectedCode] = useState("91");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const options = COUNTRIES.map(c => ({
        value: c.dial_code,
        label: `${c.name} (+${c.dial_code})`
    }));

    const customStyles = {
        control: (base, state) => ({
            ...base,
            padding: "0.4rem",
            borderRadius: "1rem",
            fontSize: "1.8rem",
            border: state.isFocused ? "1px solid #1e70e3" : "1px solid #e0e0e0",
            boxShadow: state.isFocused
                ? "0 0 0 3px rgba(30,112,227,0.1)"
                : "none"
        })
    };

    const handleSend = () => {
        const cleanNum = phoneNumber.replace(/\D/g, "");
        if (cleanNum.length >= 7) {
            setError("");
            const url = `https://wa.me/${selectedCode}${cleanNum}?text=${encodeURIComponent(
                message
            )}`;
            window.location.href = url; // mobile-safe
        } else {
            setError("Please enter a valid phone number.");
        }
    };

    return (
        <div className="whatsapp-page">
            <header className="header">
                <h1>WhatsApp Direct</h1>
                <p>
                    Start a conversation instantly.{" "}
                    <strong>No contact saving required.</strong>
                </p>
            </header>

            <main className="card">
                <section className="form-container">
                    <div className="row">
                        <div>
                            <label htmlFor="message">Message (Optional)</label>
                            <textarea
                                id="message"
                                placeholder="Type your message here..."
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row" style={{ marginTop: "2rem" }}>
                        <div>
                            <label>Country Code</label>
                            <Select
                                options={options}
                                styles={customStyles}
                                defaultValue={options.find(
                                    o => o.value === "91"
                                )}
                                onChange={opt =>
                                    opt && setSelectedCode(opt.value)
                                }
                                placeholder="Search country..."
                            />
                        </div>

                        <div>
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="9876543210"
                                maxLength="15"
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)}
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="error-msg" role="alert">
                            <i className="fa fa-exclamation-circle"></i> {error}
                        </div>
                    )}

                    <button className="btn-send" onClick={handleSend}>
                        Open WhatsApp Chat <i className="fa fa-whatsapp"></i>
                    </button>
                </section>
            </main>

            <section className="infoSection">
                <header className="section-title">
                    <h2>Mastering Instant Messaging</h2>
                    <p>
                        Your ultimate shortcut to reaching anyone on WhatsApp.
                    </p>
                </header>

                <div className="timeline-container">
  <Step
    num="01"
    title="Pick Location"
    desc="Choose the correct country code from the list to ensure your message is delivered to the right WhatsApp number."
  />

  <Step
    num="02"
    title="Enter Number"
    desc="Enter the phone number without spaces or symbols. There is no need to save the contact on your device."
  />

  <Step
    num="03"
    title="Hit Send"
    desc="Click send and WhatsApp will open instantly in a new tab with the chat ready to go."
  />
</div>

                <div className="benefits-grid">
                    <Benefit
                        icon="fa-user-secret"
                        title="Privacy Guard"
                        desc="Your privacy comes first. We do not store, track, or log any phone numbers or messages. Everything happens locally on your device."
                    />

                    <Benefit
                        icon="fa-database"
                        title="Clean Storage"
                        desc="No need to save temporary or unwanted contacts anymore. Your phonebook stays clean and clutter-free."
                    />

                    <Benefit
                        icon="fa-globe"
                        title="Global Reach"
                        desc="Send WhatsApp messages to any number worldwide. Works across 200+ countries with proper country codes."
                    />

                    <Benefit
                        icon="fa-rocket"
                        title="Light Speed"
                        desc="Instant message redirection with zero ads, zero delays, and a lightweight experience optimized for speed."
                    />
                </div>
            </section>
        </div>
    );
};

const Step = ({ num, title, desc }) => (
    <article className="step-card">
        <div className="step-num">{num}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
    </article>
);

const Benefit = ({ icon, title, desc }) => (
    <article className="benefit-item">
        <div className="icon-circle">
            <i className={`fa ${icon}`} />
        </div>
        <h4>{title}</h4>
        <p>{desc}</p>
    </article>
);

export default WhatsApp;
