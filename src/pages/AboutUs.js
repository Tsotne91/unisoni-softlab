import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

export default function AboutUs(){
    return (
        <>
            <TopNavbar/>
            <MainNavbar showButton={true} className='navbarBgImage'/>
            <Footer/>
        </>
    )
}