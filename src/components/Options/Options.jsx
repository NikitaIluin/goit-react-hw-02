import css from "./Options.module.css";
import { useState } from "react";

const Options = ({ btnTxt1, btnTxt2, btnTxt3 }) => {
  const [values, setValues] = useState({ good: 0, neutral: 0, bad: 0 });
  const updateFeedback = (feedbackType) => {
    if (feedbackType === "good") {
      setValues({ ...values, good: values.good + 1 });
    } else if (feedbackType === "neutral") {
      setValues({ ...values, neutral: values.neutral + 1 });
    } else if (feedbackType === "bad") {
      setValues({ ...values, bad: values.bad + 1 });
    }
  };
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={() => updateFeedback("good")}>
        {btnTxt1}
      </button>
      <button className={css.btn} onClick={() => updateFeedback("neutral")}>
        {btnTxt2}
      </button>
      <button className={css.btn} onClick={() => updateFeedback("bad")}>
        {btnTxt3}
      </button>
    </div>
  );
};

export default Options;