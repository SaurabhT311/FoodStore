import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should render button inside contact us component", () => {
  render(<Contact />);
  //   const button = screen.getByRole("button"); or
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});

test("should render input name inside contact us component", () => {
  render(<Contact />);
  const inputName = screen.getByPlaceholderText("name");
  expect(inputName).toBeInTheDocument();
});

test("should render two input boxes inside contact us component", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");
  expect(inputBoxes.length).toBe(2);
});