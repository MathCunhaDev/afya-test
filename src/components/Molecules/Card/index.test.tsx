import { render, screen, fireEvent } from "@testing-library/react";
import { Card } from "./index";

const mockCardData = {
  id: 1,
  title: "Sample Card",
  fullPrice: "1000.00",
  bestPrice: "800.00",
  discount: "20%",
  installments: 12,
  installmentPrice: "66.67",
  installmentType: "mensais",
  paymentType: 1,
  handleClick: jest.fn(),
};

test("renders the Card component with correct data", () => {
  render(<Card {...mockCardData} />);

  const titleElement = screen.getByText(/Sample Card | mensais/);
  const priceElement = screen.getByText(/De R\$ 1000.00 | Por R\$ 800.00/);
  const discountElement = screen.getByText(/20%/);
  const installmentsElement = screen.getByText(/12x de R\$ 66.67\/mês/);

  expect(titleElement).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();
  expect(discountElement).toBeInTheDocument();
  expect(installmentsElement).toBeInTheDocument();
});

test("calls handleClick function when RadioButton is clicked", () => {
  render(<Card {...mockCardData} />);

  const radioButton = screen.getByRole("radio");
  fireEvent.click(radioButton);

  expect(mockCardData.handleClick).toHaveBeenCalledTimes(1);
  expect(mockCardData.handleClick).toHaveBeenCalledWith({
    id: mockCardData.id,
    installments: mockCardData.installments,
  });
});
