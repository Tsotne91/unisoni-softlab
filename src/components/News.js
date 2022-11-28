import {Card, Col, Container, Row} from "react-bootstrap";


export default function News() {


    return (
        <>
            <Container className="d-none d-md-block w-75 py-2" fluid>
                <h2 style={{fontFamily: "ExtraSquare", textAlign: "center", marginTop: "3rem"}}>სიახლეები</h2>
                <Row className="d-flex">
                    <Col md={4}>
                        <Card>
                            <img src="/img/newsThumbs/Rectangle%2024@2x.png" alt="newsImage"/>
                            <span className="py-4 px-4 fs-5">ქალაქგარეთ ცხოვრების 10 გავრცელებული მითი</span>
                            <span className="py-4 px-4 fw-light fs-6">6 ნოემბერი</span>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <img src="/img/newsThumbs/Rectangle%2027@2x.png" alt="newsImage"/>
                            <span className="py-4 px-4 fs-5">ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან</span>
                            <span className="py-4 px-4 fw-light fs-6">28 ოქტომბერი</span>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <img src="/img/newsThumbs/Rectangle%2029.png" alt="newsImage"/>
                            <span className="py-4 px-4 fs-5">ავტომობილის სალონის მოვლის თანამედროვე ხერხები</span>
                            <span className="py-4 px-4 fw-light fs-6">14 ოქტომბერი</span>
                        </Card>
                    </Col>
                </Row>

            </Container>
            <Container className="newsMobile d-block d-md-none"> {/*horizontal mobile scroll needs to be implemented properly*/}
                <h2>სიახლეები</h2>
                <div className="overflow-scroll">
                    <Row className="d-flex flex-row flex-nowrap">
                        <Col md={4}>
                            <Card>
                                <img src="/img/newsThumbs/Rectangle%2024.png" alt="newsImage"/>
                                <span className="py-4 px-4 fs-5">ქალაქგარეთ ცხოვრების 10 გავრცელებული მითი</span>
                                <span className="py-4 px-4 fw-light fs-6">6 ნოემბერი</span>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <img src="/img/newsThumbs/Rectangle 27.png" alt="newsImage"/>
                                <span className="py-4 px-4 fs-5">ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან</span>
                                <span className="py-4 px-4 fw-light fs-6">28 ოქტომბერი</span>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <img src="/img/newsThumbs/Rectangle%2029.png" alt="newsImage"/>
                                <span className="py-4 px-4 fs-5">ავტომობილის სალონის მოვლის თანამედროვე ხერხები</span>
                                <span className="py-4 px-4 fw-light fs-6">14 ოქტომბერი</span>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}