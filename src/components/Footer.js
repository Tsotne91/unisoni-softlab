import {Col, Container, Row} from "react-bootstrap";
import "../custom.scss";

export default function Footer() {
    return (
        <>
            <Container className="footerDesktop w-75 d-none d-md-flex justify-content-center text-secondary">
                <Row className="w-100 justify-content-center py-3 fs-6">
                    <Col md={3} className="py-3 my-4">
                        <img src="/img/footerIcons/LogoFooter.svg"/>
                        <a className="aboutUsLink" href="/about-us">ჩვენს შესახებ</a>
                        <a  href="/career">კარიერა</a>
                        <a>პარტნიორები</a>
                        <img className="d-inline my-2" src="/img/footerIcons/AppStoreLogo.svg" alt="appStore"/>
                        <img className="d-inline m-2" src="/img/footerIcons/google-play-badge.png" alt="googlePlay"/>
                    </Col>
                    <Col md={3} className="py-3 my-4">
                        <p className="fw-bold">ინფორმაცია</p>
                        <a>სიახლეები</a>
                        <a>საინფორმაციო ფურცელი</a>
                        <a>სამედიცინო პროვაიდერები</a>
                        <a href="/contracts"> ხელშეკრულებები</a>
                        <p className="copyright">უნისონი © ყველა უფლება დაცულია 2021</p>
                    </Col>
                    <Col md={3} className="py-3 my-4">
                        <p className="fw-bold">დახმარება</p>
                        <a href="/contact-us">კონტაქტი</a>
                        <a href="/feedback">მომხმარებლის ხმა</a>
                        <a>ხშირად დასმული კითხვები</a>
                        <a>მონაცემთა დაცვა</a>
                    </Col>
                    <Col md={3} className="p-3 my-4">
                        <h6 className="fw-bold fs-6">სოციალური ქსელები</h6>
                        <div><img className="d-inline p-2"
                                  src="/img/footerIcons/f_logo_RGB-Blue_72.png" alt="FB"/><span>Facebook</span></div>
                        <div><img className="d-inline p-2" src="/img/footerIcons/Instagram_Glyph_Gradient_RGB.png" alt="Instagram"/>
                            <span>Instagram</span></div>
                        <div><img className="d-inline p-2" src="/img/footerIcons/Image 7.png" alt="LI"/> <span>LinkedIn</span>
                        </div>
                        <div><img className="d-inline p-2" src="/img/footerIcons/yt_icon_rgb.png" alt="YT"/> <span>Youtube</span>
                        </div>

                    </Col>

                </Row>

            </Container>
            <footer className="d-block d-md-none text-secondary">
                <Container className="m-2 px-2 d-flex">
                    <Row>
                        <div className="w-100">
                            <img className="w-50 my-4" src="/img/footerIcons/LogoFooter.svg" alt="logo"/>
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
                            <a href="/contact-us">კონტაქტი</a>
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
                            <img src="/img/footerIcons/AppStoreLogo.svg" alt="appStore"/>
                        </Col>
                        <Col xs={6}>
                            <img src="/img/footerIcons/google-play-badge.png" alt="googlePlay"/>
                        </Col>
                    </Row>
                </Container>
                <Container className="my-3">
                    <Row>
                        <Col xs={6} className="w-50">
                            <div>
                                <img className="d-inline p-2" src="/img/footerIcons/f_logo_RGB-Blue_72.png" alt="fLogo"/>
                                <span>Facebook</span>
                            </div>
                            <div>
                                <img className="d-inline p-2" src="/img/footerIcons/yt_icon_rgb.png" alt="ytLogo"/>
                                <span>Youtube</span>
                            </div>
                        </Col>
                        <Col xs={6} className="w-50">
                            <div>
                                <img className="d-inline p-2" src="/img/footerIcons/Instagram_Glyph_Gradient_RGB.png" alt="instLogo"/>
                                <span>Instagram</span>
                            </div>
                            <div>
                                <img className="d-inline p-2" src="/img/footerIcons/Image 7.png" alt="ldLogo"/>
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
