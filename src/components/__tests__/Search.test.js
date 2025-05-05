import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});
it("should render the Body Component with Search", async() => {
    await act(async () => 
    render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));

    const cardsBeforeSearch = screen.getAllByTestId("resCard")
    expect(cardsBeforeSearch.length).toBe(8)

    const searchBtn = screen.getByRole("button", {name: "search"});
    console.log('SearchButton', searchBtn)
    const searchInput = screen.getByTestId('searchInput')

    console.log('searchInput', searchInput)
    fireEvent.change(searchInput, {target: {value: "burger"}})
    fireEvent.click(searchBtn)
    //onClick of search button screen should load 4 cards 
    const cardsAfterSearch = screen.getAllByTestId("resCard")
    expect(searchBtn).toBeInTheDocument()
    
    expect(cardsAfterSearch.length).toBe(1);
});