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

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        let data = await fetchWeatherResults("nigeria");

        setWeatherResult(data);
        setLoading(true);
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
          <li aria-role="items" key={result.date}>
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
      {loading ? <p>loading...</p> : ""}

      <ul>{mapContent()}</ul>
    </div>
  );
};

export default App;
