import { render, screen } from "@testing-library/react";
import { Header } from "./index";

describe("Header component", () => {
  test("renders the Header component with IconButton and Logo", () => {
    const mockHandleClick = jest.fn();
    render(<Header handleClick={mockHandleClick} />);

    const arrowIcon = screen.getByAltText("Icone de retorno");
    const logoImage = screen.getByAltText("Logo");

    expect(arrowIcon).toBeInTheDocument();
    expect(logoImage).toBeInTheDocument();
  });
});
