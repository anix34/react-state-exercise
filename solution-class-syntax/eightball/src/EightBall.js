import React, { useState } from 'react';
import './Eightball.css';

const Eightball = (props) => {
	const [ question, setQuestion ] = useState('Think of a Question');
	const [ color, setColor ] = useState('black');
	const answers = props.answers;
	const randIdx = Math.floor(Math.random() * answers.length);
	console.log(answers.length);

	function HandleClick() {
		setQuestion(answers[randIdx].msg);
		setColor(answers[randIdx].color);
	}

	function reset() {
		setQuestion('Think of a question');
		setColor('black');
	}

	return (
		<React.Fragment>
			<div className="Eightball" style={{ backgroundColor: color }} onClick={HandleClick}>
				<h3 className="Eightball-text">{question}</h3>
			</div>
			<div className="Eightball-resetBtn">
				<button onClick={reset}>Reset</button>
			</div>
		</React.Fragment>
	);
};

export default Eightball;