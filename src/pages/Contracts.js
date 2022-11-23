import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import {Accordion} from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import './contracts.scss';
// import NavbarBackground from '/img/mainNavbarBackground@2x.png';

export default function Contracts() {
    // const mainNavbarBgImage = {backgroundImage: `url(${NavbarBackground})`}

    return (
        <>
            <TopNavbar showButton={false}/>
            <MainNavbar showButton={true} className='navbarBgColorStriped'/>
            <div className="d-flex justify-content-center">
                <div className="text-secondary w-75">
                    <h3 className="my-5">ხელშეკრულებები</h3>
                    <p style={{fontFamily: "BPGArial"}}>საიტზე მოცემული ყველა დაზღვევის პირობა დეპონირებულია ნოტარიუსის
                        მიერ.
                        სურვილის შემთხვევაში შესაძლებელია, ეწვიოთ ნოტარიუსს დოკუმენტაციის სანახავად.
                        ნოტარიუსის მისამართი და სანოტარო აქტი მოცემულია თითოეული სადაზღვევო პირობის გასწვრივ.</p>
                    <Accordion defaultActiveKey={['0']} alwaysOpen> {/*alwaysOpen (?) optional as well as defaultActiveKey*/}
                        <Accordion.Item eventKey="0">
                            <Accordion.Header style={{fontFamily: "ExtraSquare"}}>კატეგორიის სახელწოდება 1</Accordion.Header>
                            <Accordion.Body >
                                <div className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file1" value="file1" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file2" value="file2" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file3" value="file3" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file4" value="file4" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header style={{fontFamily: "ExtraSquare"}}>კატეგორიის სახელწოდება 2</Accordion.Header>
                            <Accordion.Body >
                                <div className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file1" value="file1" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file2" value="file2" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file3" value="file3" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file4" value="file4" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header style={{fontFamily: "ExtraSquare"}}>კატეგორიის სახელწოდება 3</Accordion.Header>
                            <Accordion.Body >
                                <div className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file1" value="file1" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file2" value="file2" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file3" value="file3" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file4" value="file4" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header style={{fontFamily: "ExtraSquare"}}>კატეგორიის სახელწოდება 4</Accordion.Header>
                            <Accordion.Body >
                                <div className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file1" value="file1" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file2" value="file2" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file3" value="file3" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file4" value="file4" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header style={{fontFamily: "ExtraSquare"}}>კატეგორიის სახელწოდება 5</Accordion.Header>
                            <Accordion.Body >
                                <div className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file1" value="file1" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file2" value="file2" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file3" value="file3" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file4" value="file4" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header style={{fontFamily: "ExtraSquare"}}>კატეგორიის სახელწოდება 6</Accordion.Header>
                            <Accordion.Body >
                                <div className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file1" value="file1" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file2" value="file2" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file3" value="file3" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file4" value="file4" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header style={{fontFamily: "ExtraSquare"}}>კატეგორიის სახელწოდება 7</Accordion.Header>
                            <Accordion.Body >
                                <div className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file1" value="file1" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file2" value="file2" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file3" value="file3" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file4" value="file4" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header style={{fontFamily: "ExtraSquare"}}>კატეგორიის სახელწოდება 8</Accordion.Header>
                            <Accordion.Body >
                                <div className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file1" value="file1" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file2" value="file2" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file3" value="file3" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                                <div  className="my-2 d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" name="file4" value="file4" className="mx-2">
                                        </input>
                                        <span className="mx-3 text-secondary">File_name_description.pdf</span>
                                    </label>
                                    <Button variant="light">
                                        <img src="/img/file_download_black_24dp.svg"/>
                                        გადმოწერა
                                    </Button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <Footer/>
        </>
    )
}