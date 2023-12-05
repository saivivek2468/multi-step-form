import React from "react";
import ThankYouIcon from "../assets/images/icon-thank-you.svg";
import styles from "./ThankYou.module.css";

function ThankYou() {
  return (
    <div className={styles.container}>
      <img src={ThankYouIcon} alt="thanks-you-icon" />
      <h3 className={styles.heading}>Thank you!</h3>
      <p className={styles.paragraph}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default ThankYou;
