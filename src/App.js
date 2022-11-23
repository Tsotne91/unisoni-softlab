import React from "react";
import "./app.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import Contracts from "./pages/Contracts";
import Feedback from "./pages/Feedback";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/contracts"} element={<Contracts/>}/>
                <Route path={"/feedback"} element={<Feedback/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
