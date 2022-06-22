import React from "react";
import { render, screen } from "@testing-library/react";
import MainPage from "../pages/MainPage";
import '@testing-library/jest-dom';

describe('Testowanie strony startowej',() => {
    it("Adres pierwszego slajdu powinien być poprawny", async () => {
        const {getByAltText} = await render(<MainPage/>);
        const image = getByAltText('pierwszy slajd');
        expect(image.src).toContain('images/1.png');
    })

    it("Adres drugiego slajdu powinien być poprawny", async () => {
        const {getByAltText} = await render(<MainPage/>);
        const image = getByAltText('drugi slajd');
        expect(image.src).toContain('images/2.png');
    })

    it("Adres trzeciego slajdu powinien być poprawny", async () => {
        const {getByAltText} = await render(<MainPage/>);
        const image = getByAltText('trzeci slajd');
        expect(image.src).toContain('images/3.png');
    })

    it("Nagłówek pierwszego slajdu powinien występować", () => {
        render(<MainPage/>);
        expect(screen.getByText('Polecamy czytać książki!')).toBeInTheDocument();
    })

    it("Nagłówek drugiego slajdu powinien występować", () => {
        render(<MainPage/>);
        expect(screen.getByText('Specjalne oferty promocyjne!')).toBeInTheDocument();
    })
})