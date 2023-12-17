import { render, screen } from "@testing-library/react";
import { Input } from "./index";

describe("Input component", () => {
  it("renders the Input component", () => {
    render(
      <Input
        label="Test Label"
        id="test"
        placeholder="Enter text"
        error={null}
      />
    );

    expect(screen.getByTestId("label")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });
});
