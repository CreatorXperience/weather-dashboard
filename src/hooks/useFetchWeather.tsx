import { useEffect, useState } from "react";
import fetchWeatherResults from "../services/axios";

type TWeatherData = {
  astro: {};
  date: string;
  date_epoch: number;
  day: {};
  hour: {}[];
};

const useFetchWeather = () => {
  const [weatherResult, setWeatherResult] = useState<TWeatherData[]>();

  useEffect(() => {
    const fetch = async () => {
      let data = await fetchWeatherResults("nigeria");
      console.log(data.data.forecastday);
      setWeatherResult(data.data);
    };

    fetch();
  }, []);

  return {
    weatherResult,
  };
};

export default useFetchWeather;
