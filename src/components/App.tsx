import { useEffect, useState } from "react";
import fetchWeatherResults from "../services/axios";

type TOpenApiResponse = {
  data: {
    forecast: {
      forecastday: {
        date: string;
      }[];
    };
  };
};
const App = () => {
  const [weatherResult, setWeatherResult] = useState<TOpenApiResponse | null>(
    null
  );

  useEffect(() => {
    const fetch = async () => {
      try {
        let data = await fetchWeatherResults("nigeria");
        setWeatherResult(data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetch();
  }, []);

  const mapContent = () => {
    const ListedItem = weatherResult?.data.forecast?.forecastday.map(
      (result) => {
        return (
          <li role="items" key={result.date}>
            {result.date}
          </li>
        );
      }
    );

    return ListedItem;
  };
  return (
    <div>
      <p> Weather</p>

      <ul>{mapContent()}</ul>
    </div>
  );
};

export default App;
