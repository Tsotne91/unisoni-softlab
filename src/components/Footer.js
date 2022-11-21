import {Col, Container, Row} from "react-bootstrap";

export default function Footer() {
    return (
        <>
            <Container className="d-none d-md-flex justify-content-center">
                <Row className="w-100 justify-content-center py-3 fs-6">
                    <Col md={3} className="py-3 my-4">
                        <img src="/img/footerIcons/LogoFooter.svg"/>
                        <p style={{marginTop:"3rem"}}>ჩვენს შესახებ</p>
                        <p>კარიერა</p>
                        <p>პარტნიორები</p>
                        <img className="d-inline" src="/img/footerIcons/AppStoreLogo.svg"/>
                        <img className="d-inline" src="/img/footerIcons/google-play-badge.png"/>
                    </Col>
                    <Col md={3} className="py-3 my-4">
                        <p className="fw-bold">ინფორმაცია</p>
                        <p>სიახლეები</p>
                        <p>საინფორმაციო ფურცელი</p>
                        <p>სამედიცინო პროვაიდერები</p>
                        <p>ხელშეკრეულებები</p>
                        <p style={{marginTop: "3rem", fontSize: "0.7rem"}}>უნისონი © ყველა უფლება დაცულია 2021</p>
                    </Col>
                    <Col md={3} className="py-3 my-4">
                        <p className="fw-bold">დახმარება</p>
                        <p>კონტაქტი</p>
                        <p>მომხმარებლის ხმა</p>
                        <p>ხშირად დასმული კითხვები</p>
                        <p>მონაცემთა დაცვა</p>
                    </Col>
                    <Col md={3} className="p-3 my-4">
                        <h6 className="fw-bold fs-6">სოციალური ქსელები</h6>
                        <div> <img className="d-inline p-2" src="/img/footerIcons/f_logo_RGB-Blue_72.png"/><span>Facebook</span></div>
                        <div><img className="d-inline p-2" src="/img/footerIcons/Instagram_Glyph_Gradient_RGB.png"/> <span>Instagram</span></div>
                        <div><img className="d-inline p-2" src="/img/footerIcons/Image 7.png"/> <span>LinkedIn</span></div>
                        <div><img className="d-inline p-2" src="/img/footerIcons/yt_icon_rgb.png"/> <span>Youtube</span> </div>

                    </Col>

                </Row>

            </Container>
            <Container className="d-flex my-3 d-md-none">
                <Row>
                    <Col md={6} className="border border-2">
                        <img className="w-50" src="/img/footerIcons/LogoFooter.svg"/>
                        <a>ჩვენს შესახებ</a>
                        <a>პარტნიორები</a>
                        <a>კარიერა</a>
                    </Col>
                    <Col md={6}>
                        <h6 className="fw-bold">ინფორმაცია</h6>
                        <a>სიახლეები</a>
                        <a>საინფორმაციო ფურცელი</a>
                        <a>სამედიცინო პროვაიდერები</a>
                        <a>ხელშეკრულებები</a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
