import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    
    // get all fields
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);
    
    
    // fill in the fields

    fireEvent.change(
        firstName,
        {
            target: {
                value: 'Jamie'
            }
        }
    );

    fireEvent.change(
        lastName,
        {
            target: {
                value: 'Hyneman'
            }
        }
    );

    fireEvent.change(
        address,
        {
            target: {
                value: 'Sesame Str.'
            }
        }
    );

    fireEvent.change(
        city,
        {
            target: {
                value: 'Montville'
            }
        }
    );

    fireEvent.change(
        state,
        {
            target: {
                value: 'MO'
            }
        }
    );

    fireEvent.change(
        zip,
        {
            target: {
                value: '12345'
            }
        }
    );

    // submit the form
    const submitButton = screen.getByText(/Checkout$/i);
    fireEvent.click(submitButton);
    
    // check if there's a message
    const message = screen.getByText(/You have ordered some plants/i);
    expect(message).toBeInTheDocument();
    
});
