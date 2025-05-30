import {render, screen} from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe("Contact Us Page Test Case", () => {
    //beforeAll
    //beforeEach
    //AfterEach
    //AfterAll

    // beforeAll(()=>{
    //     console.log("before all")
    // })

    // beforeEach(()=>{
    //     console.log("before each")
    // })

    // afterAll(()=>{
    //     console.log("after all")
    // })

    // afterEach(()=>{
    //     console.log("after each")
    // })

    it("should load heading inside contact us component", ()=> {
        render(<Contact/>)
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument();
    })
    
    it("should load button button inside contact us component", ()=> {
        render(<Contact/>)
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument();
    })
    
    it("should load Submit test inside contact us component", ()=> {
        render(<Contact/>)
        const button = screen.getByText("Submit")
        expect(button).toBeInTheDocument();
    })
    
    it("should load input name inside contact us component", ()=> {
        render(<Contact/>)  //render
        const inputName = screen.getByPlaceholderText("name") //query
        expect(inputName).toBeInTheDocument();   //assert
    })
    
    it("should load 2 input boxed on the Contact component", ()=>{
        render(<Contact/>)
        const inputBoxes = screen.getAllByRole("textbox"); //multiple items present 
        expect(inputBoxes.length).not.toBe(4)
    })
})

