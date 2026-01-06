import React, { useState } from "react";
import Select from "react-select";
import "font-awesome/css/font-awesome.min.css";
import styles from "./WhatsApp.module.scss";
import { COUNTRIES, WhatsAppSEOData } from "./countries";
import useMeta from "../../../components/useMeta";

const Step = ({ num, title, desc }) => (
    <div className={styles.stepCard}>
        <div className={styles.stepHeader}>
            <span className={styles.stepNum}>{num}</span>
            <h4>{title}</h4>
        </div>
        <div className={styles.stepContent}>
            <p>{desc}</p>
        </div>
    </div>
);

const Benefit = ({ icon, title, desc }) => (
    <div className={styles.benefitItem}>
        <div className={styles.iconCircle}>
            <i className={`fa ${icon}`} />
        </div>
        <h4>{title}</h4>
        <p>{desc}</p>
    </div>
);

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

    const customSelectStyles = {
        control: (base, state) => ({
            ...base,
            padding: "0.2rem",
            borderRadius: "10px",
            fontSize: "1.5rem",
            border: state.isFocused ? "2px solid #10b981" : "2px solid #e2e8f0",
            boxShadow: "none",
            "&:hover": { borderColor: "#10b981" }
        })
    };

    const handleSend = () => {
        const cleanNum = phoneNumber.replace(/\D/g, "");
        if (cleanNum.length >= 7) {
            setError("");
            const url = `https://wa.me/${selectedCode}${cleanNum}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
        } else {
            setError("Please enter a valid phone number.");
        }
    };

    return (
        <div className={styles.container}>
            <header className={styles.hero}>
                <h1>WhatsApp <span className={styles.accent}>Direct</span></h1>
                <p>Start conversations instantly without saving contacts to your phonebook.</p>
            </header>

            <main className={styles.toolCard}>
                <div className={styles.formGrid}>
                    <div className={styles.inputGroupFull}>
                        <label>Message (Optional)</label>
                        <textarea
                            placeholder="Type a pre-filled message..."
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Country</label>
                        <Select
                            options={options}
                            styles={customSelectStyles}
                            defaultValue={options.find(o => o.value === "91")}
                            onChange={opt => opt && setSelectedCode(opt.value)}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            placeholder="9876543210"
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                    </div>
                </div>

                {error && <p className={styles.errorMsg}>{error}</p>}

                <button className={styles.btnSend} onClick={handleSend}>
                    Open Chat <i className="fa fa-whatsapp"></i>
                </button>
            </main>

            <div className={styles.contentSection}>
                <div className={styles.infoCardHeader}>
                    <h3>How to use WhatsApp Direct?</h3>
                    <p>Simple, fast, and no contact saving required.</p>
                </div>
                
                <div className={styles.timeline}>
                    <Step 
                        num="01" 
                        title="Pick Location" 
                        desc="Select the recipient's country code from the list to ensure the message reaches the correct destination." 
                    />
                    <Step 
                        num="02" 
                        title="Enter Number" 
                        desc="Input the phone number without any symbols, spaces, or leading zeros. Just the pure digits." 
                    />
                    <Step 
                        num="03" 
                        title="Hit Send" 
                        desc="Click the button to open the official WhatsApp chat window instantly. Your privacy is maintained." 
                    />
                </div>

                <div className={styles.richContent}>
                    <h2>Why Use WhatsApp Direct Messaging?</h2>
                    <p>In today's fast-paced digital world, saving every temporary contact clutters your contact list and compromises your privacy settings (like status and profile picture visibility). WhatsApp Direct solves this by utilizing the official "Click to Chat" API.</p>
                    
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li><strong>Enhance Privacy:</strong> Prevent strangers from seeing your Status or Profile Photo by avoiding contact saving.</li>
                        <li><strong>Organized Contacts:</strong> Keep your phonebook limited to friends, family, and colleagues.</li>
                        <li><strong>Business Efficiency:</strong> Quickly reach out to leads or customers without administrative friction.</li>
                        <li><strong>Platform Independent:</strong> Works seamlessly on Android, iOS, and WhatsApp Web.</li>
                    </ul>

                    <div className={styles.proTip}>
                        <h4>Pro Tip:</h4>
                        <p>You can pre-fill a message in the text area above. This is great for business owners sending introductory messages to new clients.</p>
                    </div>
                </div>

                <div className={styles.benefitsGrid}>
                    <Benefit icon="fa-user-secret" title="Privacy Guard" desc="No data is stored. Conversations happen directly on the official platform." />
                    <Benefit icon="fa-database" title="No Clutter" desc="Save storage space and keep your contact list meaningful." />
                    <Benefit icon="fa-rocket" title="Instant Load" desc="Zero lag, zero ads. Designed for speed to get you into your chat quickly." />
                </div>
            </div>
        </div>
    );
};

export default WhatsApp;
