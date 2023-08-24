import { TOpenApiResponse } from "../../type";

type TReportProps = {
  weatherResult: TOpenApiResponse | null;
};
const Reports = ({ weatherResult }: TReportProps) => {
  return (
    <div>
      <ul>
        {weatherResult &&
          weatherResult.forecast.forecastday.map((result) => {
            return (
              <li role="items" key={result.date}>
                {result.date}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Reports;
