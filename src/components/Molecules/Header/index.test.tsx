import { render, screen } from "@testing-library/react";
import { Header } from "./index";

describe("Header component", () => {
  test("renders the Header component with IconButton and Logo", () => {
    render(<Header />);

    const arrowIcon = screen.getByAltText("Icone de retorno");
    const logoImage = screen.getByAltText("Logo");

    expect(arrowIcon).toBeInTheDocument();
    expect(logoImage).toBeInTheDocument();
  });
});
