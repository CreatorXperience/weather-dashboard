import { TOpenApiResponse } from "../../type";
import CountryCard from "../Card/countrycard";
import D3Timeline from "../D3Timeline";
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

        <div className="report-text">Weather Statistics</div>

        <D3Timeline chartData={weatherResult?.forecast.forecastday} />
      </div>
    </ReportsWrapper>
  );
};

export default Reports;
