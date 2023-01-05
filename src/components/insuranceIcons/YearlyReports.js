import {Form} from "react-bootstrap";

export default function YearlyReports({className}){
    return (
        <>
            <div className={`${className} mobileYearlyReports bg-light flex-wrap justify-content-center rounded-3 m-3 py-4`}>
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

        </>
    )
}