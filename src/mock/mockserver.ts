import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom";

const createMockServer = () => {
  const requestHandler = rest.get(
    `http://api.weatherapi.com/v1/forecast.json`,
    // @ts-ignore
    (req, res, ctx) => {
      return res(
        ctx.json({
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

  return requestHandler;
};

export default createMockServer;
