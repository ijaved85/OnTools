import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import styles from "./gstCalculator.module.scss";

function GSTCalculator() {
  const [amount, setAmount] = useState("");
  const [gst, setGst] = useState("");
  const [result, setResult] = useState(null);

  // Optional: scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculateGST = () => {
    if (!amount || !gst) return;

    const gstAmount = (amount * gst) / 100;
    const total = Number(amount) + gstAmount;

    setResult({
      gstAmount: gstAmount.toFixed(2),
      total: total.toFixed(2),
    });
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>GST Calculator - OnTools</title>
        <meta
          name="description"
          content="Free GST Calculator to calculate CGST, SGST, IGST online. Quickly find GST amount and total price for 5%, 12%, 18%, 28% GST rates."
        />
        <meta
          name="keywords"
          content="GST calculator, GST online, CGST, SGST, IGST, GST 18%, GST 12%, tax calculator, finance tools"
        />
        <meta name="author" content="OnTools - Smoke Screen" />
      </Helmet>

      {/* Calculator UI */}
      <div className={styles.container}>
        <h1 className={styles.title}>GST Calculator</h1>

        <div className={styles.form}>
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <input
            type="number"
            placeholder="GST % (e.g., 18)"
            value={gst}
            onChange={(e) => setGst(e.target.value)}
          />

          <button onClick={calculateGST}>Calculate</button>
        </div>

        {result && (
          <div className={styles.resultBox}>
            <p>GST Amount: ₹ {result.gstAmount}</p>
            <p>Total Amount: ₹ {result.total}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default GSTCalculator;