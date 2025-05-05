import { render, screen } from "@testing-library/react";
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
    const searchBtn = screen.getByRole("button", {name: "search"});
    console.log(searchBtn)
    expect(searchBtn).toBeInTheDocument()
});