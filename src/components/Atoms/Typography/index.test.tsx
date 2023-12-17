import { render, screen } from "@testing-library/react";
import { Pill, Title, Text } from "./index";
import "@testing-library/jest-dom";

describe("Typography component", () => {
  test("renders correctly with provided props", () => {
    const titleProps = {
      weight: "bold",
      size: "24px",
    };

    render(<Title {...titleProps}>Sample Title</Title>);

    const titleElement = screen.getByText("Sample Title");
    expect(titleElement).toBeInTheDocument();

    expect(titleElement).toHaveStyle({
      fontSize: expect.stringMatching(/24px/),
    });
  });

  test("renders correctly with provided props", () => {
    const textProps = {
      size: "24px",
      color: "#333",
    };

    render(<Text {...textProps}>Sample Text</Text>);

    const textElement = screen.getByText("Sample Text");
    expect(textElement).toBeInTheDocument();

    expect(textElement).toHaveStyle({
      fontSize: "24px",
      color: "#333",
    });
  });

  test("renders correctly with provided props", () => {
    const pillProps = {
      size: "12px",
    };

    render(<Pill {...pillProps}>Sample Pill</Pill>);

    const pillElement = screen.getByText("Sample Pill");
    expect(pillElement).toBeInTheDocument();

    expect(pillElement).toHaveStyle({
      fontSize: "12px",
    });
  });
});
