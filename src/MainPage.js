import TopNavbar from "./components/TopNavbar";
import MainNavbar from "./components/MainNavbar";
import ImageSlider from "./components/ImageSlider";
import React from "react";
import './custom.scss';

export default function MainPage(){
    return (
        <>
            <TopNavbar/>
            <MainNavbar/>
            <ImageSlider/>
        </>
    )

}