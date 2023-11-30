// BuyingProcess.js
"use client";
import React, { useState } from "react";
import styles from "./BuyingProcess.module.css";

const BuyingProcess = () => {
  const [salary, setSalary] = useState("");
  const [civilScore, setCivilScore] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [isCarEligible, setIsCarEligible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Convert input values to numbers
    const parsedSalary = parseFloat(salary);
    const parsedCivilScore = parseFloat(civilScore);

    // Check eligibility conditions
    const isSalaryEligible = parsedSalary < 50000;
    const isCivilScoreEligible = parsedCivilScore > 800;

    if ((isSalaryEligible && isCivilScoreEligible) || parsedSalary > 50000 || parsedCivilScore > 850) {
      setIsCarEligible(true);
    } else {
      setIsCarEligible(false);
    }
  };

  return (
    <div className={styles.buyingProcessContainer}>
      <h1>Buying Process</h1>

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="salary">
            Salary:
          </label>
          <input
            className={styles.input}
            type="number"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="civilScore">
            Civil Score:
          </label>
          <input
            className={styles.input}
            type="number"
            id="civilScore"
            value={civilScore}
            onChange={(e) => setCivilScore(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="employmentType">
            Employment Type:
          </label>
          <select
            className={styles.select}
            id="employmentType"
            value={employmentType}
            onChange={(e) => setEmploymentType(e.target.value)}
            required
          >
            <option value="">Select Employment Type</option>
            <option value="govt">Govt. Job</option>
            <option value="private">Private Job</option>
            <option value="it">IT Job</option>
            <option value="business">Business</option>
          </select>
        </div>

        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>

      <div className={`${styles.message} ${isCarEligible ? styles.success : styles.error}`}>
        {isCarEligible ? (
          <p>Congratulations on your new car!</p>
        ) : (
          <p>Sorry, you cannot buy the car based on the eligibility criteria.</p>
        )}
      </div>
    </div>
  );
};

export default BuyingProcess;
