import useFetchWeather from "../../hooks/useFetchWeather";
import Reports from "../report";

const App = () => {
  const { loading, weatherResult } = useFetchWeather();

  return (
    <div>
      <p> Weather</p>
      {loading ? <p>loading...</p> : ""}
      <Reports weatherResult={weatherResult} />
    </div>
  );
};

export default App;
