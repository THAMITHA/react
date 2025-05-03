import {render, screen} from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe("Contact Us Page Test Case", () => {
    test("should load heading inside contact us component", ()=> {
        render(<Contact/>)
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument();
    })
    
    test("should load button button inside contact us component", ()=> {
        render(<Contact/>)
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument();
    })
    
    test("should load Submit test inside contact us component", ()=> {
        render(<Contact/>)
        const button = screen.getByText("Submit")
        expect(button).toBeInTheDocument();
    })
    
    test("should load input name inside contact us component", ()=> {
        render(<Contact/>)
        const inputName = screen.getByPlaceholderText("name")
        expect(inputName).toBeInTheDocument();
    })
    
    test("should load 2 input boxed on the Contact component", ()=>{
        render(<Contact/>)
        const inputBoxes = screen.getAllByRole("textbox"); //multiple items present
        expect(inputBoxes.length).not.toBe(4)
    })
})

