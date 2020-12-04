import React, { useReducer } from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import {act} from "react-dom/test-utils"
import userEvent from "@testing-library/user-event"

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render (<CheckoutForm />)
    const header=screen.queryByText(/Checkout Form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async() => {
    render (<CheckoutForm />)

    const firstName = screen.getByLabelText(/first name:/i)
    const lastName = screen.getByLabelText(/last Name:/i)
    const address = screen.getByLabelText(/address:/i)
    const city = screen.getByLabelText(/City:/i)
    const state = screen.getByLabelText(/State:/i)
    const zip = screen.getByLabelText(/zip:/i)

    const button=screen.getByTestId(/button/i)



    await act(async()=>{
        userEvent.click (firstName)
        userEvent.type(firstName,"john")

        userEvent.click (lastName)
        userEvent.type(lastName, "doe")

        userEvent.click (address)
        userEvent.type(address, "123 doeville dr.")

        userEvent.click (city)
        userEvent.type(city, "doetopia")

        userEvent.click (state)
        userEvent.type(state, "wisconsin")

        userEvent.click (zip)
        userEvent.type(zip, "33555")

        userEvent.click(button)
        
    });

    setTimeout(function(){



    
    const newFirstName=screen.queryByText(/john/i)
    const newLastName=screen.queryByText(/doe/i)
    const newAddress=screen.queryByText(/123 doeville dr./i)
    const newCity=screen.queryByText(/doetopia/i)
    const newState=screen.queryByText(/wisconsin/i)
    const newZip=screen.queryByText(/33555/i)

    expect(newFirstName).toBeInTheDocument();
    expect(newLastName).toBeInTheDocument();
    expect(newAddress).toBeInTheDocument();
    expect(newCity).toBeInTheDocument();
    expect(newState).toBeInTheDocument();
    expect(newZip).toBeInTheDocument();
   


}, 3000);

});
