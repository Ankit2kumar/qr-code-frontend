/** @format */

import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
//import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Navbar />
			<SignIn />
			{/* <SignUp /> */}
			{/* <Router>
				<Route path="/signup">
					<SignUp />
				</Route>
				<Route path="/signin">
					<SignIn />
				</Route>
			</Router> */}
		</>
	);
}

export default App;
