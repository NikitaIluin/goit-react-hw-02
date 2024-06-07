/** @format */
import { useState } from "react";
const Button = function App() {
	const [counter, setCounter] = useState(0);
	const handleIncrement = () => {
		setCounter(counter + 2);

		console.log("iNCREMENTED", counter);
	};

	const handleDecrement = () => {
		counter > 1
			? setCounter(counter - 2)
			: (() => {
					const divOrg = document.getElementById("newId");
					const div = document.createElement("div");
					div.innerHTML = "<div> No way </div>";
					divOrg.appendChild(div);
					setTimeout(() => {
						div.innerHTML = "";
					}, 2000);
			  })();
	};

	return (
		<div id="newId">
			<button onClick={handleIncrement}>Increment</button>
			<p>{counter}</p>
			<button onClick={handleDecrement}>Decrement</button>
			<p>{counter}</p>
		</div>
	);
};

export default Button;