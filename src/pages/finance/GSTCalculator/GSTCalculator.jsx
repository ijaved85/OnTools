import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import useMeta from "../../../components/useMeta";
import styles from "./gstCalculator.module.scss";

const gstOptions = [3, 5, 12, 18, 28];
const typeOptions = [
    { value: "exclusive", label: "Exclusive" },
    { value: "inclusive", label: "Inclusive" }
];

const gstTypes = [
    {
        acronym: "CGST",
        name: "Central Goods and Services Tax",
        description:
            "CGST is levied by the Central Government on the intra-state supply of goods and services under the CGST Act. For any sale within the same state, it is charged together with SGST, and the combined GST rate is shared between the Centre and the State."
    },
    {
        acronym: "SGST",
        name: "State Goods and Services Tax",
        description:
            "SGST is collected by the State Government on intra-state transactions as per the SGST Act. It is applied along with CGST on the same supply, and both taxes are shared equally to support state revenue."
    },
    {
        acronym: "IGST",
        name: "Integrated Goods and Services Tax",
        description:
            "IGST is imposed by the Central Government on inter-state supply of goods and services, including imports, under the IGST Act. The revenue collected is later distributed to the destination state where the goods or services are consumed."
    },
    {
        acronym: "UTGST",
        name: "Union Territory Goods and Services Tax",
        description:
            "UTGST is levied by Union Territory administrations on intra-UT supplies under the UTGST Act. It works like SGST but is applicable only in Union Territories without legislatures and is charged along with CGST on local transactions."
    }
];

const Step = ({ num, title, desc }) => (
    <div className={styles.stepCard}>
        <span className={styles.stepNum}>{num}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
);

function CustomDropdown({ label, value, options, onChange, displayFn }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = event => {
            if (
                dropdownRef.current &&
                dropdownRef.current.contains(event.target) === false
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={styles.customDropdownContainer} ref={dropdownRef}>
            <label>{label}</label>
            <div
                className={styles.dropdownHeader}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{displayFn ? displayFn(value) : value}</span>
                <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && (
                <ul className={styles.dropdownList}>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={styles.dropdownItem}
                            onClick={() => {
                                onChange(option.value || option);
                                setIsOpen(false);
                            }}
                        >
                            {option.label || `${option}%`}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function GSTCalculator() {
    useMeta({
        title: "GST Calculator | Fast & Accurate Tax Tool Online",
        description:
            "Calculate CGST, SGST, and IGST for 5%, 12%, 18%, and 28% slabs. Professional tool for inclusive and exclusive GST calculations.",
        keywords:
            "gst calculator, india tax tool, cgst sgst calculator, inclusive gst, tax slab calculator",
        canonicalUrl: "https://ontools.smokescreen.co.in/gst-calculator"
    });

    const [amount, setAmount] = useState("");
    const [gst, setGst] = useState(18);
    const [type, setType] = useState("exclusive");
    const [results, setResults] = useState({ base: 0, tax: 0, total: 0 });

    useEffect(() => {
        const amt = Number(amount) || 0;
        const rate = Number(gst);
        let base, tax, total;

        if (type === "exclusive") {
            base = amt;
            tax = (amt * rate) / 100;
            total = amt + tax;
        } else {
            total = amt;
            base = amt / (1 + rate / 100);
            tax = amt - base;
        }
        setResults({
            base: base.toLocaleString("en-IN"),
            tax: tax.toLocaleString("en-IN"),
            total: total.toLocaleString("en-IN")
        });
    }, [amount, gst, type]);

    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1>GST CALCULATOR</h1>
                <p>Fast, Accurate, and Professional Tax Estimations.</p>
            </div>

            <div className={styles.toolWrapper}>
                <div className={styles.inputCard}>
                    <div className={styles.inputGroup}>
                        <label>Amount (₹)</label>
                        <input
                            type="number"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                        />
                    </div>
                    <div className={styles.dropdowns}>
                        <CustomDropdown
                            label="GST %"
                            value={gst}
                            options={gstOptions}
                            onChange={setGst}
                            displayFn={val => `${val}%`}
                        />
                        <CustomDropdown
                            label="Tax Type"
                            value={type}
                            options={typeOptions}
                            onChange={setType}
                            displayFn={val =>
                                typeOptions.find(o => o.value === val)?.label
                            }
                        />
                    </div>
                </div>

                <div className={styles.displayCard}>
                    <div className={styles.mainResult}>
                        <p>Total Amount</p>
                        <h2>₹{results.total}</h2>
                    </div>
                    <div className={styles.splitResults}>
                        <div className={styles.splitBox}>
                            <span>Base Price</span>
                            <strong>₹{results.base}</strong>
                        </div>
                        <div className={styles.splitBox}>
                            <span>GST Amount ({gst}%)</span>
                            <strong>₹{results.tax}</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.infoSection}>
                <h2>GST - Goods and Services Tax</h2>
                <p>
                    GST is a unified indirect tax implemented in India from 1
                    July 2017 to replace multiple taxes like VAT, excise duty,
                    and service tax. It follows the principle of “One Nation,
                    One Tax”.{" "}
                    <a
                        href="https://services.gst.gov.in/services/login"
                        target="_blank"
                        rel="noreferrer"
                        
                    >
                        File your GST now
                    </a>
                </p>

                <div className={styles.guideCard}>
                    <h3>How can you calculate GST with this tool?</h3>
                    <div className={styles.timeline}>
                        <Step
                            num="01"
                            title="Enter Amount"
                            desc="Enter the price in the Amount field. The calculator works instantly."
                        />
                        <Step
                            num="02"
                            title="Pick GST Slab"
                            desc="Choose the correct GST percentage from the list."
                        />
                        <Step
                            num="03"
                            title="Select Type"
                            desc="Choose between Inclusive or Exclusive."
                        />
                    </div>
                    <div className={styles.notes}>
                        <p className={styles.note}>
                            Inclusive: original price = Total Amount / (1 + GST
                            rate / 100)
                        </p>
                        <p className={styles.note}>
                            Exclusive: Total Amount = Price + (Price * GST rate
                            / 100)
                        </p>
                    </div>
                </div>

                <h2>The Four Types of GST in India</h2>
                <div className={styles.gstGrid}>
                    {gstTypes.map(t => (
                        <div key={t.acronym} className={styles.typeBox}>
                            <h3>
                                <span className={styles.accent}>
                                    {t.acronym}
                                </span>{" "}
                                - {t.name}
                            </h3>
                            <p>{t.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GSTCalculator;
