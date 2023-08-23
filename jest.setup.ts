import { setupServer } from "msw/node";
import createMockServer from "./src/mock/mockserver";

let { requestHandler } = createMockServer();

const server = setupServer(requestHandler);
beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
