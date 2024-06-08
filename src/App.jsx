/** @format */

import "./App.css";

import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";
import { useState } from "react";
import { useEffect } from "react";
import Notification from "./components/notification/Notification";

function App() {
	const [feed, setFeedback] = useState({ good: 0, bad: 0, neutral: 0 });
	const { good, bad, neutral } = feed;

	/* const handlePushGood = () => {
		setFeedback({ ...feed, good: good + 1 });
	};
	const handlePushNeutral = () => {
		setFeedback({ ...feed, neutral: neutral + 1 });
	};
	const handlePushBad = () => {
		setFeedback({ ...feed, bad: bad + 1 });
	}; */

	const setTypeCounter = (updateParam) => {
		setFeedback({ ...feed, [updateParam]: feed[updateParam] + 1 });
	};
	const handlePushReset = () => {
		setFeedback({ good: 0, bad: 0, neutral: 0 });
	};

	const totalValue = good + bad + neutral;
	const goodRelativeness =
		totalValue === 0 ? 0 : Math.round((good / totalValue) * 100);

	useEffect(() => {
		window.localStorage.setItem("saved-feedback,", JSON.stringify(feed));
		console.log(feed);
	}, [feed]);
	return (
		<div className="app-style">
			<Description />
			<Options
				handlePushGood={() => setTypeCounter("good")}
				handlePushBad={() => setTypeCounter("bad")}
				handlePushNeutral={() => setTypeCounter("neutral")}
				handlePushReset={handlePushReset}
				feedbackCount={totalValue}
			/>
			{totalValue === 0 ? (
				<Notification text="No feedback yet" />
			) : (
				<Feedback
					goodButton={good}
					neutralButton={neutral}
					badButton={bad}
					totalProps={totalValue}
					relative={`${goodRelativeness}%`}
				/>
			)}
		</div>
	);
}

export default App;