import { render, screen, fireEvent } from "@testing-library/react";
import { Card } from "./index"; // Assuming your component file is named Card.tsx

const mockCardData = {
  id: 1,
  title: "Sample Card",
  fullPrice: "1.000,00",
  bestPrice: "800,00",
  discount: "20%",
  installments: 12,
  installmentPrice: "66,67",
  installmentType: "mensais",
  paymentType: 1,
  handleClick: jest.fn(),
};

describe("Card component", () => {
  test("renders the Card component with correct data", () => {
    render(<Card {...mockCardData} />);

    const titleElement = screen.getByText(/Sample Card | mensais/);
    const priceElement = screen.getByText(/De R\$ 1.000,00 | Por R\$ 800,00/);
    const discountElement = screen.getByText(/20%/);
    const installmentsElement = screen.getByText(/12x de R\$ 66,67\/mês/);

    expect(titleElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(discountElement).toBeInTheDocument();
    expect(installmentsElement).toBeInTheDocument();
  });

  test("calls handleClick function when RadioButton is clicked", () => {
    const mockHandleClick = jest.fn();

    render(<Card {...mockCardData} handleClick={mockHandleClick} />);

    fireEvent.click(screen.getByTestId("radioButton"));

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
    expect(mockHandleClick).toHaveBeenCalledWith({
      id: mockCardData.id,
      installments: mockCardData.installments,
      title: mockCardData.title,
      installmentType: mockCardData.installmentType,
      bestPrice: mockCardData.bestPrice,
      installmentPrice: mockCardData.installmentPrice,
    });
  });

  test("RadioButton is checked when paymentType matches id", () => {
    render(<Card {...mockCardData} />);

    const radioButton = screen.getByTestId("radioButton");
    expect(radioButton).toBeChecked();
  });

  test("RadioButton is not checked when paymentType does not match id", () => {
    const cardDataWithDifferentPaymentType = {
      ...mockCardData,
      paymentType: 2,
    };

    render(<Card {...cardDataWithDifferentPaymentType} />);

    const radioButton = screen.getByTestId("radioButton");
    expect(radioButton).not.toBeChecked();
  });
});
