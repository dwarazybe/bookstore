import React from "react";
import {getByTestId, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import RegisterForm from "../RegisterForm";

describe('Testowanie formularza rejestracji', () => {
    it("Nagłówek 'Email:' powinien występować", () => {
        render(<RegisterForm/>);
        expect(screen.getByText('Email:')).toBeInTheDocument();
    })

    it("Nagłówek 'Hasło:' powinien występować", () => {
        render(<RegisterForm/>);
        expect(screen.getByText('Hasło:')).toBeInTheDocument();
    })

    it("Przycisk 'Rejestruj' powinien występować", () => {
        render(<RegisterForm/>);
        expect(screen.getByText('Rejestruj')).toBeInTheDocument();
    })
})