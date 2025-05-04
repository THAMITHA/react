import MOCK_DATA from "../mocks/resCardMock.json"
import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import "@testing-library/jest-dom"

it("should render restaurnat card with props data", () => {
    render(<RestaurantCard resData = {MOCK_DATA} />);
    const name = screen.getByText('KFC');
    expect(name).toBeInTheDocument()
})