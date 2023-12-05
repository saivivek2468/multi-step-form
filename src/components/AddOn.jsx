import React, { useEffect, useState } from "react";
import styles from "./AddOn.module.css";
import styles1 from "./Plan.module.css";
import { useGlobalContext } from "../context/context";

function AddOn({ handlePreviousButton, handleNextButton }) {
  const { form, setForm } = useGlobalContext();

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      addOns: {
        ...prev.addOns,
        ["Online service"]: false,
        ["Larger storage"]: false,
        ["Customizable profile"]: false,
      },
      price: {
        ...prev.price,
        ["Online service"]: form.isMonth ? "+$0/mo" : "+$0/yr",
        ["Larger storage"]: form.isMonth ? "+$0/mo" : "+$0/yr",
        ["Customizable profile"]: form.isMonth ? "+$0/mo" : "+$0/yr",
      },
    }));
  }, []);

  const handleCheckbox = (event, price) => {
    const name = event.target.name;
    const checked = event.target.checked;
    setForm((prev) => ({
      ...prev,
      addOns: {
        ...prev.addOns,
        [name]: checked,
      },
      price: {
        ...prev.price,
        [name]: checked ? price : form.isMonth ? "+$0/mo" : "+$0/yr",
      },
    }));
  };

  const handleButton = () => {
    if (Object.values(form.addOns).some((addon) => addon === true))
      handleNextButton();
  };
  return (
    <div>
      <h1 className={styles.heading}>Pick add-ons</h1>
      <p className={styles.paragraph}>
        Add-ons help enhance your gaming experience.
      </p>
      <div
        className={styles.serviceContainer}
        style={{
          border: form.addOns["Online service"]
            ? "1px solid #483eff"
            : "1px solid #d6d9e6",

          background: form.addOns["Online service"] ? "#f8f9ff" : "#fff",
        }}
      >
        <input
          type="checkbox"
          onClick={(event) =>
            handleCheckbox(event, form.isMonth ? "+$1/mo" : "+$10/yr")
          }
          value={form.addOns["Online service"]}
          name="Online service"
          checked={form.addOns["Online service"]}
        />
        <div className={styles.service}>
          <h3>Online service</h3>
          <p>Access to multiplayer games</p>
        </div>
        <p>{form.isMonth ? "+$1/mo" : "+$10/yr"}</p>
      </div>
      <div
        className={styles.serviceContainer}
        style={{
          border: form.addOns["Larger storage"]
            ? "1px solid #483eff"
            : "1px solid #d6d9e6",
          background: form.addOns["Larger storage"] ? "#f8f9ff" : "#fff",
        }}
      >
        <input
          type="checkbox"
          onClick={(event) =>
            handleCheckbox(event, form.isMonth ? "+$2/mo" : "+$20/yr")
          }
          value={form.addOns["Larger storage"]}
          name="Larger storage"
          checked={form.addOns["Larger storage"]}
        />
        <div className={styles.service}>
          <h3>Larger storage</h3>
          <p>Extra 1TB of cloud save</p>
        </div>
        <p>{form.isMonth ? "+$2/mo" : "+$20/yr"}</p>
      </div>
      <div
        className={styles.serviceContainer}
        style={{
          border: form.addOns["Customizable profile"]
            ? "1px solid #483eff"
            : "1px solid #d6d9e6",
          background: form.addOns["Customizable profile"] ? "#f8f9ff" : "#fff",
        }}
      >
        <input
          type="checkbox"
          onClick={(event) =>
            handleCheckbox(event, form.isMonth ? "+$2/mo" : "+$20/yr")
          }
          value={form.addOns["Customizable profile"]}
          name="Customizable profile"
          checked={form.addOns["Customizable profile"]}
        />
        <div className={styles.service}>
          <h3>Customizable profile</h3>
          <p>Custom theme on your profile</p>
        </div>
        <p>{form.isMonth ? "+$2/mo" : "+$20/yr"}</p>
      </div>
      <div className={styles1.buttons}>
        <p onClick={handlePreviousButton}>Go Back</p>
        <button onClick={handleButton}>Next Step</button>
      </div>
    </div>
  );
}

export default AddOn;
