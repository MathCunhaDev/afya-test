import { render, screen } from "@testing-library/react";
import { Select } from "./index";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

test("renders the Select component with label and options", () => {
  const { getByTestId } = render(
    <Select
      id="selectId"
      label="Select Label"
      placeholder="Select an option"
      options={options}
    />
  );

  const labelElement = screen.getByLabelText("Select Label");
  const selectElement = getByTestId("select");

  expect(labelElement).toBeInTheDocument();
  expect(selectElement).toBeInTheDocument();
});
