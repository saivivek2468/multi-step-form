import Form from "./components/Form";
import Layout from "./components/Layout";
import styles from "./App.module.css";
import { useState } from "react";
import AddOn from "./components/AddOn";
import Summary from "./components/Summary";
import ThankYou from "./components/ThankYou";
import Plan from "./components/Plan";
import ImageIcon from "./assets/images/bg-sidebar-mobile.svg";

function App() {
  const [steps, setSteps] = useState(1);
  const handleNextButton = () => {
    setSteps((prev) => prev + 1);
  };

  const handlePreviousButton = () => setSteps((prev) => prev - 1);
  return (
    <div className={styles.mobileBoxImage}>
      <div className={styles.img}>
        <img src={ImageIcon} alt="image-icon" />

        <div
          className={`${styles.circle} ${styles.step1}`}
          style={{
            background: steps === 1 ? "#bee2fd" : "transparent",
            color: steps === 1 ? "#483eff" : "#fff",
          }}
        >
          1
        </div>
        <div
          className={`${styles.circle} ${styles.step2}`}
          style={{
            background: steps === 2 ? "#bee2fd" : "transparent",
            color: steps === 2 ? "#483eff" : "#fff",
          }}
        >
          2
        </div>
        <div
          className={`${styles.circle} ${styles.step3}`}
          style={{
            background: steps === 3 ? "#bee2fd" : "transparent",
            color: steps === 3 ? "#483eff" : "#fff",
          }}
        >
          3
        </div>
        <div
          className={`${styles.circle} ${styles.step4}`}
          style={{
            background: steps === 4 ? "#bee2fd" : "transparent",
            color: steps === 4 ? "#483eff" : "#fff",
          }}
        >
          4
        </div>
      </div>
      <div className={styles.container}>
        {steps === 1 && (
          <>
            <Layout steps={steps}>
              <Form steps={steps} handleNextButton={handleNextButton} />
            </Layout>
          </>
        )}
        {steps === 2 && (
          <Layout steps={steps}>
            <Plan
              handleNextButton={handleNextButton}
              handlePreviousButton={handlePreviousButton}
            />
          </Layout>
        )}
        {steps === 3 && (
          <Layout steps={steps}>
            <AddOn
              handleNextButton={handleNextButton}
              handlePreviousButton={handlePreviousButton}
            />
          </Layout>
        )}
        {steps === 4 && (
          <Layout steps={steps}>
            <Summary
              handleNextButton={handleNextButton}
              handlePreviousButton={handlePreviousButton}
            />
          </Layout>
        )}
        {steps === 5 && (
          <Layout>
            <ThankYou />
          </Layout>
        )}
      </div>
    </div>
  );
}

export default App;
