import { rest } from "msw";
// import { API_KEY } from "../constants/credentials";
import { setupServer } from "msw/node";

// let city_name = "ghana";

const createMockServer = () => {
  const requestHandler = rest.get(
    `http://api.weatherapi.com/v1/forecast.json`,
    // @ts-ignore
    (req, res, ctx) => {
      return res(
        ctx.json({
          data: {
            forecast: {
              forecastday: [
                {
                  date: "2021-09-20",
                },
                {
                  date: "2021-09-20",
                },
                {
                  date: "2021-09-20",
                },
                {
                  date: "2021-09-20",
                },
                {
                  date: "2021-09-20",
                },
              ],
            },
          },
        })
      );
    }
  );

  const server = setupServer(requestHandler);
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });
};

export default createMockServer;
