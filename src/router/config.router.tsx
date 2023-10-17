import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import About from "../pages/About";
import Activities from "../pages/Activities";

export const Router = () => {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<Routes key={location.pathname} location={location}>
				<Route path="/" element={<Home />} />
				<Route path="/nosotros" element={<About />} />
				<Route path="/actividades" element={<Activities />} />
			</Routes>
		</AnimatePresence>
	);
}
