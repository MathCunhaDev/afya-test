import { render, screen } from "@testing-library/react";
import { PaymentForm } from "./index";
import { userEvent } from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("PaymentForm component", () => {
  test("renders PaymentForm correctly", async () => {
    const mockHandleSubscription = jest.fn();

    render(<PaymentForm handleSubscription={mockHandleSubscription} />);

    expect(
      screen.getByLabelText("Número do cartão de crédito")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Validade")).toBeInTheDocument();
    expect(screen.getByLabelText("CVV")).toBeInTheDocument();
    expect(screen.getByLabelText("CPF")).toBeInTheDocument();
    expect(screen.getByLabelText("Número de parcelas")).toBeInTheDocument();

    userEvent.type(
      screen.getByLabelText("Número do cartão de crédito"),
      "4111111111111111"
    );
    userEvent.type(screen.getByLabelText("Validade"), "1223");
    userEvent.type(screen.getByLabelText("CVV"), "123");
    userEvent.type(screen.getByLabelText("CPF"), "12345678901");
  });
});
