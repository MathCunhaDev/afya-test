import React from "react";
import { render, screen, within } from "@testing-library/react";
import { Select } from "~components/"; // Update with the correct import path
import { IOption } from "~models/IPayment";

describe("Select component", () => {
  const options: IOption[] = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  // Custom text matcher function
  const optionMatcher = (content: string, element: HTMLElement | null) =>
    element?.tagName.toLowerCase() === "option" &&
    content.includes(element.textContent || "");

  it("renders the Select component", () => {
    const mockOnChange = jest.fn();
    render(
      <Select
        id="testSelect"
        options={options}
        placeholder="Select an option"
        label="Select Label"
        error={undefined}
        onChange={mockOnChange}
      />
    );

    // Check if the label is rendered
    expect(screen.getByText("Select Label")).toBeInTheDocument();

    // Check if the select element is rendered
    const selectElement = screen.getByTestId("select") as HTMLSelectElement;
    expect(selectElement).toBeInTheDocument();

    // Check if the options are rendered within the select element
    options.forEach((option) => {
      const optionElement = within(selectElement).getByText(
        option.label,
        optionMatcher
      );
      expect(optionElement).toBeInTheDocument();
    });

    // You can add additional checks as needed
  });
});
