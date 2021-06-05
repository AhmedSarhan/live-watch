import './App.css';

import { ReactComponent as ClockIcon } from './icons/clock.svg';
import { ReactComponent as CalenderIcon } from './icons/calendar.svg';

function App() {
	return (
		<div className="App">
			<CalenderIcon />
			<p>date</p>
			<ClockIcon />
			<p>time</p>
		</div>
	);
}

export default App;
