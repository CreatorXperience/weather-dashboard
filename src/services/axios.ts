import axios from "axios";
import { API_KEY } from "../constants/credentials";

const fetchWeatherResults = async (city_name: string) => {
  let data = await axios.get(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city_name}&days=${5}`
  );

  console.log(data);

  return data.data;
};

export default fetchWeatherResults;
