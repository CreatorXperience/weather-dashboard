import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from ".";
// import createMockServer from "../../mock/mockserver";

// createMockServer();
test("render correctly", async () => {
  render(<App />);

  const weatherText = screen.getByText(/weather/i);
  const loadingText = await screen.findByText(/loading.../i);
  expect(loadingText).toBeInTheDocument();

  expect(weatherText).toBeInTheDocument();
  // await pause();
  // screen.debug();
});
