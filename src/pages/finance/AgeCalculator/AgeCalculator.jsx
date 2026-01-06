import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useMeta from "../../../components/useMeta";
import styles from "./ageCalculator.module.scss";

const Step = ({ num, title, desc }) => (
    <div className={styles.stepCard}>
        <span className={styles.stepNum}>{num}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
);

const AgeCalculator = () => {
  useMeta({
  title: "Age Calculator | Exact Age & Date Difference Online Tool",
  description:
    "Calculate your exact age and the difference between two dates instantly. Includes total days lived, zodiac sign, and precise chronological insights.",
  keywords:
    "age calculator, exact age calculator, date difference calculator, chronological age, zodiac age calculator",
  ogTitle: "Exact Age & Date Difference Calculator",
  ogDescription:
    "Instantly calculate exact age, date differences, total days lived, and zodiac sign with a clean, fast online tool.",
  canonicalUrl: "https://ontools.smokescreen.co.in/age-calculator"
});

    const [startDate, setStartDate] = useState(new Date(2000, 0, 1));
    const [endDate, setEndDate] = useState(new Date());
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (startDate && endDate) {
            calculate();
        }
    }, [startDate, endDate]);

    const calculate = () => {
        let years = endDate.getFullYear() - startDate.getFullYear();
        let months = endDate.getMonth() - startDate.getMonth();
        let days = endDate.getDate() - startDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(
                endDate.getFullYear(),
                endDate.getMonth(),
                0
            ).getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        const totalDays = Math.floor(
            Math.abs(endDate - startDate) / (1000 * 60 * 60 * 24)
        );
        setResult({ years, months, days, totalDays });
    };

    return (
        <div className={styles.container}>
            <Helmet>
                <link rel="icon" href="/favicon.ico" />
            </Helmet>

            <div className={styles.hero}>
                <h1>Date Difference</h1>
                <p>Precise chronological age and duration insights.</p>
            </div>

            <div className={styles.toolCard}>
                <div className={styles.calendarGrid}>
                    <div className={styles.inputBox}>
                        <label>Start Date (Birth Date)</label>
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            dateFormat="dd/MM/yyyy"
                            showYearDropdown
                            scrollableYearDropdown
                            yearDropdownItemNumber={100}
                            className={styles.customDateInput}
                        />
                    </div>
                    <div className={styles.inputBox}>
                        <label>End Date (Target Date)</label>
                        <DatePicker
                            selected={endDate}
                            onChange={date => setEndDate(date)}
                            dateFormat="dd/MM/yyyy"
                            showYearDropdown
                            scrollableYearDropdown
                            className={styles.customDateInput}
                        />
                    </div>
                </div>

                {result && (
                    <div className={styles.resultDashboard}>
                        <div className={styles.mainCircle}>
                            <div className={styles.bigNum}>{result.years}</div>
                            <div className={styles.bigLabel}>Years Old</div>
                        </div>
                        <div className={styles.minorStats}>
                            <div className={styles.statItem}>
                                <strong>{result.months}</strong>
                                <span>Months</span>
                            </div>
                            <div className={styles.statItem}>
                                <strong>{result.days}</strong>
                                <span>Days</span>
                            </div>
                            <div className={styles.statItem}>
                                <strong>
                                    {result.totalDays.toLocaleString()}
                                </strong>
                                <span>Total Days</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={styles.contentWrap}>
                <section className={styles.guide}>
                    <h2>How to Use This Tool</h2>
                    <div className={styles.timeline}>
                        <Step
                            num="01"
                            title="Select Starting Date"
                            desc="Use the premium calendar to pick your birth date. You can quickly jump through years using the dropdown."
                        />
                        <Step
                            num="02"
                            title="Define End Point"
                            desc="Choose the date up to which you want to calculate. Today is selected by default."
                        />
                        <Step
                            num="03"
                            title="Review Insights"
                            desc="Your exact age is displayed instantly, along with the total days elapsed in your life journey."
                        />
                    </div>
                </section>

                <section className={styles.richContent}>
                    <h2>Deep Life Statistics & Accuracy</h2>
                    <p>
                        Calculating the exact time between two dates is more
                        complex than simple math. Our tool handles leap years,
                        varying month lengths (28 to 31 days), and the Gregorian
                        calendar standards to ensure your documentation remains
                        accurate.
                    </p>

                    <div className={styles.infoBox}>
                        <h4>Chronological vs. Biological Age</h4>
                        <p>
                            While this tool measures your chronological age
                            (time since birth), biological age refers to how old
                            your cells and tissues are. Tracking chronological
                            milestones is essential for legal, medical, and
                            professional eligibility.
                        </p>
                    </div>

                    <h2>Why Precise Date Calculation Matters</h2>
                    <ul>
                        <li>
                            <strong>Retirement Planning:</strong> Knowing the
                            exact day you reach a milestone age for pension or
                            401k eligibility.
                        </li>
                        <li>
                            <strong>Academic Enrollment:</strong> Schools often
                            have strict cut-off dates down to the exact day for
                            admission.
                        </li>
                        <li>
                            <strong>Health Metrics:</strong> Pediatricians use
                            exact day/month counts to track infant development
                            and vaccine schedules.
                        </li>
                        <li>
                            <strong>Legal Deadlines:</strong> Calculating the
                            exact expiration of contracts or statutes of
                            limitation.
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default AgeCalculator;
