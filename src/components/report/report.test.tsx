import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Reports from ".";

describe("weather report", () => {
  test("renders weather reports to the user", async () => {
    const Result = {
      forecast: {
        forecastday: [
          {
            date: "09-01-2015",
          },
          {
            date: "09-01-2015",
          },
        ],
      },
    };

    render(<Reports weatherResult={Result} />);

    const listItem = await screen.findAllByRole("items");
    expect(listItem).toHaveLength(2);
    screen.debug();
  });

  test("renders weather reports to the user", async () => {
    const Result = null;

    render(<Reports weatherResult={Result} />);

    const listItem = await screen.findByRole("empty");
    expect(listItem).toBeInTheDocument();
    screen.debug();
  });
});
