import useFetchWeather from "../../hooks/useFetchWeather";
import Reports from "../report";

const ReportContext = () => {
  const { loading, weatherResult, setSearchTerm } = useFetchWeather();

  return (
    <Reports
      setTerm={setSearchTerm}
      loading={loading}
      weatherResult={weatherResult}
    />
  );
};

export default ReportContext;
