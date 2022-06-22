import React from "react";
import {getByTestId, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import LoginForm from "../LoginForm";

describe('Testowanie formularza logowania', () => {
    it("Nagłówek 'Email:' powinien występować", () => {
        render( <BrowserRouter>
                    <LoginForm/>
                </BrowserRouter>);
        expect(screen.getByText('Email:')).toBeInTheDocument();
    })

    it("Nagłówek 'Hasło:' powinien występować", () => {
        render( <BrowserRouter>
                    <LoginForm/>
                </BrowserRouter>);
        expect(screen.getByText('Hasło:')).toBeInTheDocument();
    })

    it("Przycisk 'ZALOGUJ' powinien występować", () => {
        render( <BrowserRouter>
                    <LoginForm/>
                </BrowserRouter>);
        expect(screen.getByText('ZALOGUJ')).toBeInTheDocument();
    })
})