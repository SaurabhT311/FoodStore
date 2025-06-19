import { render, screen } from "@testing-library/react";
import Body from "../Body";




it('should render the body component', () => {
  const { getByText } = render(<Body />);
  expect(getByText('Body')).toBeInTheDocument();
}); 