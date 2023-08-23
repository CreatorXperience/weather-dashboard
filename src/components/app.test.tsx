import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import createMockServer from "../mock/mockserver";

createMockServer();

test("render correctly", async () => {
  render(<App />);

  const weatherText = screen.getByText(/weather/i);

  const listItem = screen.getAllByRole("items");
  expect(listItem).toHaveLength(5);

  // expect(listItem).toHaveLength(2);
  expect(weatherText).toBeInTheDocument();
  // await pause();
  screen.debug();
});

// let pause = () =>
//   new Promise((resolve) => {
//     setTimeout(resolve, 100);
//   });
