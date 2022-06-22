import React from "react";
import { Carousel } from "react-bootstrap";


export default function MainPage() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="slide"
                    src="images/1.png"
                    alt="pierwszy slajd"
                />
                <Carousel.Caption>
                    <h3>Polecamy czytać książki!</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="slide"
                    src="images/2.png"
                    alt="drugi slajd"
                />
                <Carousel.Caption>
                    <h3>Specjalne oferty promocyjne!</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="slide"
                    src="images/3.png"
                    alt="trzeci slajd"
                />
            </Carousel.Item>
        </Carousel>
    )
}