import css from './Feedback.module.css';

export const Feedback = ({ reviews, total, positivePercentage }) => {
  return (
    <ul className={css.list}>
      <li>
        <p>Good: {reviews.good}</p>
      </li>
      <li>
        <p>Neutral: {reviews.neutral}</p>
      </li>
      <li>
        <p>Bad: {reviews.bad}</p>
      </li>
      <li>
        <p>Total: {total}</p>
      </li>
      <li>
        <p>Positive: {positivePercentage}%</p>
      </li>
    </ul>
  );
};