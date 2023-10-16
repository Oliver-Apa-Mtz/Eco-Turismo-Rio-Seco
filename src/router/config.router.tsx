import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/nosotros" element={<About />} />
		</Routes>
	);
}
