import React from "react";
import styles from "./Layout.module.css";
import ImageIcon from "../assets/images/bg-sidebar-desktop.svg";

function Info({ children, steps }) {
  return (
    <div className={styles.container}>
      <div className={styles.boxImage}>
        <img src={ImageIcon} alt="box iamge" />
        {/* ---------- start of step1------------ */}
        <div className={`${styles.rowFlex} ${styles.step1}`}>
          <div
            className={styles.circle}
            style={{
              background: steps === 1 ? "#bee2fd" : "transparent",
              color: steps === 1 ? "#483eff" : "#fff",
            }}
          >
            1
          </div>
          <div className={styles.columnFlex}>
            <p className={styles.step}>STEP 1</p>
            <p className={styles.info}>YOUR INFO</p>
          </div>
        </div>
        {/* --------end of step1----------------- */}

        {/* ---------- start of step2------------ */}
        <div className={`${styles.rowFlex} ${styles.step2}`}>
          <div
            className={styles.circle}
            style={{
              background: steps === 2 ? "#bee2fd" : "transparent",
              color: steps === 2 ? "#483eff" : "#fff",
            }}
          >
            2
          </div>
          <div className={styles.columnFlex}>
            <p className={styles.step}>STEP 2</p>
            <p className={styles.info}>SELECT PLAN</p>
          </div>
        </div>
        {/* --------end of step2----------------- */}
        {/* ---------- start of step3------------ */}
        <div className={`${styles.rowFlex} ${styles.step3}`}>
          <div
            className={styles.circle}
            style={{
              background: steps === 3 ? "#bee2fd" : "transparent",
              color: steps === 3 ? "#483eff" : "#fff",
            }}
          >
            3
          </div>
          <div className={styles.columnFlex}>
            <p className={styles.step}>STEP 3</p>
            <p className={styles.info}>ADD-ONS</p>
          </div>
        </div>
        {/* --------end of step3----------------- */}
        {/* ---------- start of step4------------ */}
        <div className={`${styles.rowFlex} ${styles.step4}`}>
          <div
            className={styles.circle}
            style={{
              background: steps === 4 ? "#bee2fd" : "transparent",
              color: steps === 4 ? "#483eff" : "#fff",
            }}
          >
            4
          </div>
          <div className={styles.columnFlex}>
            <p className={styles.step}>STEP 4</p>
            <p className={styles.info}>SUMMARY</p>
          </div>
        </div>
        {/* --------end of step4----------------- */}
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
}

export default Info;
