import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "./mocks/resCardMock.json";
import "@testing-library/jest-dom";



it("should render RestaurantCard component with props data", () => {
  
render(<RestaurantCard resData={MOCK_DATA} />); 
const text = screen.getByText("Chinese Wok");
expect(text).toBeInTheDocument();
});