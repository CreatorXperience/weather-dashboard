import { useEffect, useState } from "react";
import fetchWeatherResults from "../services/axios";
import { TOpenApiResponse } from "../type";

const useFetchWeather = () => {
  const [weatherResult, setWeatherResult] = useState<TOpenApiResponse | null>(
    null
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        let data = await fetchWeatherResults("nigeria");
        console.log(data);
        setWeatherResult(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    fetch();
  }, []);

  return {
    loading,
    weatherResult,
  };
};

export default useFetchWeather;
