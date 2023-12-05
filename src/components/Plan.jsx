import React, { useEffect, useState } from "react";
import styles from "./Plan.module.css";
import AcradeIcon from "../assets/images/icon-arcade.svg";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import ProIcon from "../assets/images/icon-pro.svg";
import { useGlobalContext } from "../context/context";

export const monthlyPlan = [
  {
    id: 1,
    icon: AcradeIcon,
    name: "Arcade",
    price: "$9/mo",
  },
  {
    id: 2,
    icon: AdvancedIcon,
    name: "Advanced",
    price: "$12/mo",
  },
  {
    id: 3,
    icon: ProIcon,
    name: "Pro",
    price: "$15/mo",
  },
];
function Plan({ handleNextButton, handlePreviousButton }) {
  const yearlyPlan = [
    {
      id: 1,
      icon: AcradeIcon,
      name: "Arcade",
      price: "$90/yr",
      free: "2 months free",
    },
    {
      id: 2,
      icon: AdvancedIcon,
      name: "Advanced",
      price: "$120/yr",
      free: "2 months free",
    },
    {
      id: 3,
      icon: ProIcon,
      name: "Pro",
      price: "$150/yr",
      free: "2 months free",
    },
  ];
  const { form, setForm } = useGlobalContext();
  const handleCheck = (event) => {
    if (event.target.checked) {
      setForm((prev) => ({
        ...prev,
        isYear: true,
        isMonth: false,
        whichPlan: yearlyPlan,
        planInfo: {
          ...prev.planInfo,
          Arcade: false,
          Advanced: false,
          Pro: false,
        },
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        isYear: false,
        isMonth: true,
        whichPlan: monthlyPlan,
        planInfo: {
          ...prev.planInfo,
          Arcade: false,
          Advanced: false,
          Pro: false,
        },
      }));
    }
  };

  const handlePlan = (str, price) => {
    setForm((prev) => ({
      ...prev,
      planInfo: {
        ...prev.planInfo,
        Arcade: str === "Arcade" ? true : false,
        Advanced: str === "Advanced" ? true : false,
        Pro: str === "Pro" ? true : false,
        price,
      },
    }));
  };
  const handleButton = () => {
    if (Object.values(form.planInfo).some((plan) => plan === true)) {
      handleNextButton();
    }
  };
  return (
    <div className={styles.plans}>
      <h1>Select your plan</h1>
      <p className={styles.paragraph}>
        You have the option of monthly or yearly billing.
      </p>
      <div className={styles.rowFlex}>
        {form.whichPlan.map((plan) => (
          <div
            className={styles.columnFlex}
            style={{
              border: form.planInfo[plan.name]
                ? "1px solid #483eff"
                : "1px solid #d6d9e6",
              background: form.planInfo[plan.name] ? "#eff5ff" : "#fff",
            }}
            key={plan.id}
            onClick={() => handlePlan(plan.name, plan.price)}
          >
            <img src={plan.icon} alt="icon" className={styles.icon} />
            <div>
              <p className={styles.plan}>{plan.name}</p>
              <p className={styles.price}> {plan.price}</p>
              {plan.free && <p className={styles.free}>{plan.free}</p>}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.dateContainer}>
        <p
          style={{
            color: form.isMonth ? "#022959" : "#9699aa",
            fontWeight: "bold",
          }}
        >
          Monthly
        </p>
        <input
          type="checkbox"
          id="check"
          className={styles.input}
          onClick={handleCheck}
        />
        <label htmlFor="check" className={styles.button}></label>
        <p
          style={{
            color: form.isYear ? "#022959" : "#9699aa",
            fontWeight: "bold",
          }}
        >
          Yearly
        </p>
      </div>
      <div className={styles.buttons}>
        <p onClick={handlePreviousButton}>Go Back</p>
        <button onClick={handleButton}>Next Step</button>
      </div>
    </div>
  );
}

export default Plan;
