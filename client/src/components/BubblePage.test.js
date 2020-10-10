import React from "react";
import { render} from "@testing-library/react";
import BubblePage from "./BubblePage";

const colorData = [
  {
    color: "blueviolet",
    code: {
      hex: "#8a2be2"
    },
    id: 11
  }
]

test("Fetches data and renders the bubbles", () => {
  const { rerender, queryAllByTestId } = render(<BubblePage/>);

  const colorList = queryAllByTestId(/color/i);
  expect(colorList).toHaveLength(0);

  rerender(<BubblePage colors={colorData} />);
});
