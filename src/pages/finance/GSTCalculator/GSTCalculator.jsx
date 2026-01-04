import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import styles from "./gstCalculator.module.scss";

const gstOptions = [3, 5, 12, 18, 28];
const typeOptions = [
    { value: "exclusive", label: "Exclusive" },
    { value: "inclusive", label: "Inclusive" }
];
// Data for GST Types to avoid hardcoding in JSX
const gstTypes = [
    {
        acronym: "CGST",
        name: "Central Goods and Services Tax",
        description:
            "CGST is levied by the Central Government on the intra-state supply of goods and services under the CGST Act. For any sale within the same state, it is charged together with SGST, and the combined GST rate is shared between the Centre and the State.",
        colorClass: styles.cgst
    },
    {
        acronym: "SGST",
        name: "State Goods and Services Tax",
        description:
            "SGST is collected by the State Government on intra-state transactions as per the SGST Act. It is applied along with CGST on the same supply, and both taxes are shared equally to support state revenue.",
        colorClass: styles.sgst
    },
    {
        acronym: "IGST",
        name: "Integrated Goods and Services Tax",
        description:
            "IGST is imposed by the Central Government on inter-state supply of goods and services, including imports, under the IGST Act. The revenue collected is later distributed to the destination state where the goods or services are consumed.",
        colorClass: styles.igst
    },
    {
        acronym: "UTGST",
        name: "Union Territory Goods and Services Tax",
        description:
            "UTGST is levied by Union Territory administrations on intra-UT supplies under the UTGST Act. It works like SGST but is applicable only in Union Territories without legislatures and is charged along with CGST on local transactions.",
        colorClass: styles.utgst
    }
];

function CustomDropdown({ label, value, options, onChange, displayFn }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = event => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = optionValue => {
        onChange(optionValue);
        setIsOpen(false);
    };

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
                            onClick={() => handleSelect(option.value || option)}
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
    const [amount, setAmount] = useState("");
    const [gst, setGst] = useState(5);
    const [type, setType] = useState("exclusive");

    const [basePrice, setBasePrice] = useState(0);
    const [gstAmount, setGstAmount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        document.title = "GST Calculator - OnTools";
    }, []);

    useEffect(() => {
        calculate();
    }, [amount, gst, type]);

    const calculate = () => {
        const inputAmount = Number(amount);
        const gstRate = Number(gst);

        if (isNaN(inputAmount) || inputAmount <= 0) {
            setBasePrice(0);
            setGstAmount(0);
            setTotal(0);
            return;
        }

        let calculatedGstAmount = 0;
        let calculatedBasePrice = 0;
        let calculatedTotal = 0;

        if (type === "exclusive") {
            calculatedBasePrice = inputAmount;
            calculatedGstAmount = (inputAmount * gstRate) / 100;
            calculatedTotal = inputAmount + calculatedGstAmount;
        } else {
            calculatedTotal = inputAmount;
            const denominator = 1 + gstRate / 100;
            calculatedBasePrice = inputAmount / denominator;
            calculatedGstAmount = inputAmount - calculatedBasePrice;
        }

        setBasePrice(calculatedBasePrice.toFixed(2));
        setGstAmount(calculatedGstAmount.toFixed(2));
        setTotal(calculatedTotal.toFixed(2));
    };

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Free GST Calculator to calculate CGST, SGST, IGST easily. Simple GST tool."
                />
            </Helmet>

            <div className={styles.header}>
                <h1>GST CALCULATOR</h1>
                <p>Calculate your GST easily in seconds.</p>
            </div>

            <div className={styles.card}>
                <div className={styles.row}>
                    <div>
                        <label>Amount</label>
                        <input
                            type="number"
                            placeholder="0"
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                        />
                    </div>

                    <CustomDropdown
                        label="GST %"
                        value={gst}
                        options={gstOptions.map(rate => ({
                            value: rate,
                            label: `${rate}%`
                        }))}
                        onChange={setGst}
                        displayFn={val => `${val}%`}
                    />

                    <CustomDropdown
                        label="Tax Type"
                        value={type}
                        options={typeOptions}
                        onChange={setType}
                        displayFn={val =>
                            typeOptions.find(opt => opt.value === val)?.label
                        }
                    />
                </div>

                <div className={styles.results}>
                    <div>
                        <span>₹{basePrice}</span>
                        <p>Base Price</p>
                    </div>

                    <span className={styles.plus}>+</span>

                    <div>
                        <span>₹{gstAmount}</span>
                        <p>GST Amount ({gst}%)</p>
                    </div>

                    <span className={styles.equal}>=</span>

                    <div>
                        <span>₹{total}</span>
                        <p>Total Amount</p>
                    </div>
                </div>
            </div>

            <div className={styles.infoSection}>
                <h2>GST - Goods and Services Tax</h2>
                <p>
                    GST is a unified indirect tax implemented in India from 1
                    July 2017 to replace multiple taxes like VAT, excise duty,
                    and service tax. It is levied on the supply of goods and
                    services and follows the principle of “One Nation, One Tax”.
                    GST is collected at every stage of the supply chain but the
                    tax burden is reduced using Input Tax Credit (ITC).
                    <a href="https://services.gst.gov.in/services/login">
                        File your GST now
                    </a>
                </p>

                <div className={styles.infoCard}>
                    <h3>How can you calculate GST with this tool?</h3>
                    <p>
                        With the free GST calculator, you can calculate the tax
                        amount in three simple steps.
                    </p>

                    <ol>
                        <li>Enter the price in the Amount field.</li>
                        <li>Enter the GST percentage.</li>
                        <li>Select Inclusive or Exclusive tax type.</li>
                    </ol>

                    <p>Note:</p>
                    <p className={styles.noteParagraph}>
                        If the price is inclusive of tax, the calculator shows
                        the original price by subtracting GST.
                    </p>

                    <p className={styles.noteParagraph}>
                        If the price is exclusive, the calculator adds GST to
                        show the final price.
                    </p>
                </div>

                <h2>There are four types of GST in India.</h2>

                {gstTypes.map(typeData => (
                    <div key={typeData.acronym} className={styles.gstTypeBox}>
                        <h3>
                            {/* Hardcoded style fixed by using a class from SCSS */}
                            <span className={styles.gstAcronym}>
                                {typeData.acronym}
                            </span>{" "}
                            - {typeData.name}
                        </h3>
                        <p>{typeData.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default GSTCalculator;
