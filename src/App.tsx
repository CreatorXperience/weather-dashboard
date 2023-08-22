import fetchWeatherResults from "./services/axios";
import { useEffect, useState } from "react";

const App = () => {
  const [weatherResult, setWeatherResult] = useState<{}>();

  useEffect(() => {
    let data = fetchWeatherResults(2, "nigeria");
    console.log(data);
    setWeatherResult(data);
  }, []);
  {
    console.log(weatherResult);
  }

  return <div></div>;
};

export default App;
