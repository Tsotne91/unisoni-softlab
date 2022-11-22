import {Col, Container, Row} from "react-bootstrap";
import "../custom.scss";

export default function Footer() {
    return (
        <>
            <Container className="d-none d-md-flex justify-content-center">
                <Row className="w-100 justify-content-center py-3 fs-6">
                    <Col md={3} className="py-3 my-4">
                        <img src="/img/footerIcons/LogoFooter.svg"/>
                        <p style={{marginTop: "3rem"}}>ჩვენს შესახებ</p>
                        <p>კარიერა</p>
                        <p>პარტნიორები</p>
                        <img className="d-inline my-2" src="/img/footerIcons/AppStoreLogo.svg"/>
                        <img className="d-inline m2" src="/img/footerIcons/google-play-badge.png"/>
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
                        <div><img className="d-inline p-2"
                                  src="/img/footerIcons/f_logo_RGB-Blue_72.png"/><span>Facebook</span></div>
                        <div><img className="d-inline p-2" src="/img/footerIcons/Instagram_Glyph_Gradient_RGB.png"/>
                            <span>Instagram</span></div>
                        <div><img className="d-inline p-2" src="/img/footerIcons/Image 7.png"/> <span>LinkedIn</span>
                        </div>
                        <div><img className="d-inline p-2" src="/img/footerIcons/yt_icon_rgb.png"/> <span>Youtube</span>
                        </div>

                    </Col>

                </Row>

            </Container>
            <footer className="d-block d-md-none text-secondary" style={{fontFamily: "BPGArial"}}>
                <Container className="m-2 px-2 d-flex">
                    <Row>
                        <div className="w-100">
                            <img className="w-50 my-4" src="/img/footerIcons/LogoFooter.svg"/>
                        </div>
                        <Col xs={6} className="w-50 my-1">
                            <a>ჩვენს შესახებ</a>
                            <a>პარტნიორები</a>
                        </Col>
                        <Col xs={6} className="w-50">
                            <a>კარიერა</a>
                        </Col>
                        <h6 className="fw-bold my-2">ინფორმაცია</h6>
                        <Col xs={6} className="w-50">
                            <a>სიახლეები</a>
                            <a>საინფორმაციო ფურცელი</a>
                        </Col>
                        <Col xs={6} className="w-50">
                            <a>ხელშეკრულებები</a>
                            <a>სამედიცინო პროვაიდერები</a>
                        </Col>
                        <h6 className="fw-bold my-2">დახმარება</h6>
                        <Col xs={6} className="w-50 my-1">
                            <a>კონტაქტი</a>
                            <a>მომხმარებლის ხმა</a>
                        </Col>
                        <Col xs={6} className="w-50">
                            <a>მონაცემთა დაცვა</a>
                            <a>ხშირად დასმული კითხვები</a>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col xs={6}>
                            <img src="/img/footerIcons/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"/>
                        </Col>
                        <Col xs={6}>
                            <img src="/img/footerIcons/google-play-badge.png"/>
                        </Col>
                    </Row>
                </Container>
                <Container className="my-3">
                    <Row>
                        <Col xs={6} className="w-50">
                            <div>
                                <img className="d-inline p-2" src="/img/footerIcons/f_logo_RGB-Blue_72.png"/>
                                <span>Facebook</span>
                            </div>
                            <div>
                                <img className="d-inline p-2" src="/img/footerIcons/yt_icon_rgb.png"/>
                                <span>Youtube</span>
                            </div>
                        </Col>
                        <Col xs={6} className="w-50">
                            <div>
                                <img className="d-inline p-2" src="/img/footerIcons/Instagram_Glyph_Gradient_RGB.png"/>
                                <span>Instagram</span>
                            </div>
                            <div>
                                <img className="d-inline p-2" src="/img/footerIcons/Image 7.png"/>
                                <span>LinkedIn</span>
                            </div>
                        </Col>
                    </Row>
                    <Row className="copyright my-3"><span>უნისონი © ყველა უფლება დაცულია, 2021</span></Row>
                </Container>

            </footer>
        </>
    )
}
