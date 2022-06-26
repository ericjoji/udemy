import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello world as a text", () => {
    //arrange
    render(<Greeting />);

    //act

    //assert
    const helloWorldElement = screen.getByText("Hello World!", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders its good to see you if the button was not clicked", () => {
    render(<Greeting />);
    const goodElement = screen.getByText("good to see you", { exact: false });
    expect(goodElement).toBeInTheDocument();
  });

  test("renders changed if the button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const goodElement = screen.getByText("changed", { exact: false });
    expect(goodElement).toBeInTheDocument();
  });

  test("removes its good to see you if the button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const goodElement = screen.queryByText("good to see you", { exact: false });
    expect(goodElement).toBeNull();
  });
});
