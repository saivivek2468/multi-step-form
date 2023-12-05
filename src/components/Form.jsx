import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";

function Form({ handleNextButton }) {
  const [userData, setUserData] = useState({
    userName: "",
    emailAddress: "",
    phoneNumber: "",
  });

  const [userError, setUserError] = useState({
    isUserName: false,
    isEmailAddress: false,
    isPhoneNumber: false,
  });
  const { userName, emailAddress, phoneNumber } = userData;
  useEffect(() => {
    if (userName && emailAddress && phoneNumber) {
      if (Object.values(userError).every((err) => err === false)) {
        handleNextButton();
      }
    }
  }, [userError]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName.length >= 3 && userName.length <= 15)
      setUserError((prev) => ({ ...prev, isUserName: false }));
    else setUserError((prev) => ({ ...prev, isUserName: true }));
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (pattern.test(emailAddress))
      setUserError((prev) => ({ ...prev, isEmailAddress: false }));
    else setUserError((prev) => ({ ...prev, isEmailAddress: true }));

    const Mbpattern = /^[6-9]{1}[0-9]{9}$/;
    if (Mbpattern.test(phoneNumber))
      setUserError((prev) => ({ ...prev, isPhoneNumber: false }));
    else setUserError((prev) => ({ ...prev, isPhoneNumber: true }));
  };

  console.log(userData, "userData");
  return (
    <div>
      <h1 className={styles.heading}>Personal info</h1>
      <p className={styles.paragraph}>
        Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <label className={styles.label}>Name</label>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            className={styles.input}
            onChange={handleChange}
            name="userName"
            value={userName}
            style={{
              border: userError.isUserName
                ? "1px solid #ee374a"
                : "1px solid black",
            }}
          />
          {userError.isUserName && (
            <p
              style={{
                color: "#ee374a",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Username should greater than euqal to 3 and less than equal to 15
            </p>
          )}
        </div>
        <div className={styles.form}>
          <label className={styles.label}>Email Address</label>
          <input
            type="text"
            placeholder="e.g. stephenking@lorem.com"
            className={styles.input}
            name="emailAddress"
            onChange={handleChange}
            value={emailAddress}
            style={{
              border: userError.isEmailAddress
                ? "1px solid #ee374a"
                : "1px solid black",
            }}
          />
          {userError.isEmailAddress && (
            <p
              style={{
                color: "#ee374a",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              email address should be correct pattern
            </p>
          )}
        </div>
        <div className={styles.form}>
          <label className={styles.label}>Phone Number</label>
          <input
            type="number"
            placeholder="e.g. +1 234 567 890"
            className={styles.input}
            name="phoneNumber"
            onChange={handleChange}
            value={phoneNumber}
            style={{
              border: userError.isPhoneNumber
                ? "1px solid #ee374a"
                : "1px solid black",
            }}
          />
          {userError.isPhoneNumber && (
            <p
              style={{
                color: "#ee374a",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              please enter correct phone number
            </p>
          )}
        </div>

        <div className={styles.button}>
          <button type="submit">Next Step</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
