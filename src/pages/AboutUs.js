import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import {Container} from "react-bootstrap";
import './about-us.scss';
import {ReactComponent as LeftArrow} from "../components/insuranceIcons/arrow-left-circle.svg";
import {ReactComponent as RightArrow} from "../components/insuranceIcons/arrow-right-circle.svg";

export default function AboutUs(){
    return (
        <>
            <TopNavbar showButton={false}/>
            <MainNavbar showButton={true} className='navbarBgImage'/>
            <Container>
                <h1 className="text-light d-flex justify-content-center">ჩვენს შესახებ</h1>
                <p className="text-secondary text-center p-2 my-4">
                    სადაზღვევო კომპანია "უნისონი" დაფუძნდა 2011 წელს და დროის
                    მცირე მონაკვეთში ქართული სადაზღვევო ბაზრის ერთ-ერთ თვალსაჩინო
                    მოთამაშედ იქცა. სადაზღვევო სფეროში, მენეჯმენტის მრავალწლიანი გამოცდილებითა
                    და პროფესიონალიზმით, ძლიერი საერთაშორისო პარტნიორებითა და
                    მრავალფეროვანი პროდუქტებით "უნისონმა" სწრაფად და ადვილად მოიპოვა მომხმარებლის
                    ნდობა და ბაზრის სოლიდური წილი. უნისონი წარმოადგენს დამოუკიდებელ, სხვა ბიზნესებთან
                    არააფილირებულ სადაზღვევო კომპანიას, რაც მომხმარებელს მეტი თავისუფალი არჩევანის
                    საშუალებას აძლევს. უნისონი მომხმარებელს სთავაზობს მაღალი ხარისხის მომსახურებას, პროვაიდერების
                    თავისუფალ არჩევანსა და კონკურენტუნარიან ფასებს.
                </p>
            </Container>
            <Container>
                <div className="d-flex flex-column">
                    <h4 className="text-primary text-center">უნისონის ისტორია</h4>
                    <div className="align-self-end">
                        <LeftArrow/>
                        <RightArrow/>
                    </div>
                </div>
            </Container>
            <Container>

            </Container>
            <Footer/>
        </>
    )
}