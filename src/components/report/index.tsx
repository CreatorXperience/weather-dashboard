import { TOpenApiResponse } from "../../type";
import CountryCard from "../Card/countrycard";
import ReportsWrapper from "./reportwrapper";

type TReportProps = {
  weatherResult: TOpenApiResponse | null;
  loading: boolean;
};
const Reports = ({ weatherResult }: TReportProps) => {
  return (
    <ReportsWrapper>
      <div className="reports-container">
        <div className="report-text">Weather Reports</div>
        <div className="card-wrapper">
          <CountryCard data={weatherResult} />
        </div>
      </div>
    </ReportsWrapper>
  );
};

export default Reports;
