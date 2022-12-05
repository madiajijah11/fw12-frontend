import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";

function App() {
	return (
		<Routes>
			<Route path="/signin" element={<Signin />} />
			<Route path="/" element={<Homepage />} />
		</Routes>
	);
}

export default App;
