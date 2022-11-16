import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";


export default function News(){


    return (
        <Container className="d-none d-md-block w-75 py-2" fluid>
            <h2 style={{fontFamily: "ExtraSquare", textAlign: "center", marginTop: "3rem"}}>სიახლეები</h2>
         <Row className="d-flex">
             <Col md={4}>
                <Card>
                    <img src="/img/newsThumbs/Thumb1.jpg"/>
                    <span className="py-4 px-4 fs-5">ქალაქგარეთ ცხოვრების 10 გავრცელებული მითი</span>
                    <span className="py-4 px-4 fw-light fs-6">6 ნოემბერი</span>
                </Card>
             </Col>
             <Col md={4}>
                 <Card>
                     <img src="/img/newsThumbs/Thumb2.jpg"/>
                     <span className="py-4 px-4 fs-5">ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან</span>
                     <span className="py-4 px-4 fw-light fs-6">28 ოქტომბერი</span>
                 </Card>
             </Col>
             <Col md={4}>
                 <Card>
                     <img src="/img/newsThumbs/Thumb3.jpg"/>
                     <span className="py-4 px-4 fs-5">ავტომობილის სალონის მოვლის თანამედროვე ხერხები</span>
                     <span className="py-4 px-4 fw-light fs-6">14 ოქტომბერი</span>
                 </Card>
             </Col>
         </Row>

        </Container>
    )
}