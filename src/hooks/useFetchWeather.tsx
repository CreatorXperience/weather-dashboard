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
      let data = await fetchWeatherResults(2, "nigeria");
      console.log(data);
      setWeatherResult(data);
    };

    fetch();
  }, []);

  return {
    weatherResult,
  };
};

export default useFetchWeather;
