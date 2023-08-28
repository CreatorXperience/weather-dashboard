import useFetchWeather from "../../hooks/useFetchWeather";
import Reports from "../report";

const ReportContext = () => {
  const { loading, weatherResult } = useFetchWeather();
  return <Reports loading={loading} weatherResult={weatherResult} />;
};

export default ReportContext;
