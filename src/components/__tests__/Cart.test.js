import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_RES_MENU from "./mocks/RestaurantMenuMock.json";
import { Provider } from "react-redux";
import store from "../../utils/store";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_RES_MENU),
  })
);

it("should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Cart />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeaders = screen.getByText("Celebration Combo for 2(2)");
  fireEvent.click(accordionHeaders);

  const item = screen.getAllByTestId("food-item");
  expect(item.length).toBe(22);

  const addBtn = screen.getAllByRole("button", { name: "ADD" });
  console.log("len", addBtn.length);

  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart (1)")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);

  expect(screen.getByText("Cart (2)")).toBeInTheDocument();
});


it("cart page should have 2 items", async () => {
await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Cart />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const item = screen.getAllByTestId("food-item");
  expect(item.length).toBe(22);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
//   expect(screen.getAllByTestId("food-item")).toBe([]);

  expect(screen.getByText("Cart is empty. Add item(s) to cart.")).toBeInTheDocument();
}) 