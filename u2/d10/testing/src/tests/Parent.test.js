import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Parent from "../components/Parent";

describe("plain old HTML", () => {
  test("renders 'Parent Component'", () => {
    render(<Parent />);

    const textElement = screen.getAllByText("Parent Component", {
      exact: false,
    });
    expect(textElement).toBeInTheDocument;
  });

  test("renders 'Original text'", () => {
    render(<Parent />);

    const textElement = screen.getByText("original text", { exact: false });
    expect(textElement).toBeInTheDocument;
  });

  test("renders 'After button click' when button is clicked", () => {
    render(<Parent />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const original = screen.getByText("after button click", { exact: false });
    expect(original).toBeInTheDocument;
    //queryby return null if can't find
    //findby deal with promise
    const afterClick = screen.queryByText("original text", { exact: false });
    expect(afterClick).toBeInTheDocument;
  });
});
