import { Confirmation } from "./index";
import { render, screen } from "@testing-library/react";

describe("Confirmation Component", () => {
  test("renders with provided data", () => {
    const testData = {
      title: "Test Title",
      price: "$10.99",
      email: "test@example.com",
      cpf: "123.456.789-00",
    };

    render(<Confirmation {...testData} />);

    expect(screen.getByText(testData.title)).toBeInTheDocument();
    expect(screen.getByText(testData.price)).toBeInTheDocument();
    expect(screen.getByText("E-mail")).toBeInTheDocument();
    expect(screen.getByText(testData.email)).toBeInTheDocument();
    expect(screen.getByText("CPF")).toBeInTheDocument();
    expect(screen.getByText(testData.cpf)).toBeInTheDocument();
  });
});
