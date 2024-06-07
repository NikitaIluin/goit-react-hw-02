/** @format */

const Feedback = ({
	goodButton,
	neutralButton,
	badButton,
	totalProps,
	relative,
}) => {
	return (
		<div
			className="feedback"
			id="myList">
			<ul className="feed-list">
				<li>Good:{goodButton} </li>
				<li>Neutral:{neutralButton} </li>
				<li>Bad: {badButton}</li>
				<li>Total:{totalProps}</li>
				<li>Positivity Rate: {relative}</li>
			</ul>
		</div>
	);
};

export default Feedback;