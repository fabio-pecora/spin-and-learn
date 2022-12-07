import React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"

import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import PricingPage from "./pages/PricingPage"
import TeamPage from "./pages/TeamPage"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import Footer from "./pages/Footer"
import ProgramsModal from "./components/modals/Programs"


const App = () => {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about-us" element={<AboutPage />} />
				<Route path="/pricing" element={<PricingPage />} />
				<Route path="/team" element={<TeamPage />} />
				<Route path="/sign-up" element={<SignUpPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
			<Footer />
			<ProgramsModal/>
		</div>

	)
}

export default App


