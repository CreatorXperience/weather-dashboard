import { TOpenApiResponse } from "../../type";

type TReportProps = {
  weatherResult: TOpenApiResponse | null;
  loading: boolean;
};
const Reports = ({ weatherResult, loading }: TReportProps) => {
  return (
    <div>
      {loading ? <p> Loading</p> : ""}
      <ul>
        {weatherResult ? (
          weatherResult.forecast.forecastday.map((result) => {
            return (
              <li role="items" key={result.date}>
                {result.date}
              </li>
            );
          })
        ) : (
          <p role="empty"> No data </p>
        )}
      </ul>
    </div>
  );
};

export default Reports;
