import MOCK_DATA from "../mocks/resCardMock.json"
import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import { withPromotedLabel } from "../RestaurantCard"
import UserContext from "../../utils/UserContext"
import "@testing-library/jest-dom"

it("should render restaurnat card with props data", () => {
    render(<RestaurantCard resData = {MOCK_DATA} />);
    const name = screen.getByText('KFC');
    expect(name).toBeInTheDocument()
})

it("should render restaurnat card component with promoted label", () => {
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<UserContext.Provider value={{ loggedInUser: "Jane Doe" }}>
        <RestaurantCardPromoted resData={MOCK_DATA} />
      </UserContext.Provider>)
    const promotedLabel = screen.getByText('Promoted')
    expect(promotedLabel).toBeInTheDocument()
})