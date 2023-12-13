import { render } from "@testing-library/react";
import { Input } from "./index";

test("renders the Input component with label and placeholder", () => {
  const { getByTestId, getByPlaceholderText } = render(
    <Input id="username" label="Username" placeholder="Enter your username" />
  );

  const inputElement = getByPlaceholderText("Enter your username");
  const labelElement = getByTestId("label");

  expect(inputElement).toBeInTheDocument();
  expect(labelElement).toBeInTheDocument();
  expect(labelElement).toHaveAttribute("for", "username");
  expect(inputElement.id).toBe("username");
});
