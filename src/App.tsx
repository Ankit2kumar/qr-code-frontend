/** @format */

import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/signup" element={<SignUp />}></Route>
				<Route path="/signin" element={<SignIn />}></Route>
			</Routes>
		</>
	);
}

export default App;
