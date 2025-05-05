import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import { Header } from "../Header";
import { Provider } from "react-redux";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json"
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: ()=> Promise.resolve(MOCK_DATA_NAME)
    }) 
)

it("Should load Restaurant menu Component", async () =>{
    await act(async () => 
        render(
        <BrowserRouter>
            <Provider store={appStore}>
            <Header/>
            <RestaurantMenu/>
        </Provider>
        </BrowserRouter>
        )
    );
    const accordionHeader = screen.getByText("Drinks (9)");
    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId('foodItems').length).toBe(9);
    const addBtns = screen.getAllByRole("button",{name: "Add +"});
    fireEvent.click(addBtns[0])
    // expect(accordionHeader).toBe("Drinks (9)")
})