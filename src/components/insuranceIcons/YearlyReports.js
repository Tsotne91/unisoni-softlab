import {Container, Form} from "react-bootstrap";
import {useRef, useState} from "react";

export default function YearlyReports({className}){

    const [selectedYear, setSelectedYear] = useState("2022");
    const selectElement = useRef();

    const selectYear = () => {

    }

    return (
        <>
            {/*MobileVersion:*/}
            <div className={`${className} d-flex d-md-none bg-light flex-wrap justify-content-center rounded-3 m-3 py-4`}>
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
            {/*DesktopVersion:*/}
            <Container className={`${className} d-none d-md-flex flex-column bg-light rounded-4 border border-dark my-5 py-4 w-50`}>
                <h3 className="text-primary align-self-center">წლიური ანგარიშები</h3>
                <Form.Select aria-label="yearly-reports"
                             className="w-50 align-self-center my-3"
                             onChange={selectYear}
                             ref={selectElement}
                >
                    <option value="2022">{selectedYear.value}</option>
                    <option value="2021">{selectedYear.value}</option>
                    <option value="2020">{selectedYear.value}</option>
                </Form.Select>

            </Container>

        </>
    )
}