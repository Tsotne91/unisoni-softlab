import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";

export default function Career(){

    return (
        <>
        <TopNavbar showButton={false}/>
            <MainNavbar showButton={true} className="navbarBgImageCareer"  mobileLogo="./img/insuranceIcons/Logo.svg" />
        </>
    )

}