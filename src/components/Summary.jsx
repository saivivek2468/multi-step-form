import React from "react";
import styles from "./Summary.module.css";
import { useGlobalContext } from "../context/context";
import styles1 from "./Plan.module.css";

const Summary = ({ handleNextButton, handlePreviousButton }) => {
  const { form } = useGlobalContext();
  console.log(form, "form in summary");

  function getNameAndDate() {
    let result;
    if (form.planInfo.Arcade)
      return (result = "Arcade ".concat(
        form.isMonth ? "(Monthly)" : "(Yearly)"
      ));
    if (form.planInfo.Advanced)
      return (result = "Advanced ".concat(
        form.isMonth ? "(Monthly)" : "(Yearly)"
      ));
    if (form.planInfo.Pro)
      return (result = "Pro ".concat(form.isMonth ? "(Monthly)" : "(Yearly)"));
  }

  function getPrice() {
    if (form.planInfo.Arcade) return form.planInfo.price;
    if (form.planInfo.Advanced) return form.planInfo.price;
    if (form.planInfo.Pro) return form.planInfo.price;
  }

  const getPlanPrice = form.isMonth
    ? Object.values(form.planInfo)[3]?.split("/mo")[0]?.split("$")[1]
    : Object.values(form.planInfo)[3]?.split("/yr")[0]?.split("$")[1];

  const getTotalPrice = form.isMonth
    ? Object.values(form.price)
        .map((str) => Number(str?.split("+$")[1]?.split("/mo")[0]))
        .reduce((prev, curr) => prev + curr, 0)
    : Object.values(form.price)
        .map((str) => Number(str?.split("+$")[1]?.split("/yr")[0]))
        .reduce((prev, curr) => prev + curr, 0);

  console.log(Number(getPlanPrice), "Number(getPlanPrice)");
  console.log(getTotalPrice, "getTotalPrice");
  return (
    <div>
      <h1 className={styles.heading}>Finishing up</h1>
      <p className={styles.paragraph}>
        Double-check everything looks OK before confirming.
      </p>
      <div className={styles.container}>
        <div className={styles.rowFlex}>
          <div className={styles.nameAndDate}>{getNameAndDate()}</div>
          <div className={styles.price}>{getPrice()}</div>
        </div>
        <div className={styles.horizontal}></div>
        <div className={styles.rowFlex}>
          {form.addOns["Online service"] && (
            <p className={styles.label}>Online service</p>
          )}
          {form.addOns["Online service"] && (
            <p className={styles.labelPrice}>{form.price["Online service"]}</p>
          )}
        </div>

        <div className={styles.rowFlex}>
          {form.addOns["Larger storage"] && (
            <p className={styles.label}>Larger storage</p>
          )}
          {form.addOns["Larger storage"] && (
            <p className={styles.labelPrice}>{form.price["Larger storage"]}</p>
          )}
        </div>
        <div className={styles.rowFlex}>
          {form.addOns["Customizable profile"] && (
            <p className={styles.label}>Customizable profile</p>
          )}
          {form.addOns["Customizable profile"] && (
            <p className={styles.labelPrice}>
              {form.price["Customizable profile"]}
            </p>
          )}
        </div>
      </div>
      <div className={styles.rowFlex}>
        <p className={styles.total}>
          Total (per {`${form.isMonth ? "month" : "year"}`})
        </p>
        <p className={styles.totalPrice}>
          +${Number(getPlanPrice) + getTotalPrice}/{form.isMonth ? "mo" : "yr"}
        </p>
      </div>
      <div className={styles1.buttons}>
        <p onClick={handlePreviousButton}>Go Back</p>
        <button onClick={handleNextButton} style={{ backgroundColor: "green" }}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Summary;
