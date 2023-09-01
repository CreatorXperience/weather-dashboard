import axios from "axios";
import { API_KEY } from "../constants/credentials";

const fetchWeatherResults = async (city_name: string) => {
  let data = await axios.get(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city_name}&days=${5}`
  );

  return data.data;
};

const fetchCountryList = async () => {
  let data = await axios.get(`https://countriesnow.space/api/v0.1/countries`);
  console.log(data.data.data);
  return data.data.data;
};

// TODO: fix FetchCountry List function
export { fetchWeatherResults, fetchCountryList };
