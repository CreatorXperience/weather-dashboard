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

    render(<Reports loading={false} weatherResult={Result} />);

    const listItem = await screen.findAllByRole("items");
    expect(listItem).toHaveLength(2);
    expect(
      screen.queryByRole("paragraph", { name: "loading" })
    ).not.toBeInTheDocument();
    screen.debug();
  });

  test("renders weather reports to the user", async () => {
    const Result = null;

    render(<Reports loading={true} weatherResult={Result} />);

    const listItem = await screen.findByRole("empty");
    expect(listItem).toBeInTheDocument();

    screen.debug();
  });
});
