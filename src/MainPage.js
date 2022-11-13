import TopNavbar from "./components/TopNavbar";
import MainNavbar from "./components/MainNavbar";
import ImageSlider from "./components/ImageSlider";
import React from "react";
import './custom.scss';
import InsuranceCards from "./components/InsuranceCards";

export default function MainPage(){
    return (
        <>
            <TopNavbar/>
            <MainNavbar/>
            <ImageSlider/>
            <InsuranceCards/>
        </>
    )

}