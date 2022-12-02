import React from "react";
import '../custom.scss';
import InsuranceCards from "../components/InsuranceCards";
import News from "../components/News";
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";

export default function MainPage(){
    return (
        <>
            <TopNavbar showButton={true}/>
            <MainNavbar showButton={false} className='bg-primary' mobileLogo="./img/insuranceIcons/Group334.svg"/>
            <ImageSlider/>
            <InsuranceCards/>
            <News/>
            <Footer/>
        </>
    )

}