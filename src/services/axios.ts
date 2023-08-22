import axios from "axios";
import { API_KEY } from "../constants/credentials";

const fetchWeatherResults = async (count: number, city_name: string) => {
  let data = await axios.get(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city_name}&days=${5}`
  );

  return data.data.forecast.forecastday;
};

export default fetchWeatherResults;
