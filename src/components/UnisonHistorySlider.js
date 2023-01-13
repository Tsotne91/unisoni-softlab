import {Card, Col, Container, Row} from "react-bootstrap";
import {ReactComponent as LeftArrow} from "../components/insuranceIcons/arrow-left-circle.svg";
import {ReactComponent as RightArrow} from "../components/insuranceIcons/arrow-right-circle.svg";
import {useRef} from "react";

export default function UnisonHistorySlider() {

    const sliderWrapper = useRef();
    const moveSlider = (dir) => sliderWrapper.current.scrollLeft += dir * 350;

    let mouseDown = false;
    let startX, scrollLeft;
    const startDragging = e => {
        mouseDown = true;
        startX = e.pageX - sliderWrapper.current.offsetLeft;
        scrollLeft = sliderWrapper.current.scrollLeft;
    };
    const stopDragging = () => {
        mouseDown = false;
    };
    const mouseMove = e => {
        e.preventDefault();
        if (!mouseDown) {
            return;
        }
        const x = e.pageX - sliderWrapper.current.offsetLeft;
        const scroll = x - startX;
        sliderWrapper.current.scrollLeft = scrollLeft - scroll;
    };

    const sliderDataArr = [
        {
            text: "უნისონი დაარსდა და საერთაშორისო გადამზღვევ კომპანიებთან ურთიერთობამ, საშუალება მოგვცა პირველივე დღიდან წარმოგვედგინა პროდუქციის მრავალფეროვანი სპექტრი",
            imgSrc: "/img/aboutUsPhotos/Rectangle 804.png"
        }, {
            text: "უნისონი იღებს აკრედიტაციას აზერბაიჯანის სახელმწიფოს ფინანსთა სამინისტროს მიერ და ინიშნება ბაქო-თბილისი ჯეიჰანის მილსადენის ექსკლუზიურ Მზღვეველად",
            imgSrc: "/img/aboutUsPhotos/Rectangle 805.png"
        }, {
            text: "უნისონი აფართოებს მომსახურების არეალს და ხსნის წარმომადგენლობით ოფისებს ბათუმსა და ფოთში",
            imgSrc: "/img/aboutUsPhotos/Rectangle 807.png"
        }, {
            text: "უნისონი - სადაზღვევო ბაზარზე პირველი - ნერგავს მობილურ აპლიკაციას, იწყებს ონლაინ გაყიდვებს",
            imgSrc: "/img/aboutUsPhotos/Rectangle 808.png"
        }, {
            text: "უნისონი აზღვევს საქართველოს საჰაერო სივრცეს, იწყებს თანამშრომლობას იუსტიციის სახლთან  და უმხსვილეს ავიაკომპანიასთან  სამოგზაურო დაზღვევის მიმართულებით",
            imgSrc: "/img/aboutUsPhotos/Rectangle 817.png"
        }, {
            text: "უნისონი აზღვევს ქვეყნის მასშტაბით უმსხვილეს ინდუსტრიულ ჯგუფს ჯორჯიან მანგანეზს",
            imgSrc: "/img/aboutUsPhotos/Rectangle 818.png"
        }, {
            text: "უნისონი ანაზღაურებს აღმოსავლეთ ევროპის მასშტაბით ერთ-ერთ ყველაზე მსხვილ ზარალს, 73 მლნ აშშ დოლარის ოდენობით",
            imgSrc: "/img/aboutUsPhotos/Rectangle 820.png"
        }, {
            text: " უნისონი უზრუნველყოფს პანდემიით გამოწვეული გამოწვევის ეფექტურად მართვას, ყველა სერვისის დისტანციურ მიწოდებას",
            imgSrc: "/img/aboutUsPhotos/Rectangle 819.png"
        }

    ]

    return (
        <>
            <Container>
                <div className="unisonToday d-flex flex-column">
                    <h4 className="text-primary align-self-center d-inline">უნისონის ისტორია</h4>
                    <div className="sliderArrowsWrapper align-self-end d-inline">
                        <LeftArrow className="sliderArrows mx-2 d-inline" onClick={() => moveSlider(-1)}/>
                        <RightArrow className="sliderArrows mx-2 d-inline" onClick={() => moveSlider(1)}/>
                    </div>
                </div>
                <div ref={sliderWrapper}
                     onMouseDown={startDragging}
                     onMouseUp={stopDragging}
                     onMouseLeave={stopDragging}
                     onMouseMove={mouseMove}
                     className="sliderWrapper d-block">
                    <Row className="d-flex flex-row flex-nowrap align-items-end">
                        {
                            sliderDataArr.map((card, index) => (
                                <Col xl={3} lg={4} md={6} sm={10} xs={10} className="sliderCardCols mx-xl-3 mx-xs-1" key={index}>
                                    <Card className="sliderCards px-md-2 p-lg-2 border-0 mx-xs-3">
                                        <p>{card.text}</p>
                                        <img src={card.imgSrc} alt="sliderImage" className="my-2"/>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </Container>
        </>
    )
}