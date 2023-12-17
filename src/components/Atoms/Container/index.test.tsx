import { render } from "@testing-library/react";
import { Container } from "./index";

describe("Container component", () => {
  test("renders the Container component with children", () => {
    const { getByTestId } = render(
      <Container>
        <div data-testid="child-element">Child Content</div>
      </Container>
    );

    const containerElement = getByTestId("container");
    const childElement = getByTestId("child-element");

    expect(containerElement).toBeInTheDocument();
    expect(childElement).toBeInTheDocument();
    expect(containerElement).toContainElement(childElement);
  });
});
