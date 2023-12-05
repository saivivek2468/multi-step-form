import { createContext, useContext, useState } from "react";
import { monthlyPlan } from "../components/Plan";

const MultiStepFormContext = createContext({});

export const StepFormProviderState = ({ children }) => {
  const [form, setForm] = useState({
    isMonth: true,
    isYear: false,
    whichPlan: monthlyPlan,
    addOns: {},
    planInfo: { Arcade: false, Advanced: false, Pro: false },
  });
  return (
    <MultiStepFormContext.Provider value={{ form, setForm }}>
      {children}
    </MultiStepFormContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(MultiStepFormContext);
  return context;
};
