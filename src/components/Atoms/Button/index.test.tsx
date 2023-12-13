import { render } from "@testing-library/react";
import { Button } from "./index";

test("renders a button with the provided children", () => {
  const { getByText } = render(<Button>Click me</Button>);
  const buttonElement = getByText("Click me");

  expect(buttonElement).toBeInTheDocument();
});
