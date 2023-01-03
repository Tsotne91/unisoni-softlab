import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import Contracts from "./pages/Contracts";
import Feedback from "./pages/Feedback";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Career from "./pages/Career";
import Faq from "./pages/Faq";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/contracts"} element={<Contracts/>}/>
                <Route path={"/feedback"} element={<Feedback/>}/>
                <Route path={"/about-us"} element={<AboutUs/>}/>
                <Route path={"/contact-us"} element={<ContactUs/>}/>
                <Route path={"/career"} element={<Career/>}/>
                <Route path={"/faq"} element={<Faq/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;
