import Header from "../Header";
import { render, screen } from "@testing-library/react";
import store from "../../utils/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render the Header with the login button", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //   const loginButton = screen.getByRole("button", {name: "Login"});
  const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

it("should render the Header with the Cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});
