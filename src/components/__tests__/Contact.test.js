import {render, screen} from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

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