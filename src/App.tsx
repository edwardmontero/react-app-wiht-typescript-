import React, { useState } from 'react';
import './App.css';

// interface Sub {
//nick: 'string';
//avatar: 'string';
//subMonths: 'number';
//desciption?: 'string';
//}

function App() {
	const [subs] = useState([
		{
			nick: 'Edward',
			subMonths: 7,
			avatar: 'https://i.pravatar.cc/150',
			description: 'Edward se esta esforzando para ser un buen programador',
		},
	]);

	//useEffect(() => {
	//	setSubs(INITIAL_STATE);
	//}, []);

	return (
		<div className="App">
			<h1>Edward Montero</h1>
			<ul>
				{subs.map((sub) => {
					return (
						<li key={sub.nick}>
							<img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
							<h4>
								{sub.nick} (<small>{sub.subMonths}</small>)
							</h4>
							<p>{sub.description?.substring(0, 100)}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
