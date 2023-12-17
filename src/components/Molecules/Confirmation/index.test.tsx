import { render, screen } from "@testing-library/react";
import { Confirmation } from "./index";
import "@testing-library/jest-dom";

const testData = {
  title: "Product Title",
  price: "$100",
  email: "test@example.com",
  cpf: "123.456.789-00",
};

describe("Confirmation component", () => {
  test("renders correctly with provided data", () => {
    render(
      <Confirmation
        title={testData.title}
        price={testData.price}
        email={testData.email}
        cpf={testData.cpf}
      />
    );

    expect(screen.getByText(testData.title)).toBeInTheDocument();
    expect(screen.getByText(testData.price)).toBeInTheDocument();
    expect(screen.getByText("E-mail")).toBeInTheDocument();
    expect(screen.getByText(testData.email)).toBeInTheDocument();
    expect(screen.getByText("CPF")).toBeInTheDocument();
    expect(screen.getByText(testData.cpf)).toBeInTheDocument();
  });
});
