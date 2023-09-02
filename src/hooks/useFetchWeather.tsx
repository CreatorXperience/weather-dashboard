import { useEffect, useState } from "react";
import { fetchWeatherResults } from "../services/axios";
import { TOpenApiResponse } from "../type";

const useFetchWeather = () => {
  const [weatherResult, setWeatherResult] = useState<TOpenApiResponse | null>(
    null
  );

  const [searchTerm, setSearchTerm] = useState<string>("lagos");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        let data = await fetchWeatherResults(searchTerm);
        setWeatherResult(data);
        setLoading(false);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetch();
  }, [searchTerm]);

  return {
    loading,
    weatherResult,
    setSearchTerm,
  };
};

export default useFetchWeather;
