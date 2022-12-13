import React, {useEffect} from "react"
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
import Students from "./pages/StudentsPage"
import Teachers from "./pages/TeachersPage"

const RedirectPage = () => {
    useEffect(() => {
        if (localStorage.getItem("userId")) {
            window.location.href = "/"
        }
    },[])

    return (
        <></>
    )
}

        
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
				<Route path="/students" element={<Students/>}/>
				<Route path="/teachers" element={<Teachers/>}/>
				<Route path="*" element={<RedirectPage />} />
			</Routes>
			<Footer />
			<ProgramsModal/>
		</div>
	)
}

export default App


