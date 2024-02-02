import "@testing-library/jest-dom";
import { Header } from "../Components/Header";
import { render, screen } from "@testing-library/react";

describe("header component", () => {
  it("should render the Header Element", () => {
    render(<Header title="Spotify Receipts" subTitle="Top Tracks Generator" />);
    const headerElement = screen.getByTestId("sr-header");
    expect(headerElement).toBeInTheDocument();
  });
});
