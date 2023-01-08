import {Container, Form} from "react-bootstrap";
import {useState} from "react";

export default function YearlyReports({className}) {


    const [selectedYear, setSelectedYear] = useState("2022");

    const selectYear = (event) => setSelectedYear(event.target.value);


    return (
        <>
            {/*MobileVersion:*/}
            <div
                className={`${className} d-flex d-md-none bg-light flex-wrap justify-content-center rounded-3 m-3 py-4`}>
                <h3 className="text-primary">წლიური ანგარიშები</h3>
                <Form.Select name="yearly-report" className="w-50 my-2">
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </Form.Select>
                <div className="w-100 d-flex">
                    <img src="./img/insuranceIcons/Group 240.svg" alt="icon"/>
                    <span className="align-self-center">File_name_description_3.pdf</span>
                    <img src="./img/insuranceIcons/file_download_black_24dp.svg" alt="icon" className="downIcon px-2"/>
                </div>
                <div className="w-100 d-flex">
                    <img src="./img/insuranceIcons/Group 240.svg" alt="icon"/>
                    <span className="align-self-center">File_name_description_3.pdf</span>
                    <img src="./img/insuranceIcons/file_download_black_24dp.svg" alt="icon" className="downIcon px-2"/>
                </div>
                <div className="w-100 d-flex">
                    <img src="./img/insuranceIcons/Group 240.svg" alt="icon"/>
                    <span className="align-self-center">File_name_description_3.pdf</span>
                    <img src="./img/insuranceIcons/file_download_black_24dp.svg" alt="icon" className="downIcon px-2"/>
                </div>
            </div>
            {/*DesktopVersion: should disable borders and think how to apply wallpaper to the AboutUs page*/}
            <Container className={`${className} d-none d-md-flex flex-column bg-light rounded-4 border border-dark my-5 py-4`}>
                <h3 className="text-primary align-self-center">წლიური ანგარიშები</h3>
                <Form.Select aria-label="yearly-reports"
                             className="w-25 align-self-center my-3"
                             onChange={selectYear}
                             value={selectedYear}
                >
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </Form.Select>
                <div className="downloadReports d-flex justify-content-center">
                    <div className="border border-dark rounded-2 text-center px-5 py-2 mx-2">
                        <img src="./img/insuranceIcons/Group 240.svg" alt="icon"/>
                        <h6>I კვარტალი</h6>
                        <p className="text-secondary">{selectedYear} წელი</p>
                        <button><img src="./img/insuranceIcons/file_download_black_24dp.svg" alt="download"/>გადმოწერა</button>
                    </div>
                    <div className="border border-dark rounded-2 text-center px-5 py-2 mx-2">
                        <img src="./img/insuranceIcons/Group 240.svg" alt="icon"/>
                        <h6>II კვარტალი</h6>
                        <p className="text-secondary">{selectedYear} წელი</p>
                        <button><img src="./img/insuranceIcons/file_download_black_24dp.svg" alt="download"/>გადმოწერა</button>
                    </div>
                    <div className="border border-dark rounded-2 text-center px-5 py-2 mx-2">
                        <img src="./img/insuranceIcons/Group 240.svg" alt="icon"/>
                        <h6>III კვარტალი</h6>
                        <p className="text-secondary">{selectedYear} წელი</p>
                        <button><img src="./img/insuranceIcons/file_download_black_24dp.svg" alt="download"/>გადმოწერა</button>
                    </div>
                </div>
            </Container>

        </>
    )
}