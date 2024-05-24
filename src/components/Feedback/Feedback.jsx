import css from "./Feedback.module.css";
import Options from "../Options/Options";

const Feedback = ({
  good,
  neutral,
  bad,
  goodFeedback,
  neutralFeedback,
  badFeedback,
}) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          {good}: <span className={css.number}>{goodFeedback}</span>
        </li>
        <li className={css.item}>
          {neutral}: <span className={css.number}>{neutralFeedback}</span>
        </li>
        <li className={css.item}>
          {bad}: <span className={css.number}>{badFeedback}</span>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;