import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
	const [userChoice, setUserChoice] = useState<string | null>(null);
	const [computerChoice, setComputerChoice] = useState<string | null>(null);
	const [result, setResult] = useState<string | null>(null);
	const [userWins, setUserWins] = useState<number>(0);
	const [computerWins, setComputerWins] = useState<number>(0);

	const choices = ['rock', 'paper', 'scissors'];

	const handleClick = (choice: string) => {
		setUserChoice(choice);
		const randomChoice = choices[Math.floor(Math.random() * choices.length)];
		setComputerChoice(randomChoice);
		determineWinner(choice, randomChoice);
	};

	const determineWinner = (user: string, computer: string) => {
		if (user === computer) {
			setResult("It's a tie!");
		} else if (
			(user === 'rock' && computer === 'scissors') ||
			(user === 'paper' && computer === 'rock') ||
			(user === 'scissors' && computer === 'paper')
		) {
			setResult('You win!');
			setUserWins(userWins + 1);
		} else {
			setResult('You lose!');
			setComputerWins(computerWins + 1);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
			<h1 className="text-4xl font-bold mb-8">Rock Paper Scissors</h1>
			<div className="flex space-x-4 mb-8">
				{choices.map((choice) => (
					<button
						key={choice}
						onClick={() => handleClick(choice)}
						className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
					>
						{choice}
					</button>
				))}
			</div>
			{userChoice && computerChoice && (
				<div className="text-center">
					<p className="text-xl mb-2">You chose: {userChoice}</p>
					<p className="text-xl mb-2">Computer chose: {computerChoice}</p>
					<p className="text-2xl font-bold">{result}</p>
				</div>
			)}
			<div className="text-center mt-8">
				<p className="text-xl">Your Wins: {userWins}</p>
				<p className="text-xl">Computer Wins: {computerWins}</p>
			</div>
		</div>
	);
};

export default App;
