import { screen, render } from "@testing-library/react";
import Reports from ".";

test("renders empty reports to the user", async () => {
  const Result = {
    forecast: {
      forecastday: [
        {
          date: "09-01-2015",
        },
      ],
    },
  };
  render(<Reports weatherResult={Result} />);

  const listItem = await screen.findAllByRole("items");
  expect(listItem).toHaveLength(1);
});
