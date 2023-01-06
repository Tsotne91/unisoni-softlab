import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import {Accordion, Container, Form} from "react-bootstrap";
import './styles/about-us.scss';
import UnisonHistorySlider from "../components/UnisonHistorySlider";
import YearlyReports from "../components/insuranceIcons/YearlyReports";

export default function AboutUs() {


    return (
        <>
            <TopNavbar showButton={false}/>
            <MainNavbar showButton={true} className='navbarBgImageAboutUs'
                        mobileLogo="./img/insuranceIcons/Group334.svg"/>
            <Container className="d-none d-md-block">
                <h1 className="text-light d-flex justify-content-center">ჩვენს შესახებ</h1>
                <p className="aboutUsMain text-secondary text-center p-2 my-4">
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
            <Container className="aboutUsMobile d-md-none my-3">
                <Accordion>
                    <Accordion.Item eventKey="0" className="border border-primary border-2 rounded-3 my-2">
                        <Accordion.Header>ჩვენს შესახებ</Accordion.Header>
                        <Accordion.Body className="text-secondary">
                            სადაზღვევო კომპანია „უნისონი“ დაფუძნდა
                            2011 წელს და დროის მცირე მონაკვეთში ქართული სადაზღვევო
                            ბაზრის ერთ-ერთი თვალსაჩინო მოთამაშედ იქცა. სადაზღვევო
                            სფეროში, მენეჯმენტის მრავალწლიანი გამოცდილებითა და
                            პროფესიონალიზმით, ძლიერი საერთაშორისო პარტნიორებითა
                            და მრავალფეროვანი პროდუქტებით „უნისონმა“ სწრაფად და
                            ადვილად მოიპოვა მომხმარებლის ნდობა და ბაზრის სოლიდური
                            წილი. უნისონი წარმოადგენს დამოუკიდებელ, სხვა ბიზნესებთან
                            არააფილირებულ სადაზღვევო კომპანიას, რაც მომხმარებელს მეტი
                            თავისუფალი არჩევანის საშუალებას აძლევს. უნისონი მომხმარებელს
                            სთავაზობს მაღალი ხარისხის მომსახურებას, პროვაიდრების თავისუფალ
                            არჩევანსა და კონკურენტუნარიან ფასებს.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="border border-primary border-2 rounded-3 my-2">
                        <Accordion.Header>მისია</Accordion.Header>
                        <Accordion.Body className="text-secondary">
                            ჩვენი მისიაა ხელი შევუწყოთ ფინანსურ
                            დაცულობასა და სტაბილურობას;
                            თქვენთან ერთად მუდმივად ვიზრუნოთ
                            ცხოვრების გამარტივებასა და სიმშვიდეზე.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="border border-primary border-2 rounded-3 my-2">
                        <Accordion.Header>ღირებულებები</Accordion.Header>
                        <Accordion.Body className="text-secondary">
                            ჩვენ ვქმნით კომპანიას, რომელიც მაღალპროფესიონალური
                            სადაზღვევო სერვისებითა და ურთიერთობის გამორჩეული
                            სტილით, თქვენი გრძელვადიანი და სანდო პარტნიორია.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="border border-primary border-2 rounded-3 my-2">
                        <Accordion.Header>სტანდარტი</Accordion.Header>
                        <Accordion.Body className="text-secondary">
                            <ul>
                                <li>პროფესიონალიზმი</li>
                                <li>განვითარება</li>
                                <li>სიძლიერე</li>
                                <li>სტაბილურობა</li>
                                <li>სანდოობა</li>
                                <li>მრავალფეროვნება</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
            <UnisonHistorySlider/>
            <YearlyReports className={"mobileYearlyReports"}/>
            <Container>
                <div className="unisonToday my-2 d-none d-md-flex flex-column">
                    <h4 className="text-primary align-self-center d-inline">უნისონი დღეს</h4>
                    <div className="d-flex justify-content-center w-100">
                        <div className="unisonTodayDivs rounded-5 d-flex flex-column py-3 mx-2 my-1">
                            <img src="./img/insuranceIcons/unisonToday/Image 19.png" alt="icon"
                                 className="my-2 align-self-center"/>
                            <h4 className="text-light my-2 align-self-center">მისია</h4>
                            <p className="text-light my-3 text-center align-self-center">ჩვენი მისიაა ხელი შევუწყოთ
                                ფინანსურ დაცულობასა და სტაბილურობას;
                                თქვენთან ერთად მუდმივად ვიზრუნოთ ცხოვრების გამარტივებასა და სიმშვიდეზე.</p>
                        </div>
                        <div className="unisonTodayDivs rounded-5 d-flex flex-column py-3 mx-2 my-1">
                            <img src="./img/insuranceIcons/unisonToday/Image 20.png" alt="icon"
                                 className="my-2 align-self-center"/>
                            <h4 className="text-light my-2 align-self-center">სტანდარტი</h4>
                            <div className="unisonTodayDivList text-light d-flex justify-content-center">
                                <div>
                                    <ul>
                                        <li>პროფესიონალიზმი</li>
                                        <li>განვითარება</li>
                                        <li>სიძლიერე</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>სტაბილურობა</li>
                                        <li>სანდოობა</li>
                                        <li>მრავალფეროვნება</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="unisonToday d-none d-md-flex justify-content-center">
                    <div className="unisonTodayLastDiv rounded-5 d-flex flex-column py-4 mx-2">
                        <img src="./img/insuranceIcons/unisonToday/Image 18.png" alt="icon"
                             className="my-2 align-self-center"/>
                        <h4 className="text-light my-2 align-self-center">ღირებულებები</h4>
                        <p className="text-light text-center align-self-center">
                            ჩვენ ვქმნით კომპანიას, რომელიც მაღალპროფესიონალური
                            სადაზღვევო სერვისებითა და ურთიერთობის გამორჩეული
                            სტილით, თქვენი გრძელვადიანი და სანდო პარტნიორია.
                        </p>
                    </div>
                </div>
            </Container>
            <YearlyReports className={"desktopYearlyReports"}/>
            <Footer/>
        </>
    )
}
