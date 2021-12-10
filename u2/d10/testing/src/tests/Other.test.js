import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Other from "../components/Other";

describe("async component", () => {
  test("renders items if request sucdceeds", async () => {
    // this hijack the fetch and send in own data
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "880", name: "Whatever" }],
    });
    render(<Other />);

    const listElement = await screen.findAllByRole("listitem");
    expect(listElement).not.toHaveLength(0);
  });
});
