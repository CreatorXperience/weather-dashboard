import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import createMockServer from "../mock/mockserver";

createMockServer();
test("render correctly", async () => {
  render(<App />);

  const weatherText = screen.getByText(/weather/i);
  const paragraph = await screen.findByText(/loading.../i);
  expect(paragraph).toBeInTheDocument();
  const listItem = await screen.findAllByRole("items");
  expect(listItem).toHaveLength(5);
  expect(weatherText).toBeInTheDocument();
  // await pause();
  screen.debug();
});
