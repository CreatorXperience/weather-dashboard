import { rest } from "msw";
import { API_KEY } from "../constants/credentials";

let city_name = "nigeria";
const createMockServer = () => {
  rest.get(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city_name}&days=${5}`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json([{}]));
    }
  );
};

export default createMockServer;
