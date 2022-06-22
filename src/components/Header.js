import React, {useState} from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import {Badge, Container, FormControl, Nav, Navbar, NavbarBrand, Dropdown, Button, } from "react-bootstrap";
import {FaShoppingCart} from "react-icons/fa";
import {CartState} from "../context/Context";
import {AiFillDelete} from "react-icons/ai";
import {GiMagnifyingGlass} from "react-icons/gi";
import {BsBook} from "react-icons/bs";
import Cookies from "js-cookie";

const Header = ({ user }) => {
    const {state: {cart}, dispatch, productDispatch} = CartState();
    const [data,setData] = useState({
        text : '',
        picture : ''
    });

    const logout = () => {
        fetch("http://localhost:8080/logout", {
            method: 'POST',
            credentials: "include",
            headers: {
                "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            }
        })
        window.location.replace("/");
        //window.open("http://localhost:8080/auth/logout", "_self");
    };

    const getMessage = () => {
        fetch("http://localhost:8080/user", {
            credentials: "include"
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
    }

    return(
        <Navbar className="navbar">
            <Container>
                <NavbarBrand>
                    <Link to='/' className="navbar-logo"><BsBook color="white"/> Księgarnia </Link>

                </NavbarBrand>
                    <Navbar.Text className="search">
                        <FormControl style={{width: 500}}
                                 type="search"
                                 placeholder="Wyszukaj produkt"
                                 onChange={(e) => {
                                     productDispatch({
                                         type: "FILTER_BY_SEARCH",
                                         payload: e.target.value,

                                     })
                                 }}
                        />
                    </Navbar.Text>
                <Link to="/produkty">
                    <Button variant="outline-light" className="search_button"><GiMagnifyingGlass color="white" fontSize="25px"/></Button>
                </Link>
                <Nav.Item>
                    <Link to='/produkty' class="nav-link link-light">
                        Produkty
                    </Link>
                </Nav.Item>
                {/*<Nav.Item>
                    <Link to='/profil' class="nav-link link-light" onClick={closeMobileMenu}>
                        Profil
                    </Link>
                </Nav.Item>*/}
                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant="light">
                            <FaShoppingCart color="black" fontSize="25px" />
                            <Badge bg="black">{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{minWidth: 370}}>
                            {cart.length>0? (
                                <>
                                    {cart.map((prod)=>(
                                            <span className="cartitem" key={prod.id}>
                                                <img
                                                    src={prod.image}
                                                    className="cartItemImg"
                                                    alt={prod.name}
                                                />
                                                <div className="cartItemDetail">
                                                    <span>{prod.name}</span>
                                                    <span> {prod.price.toFixed(2)} zł</span>
                                                </div>
                                                <AiFillDelete
                                                    fontSize="20px"
                                                    style={{cursor: "pointer"}}
                                                    onClick={() =>
                                                        dispatch({
                                                            type: "REMOVE_FROM_CART",
                                                            payload: prod,
                                                        })
                                                    }
                                                />
                                            </span>
                                        ))}
                                    <Link to="/koszyk">
                                        <Button style={{width: "95%", margin: "0 10px"}}>
                                            Koszyk
                                        </Button>
                                    </Link>
                                </>
                            ) : (
                            <span style={{padding: 10}}>Koszyk jest pusty!</span>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
                    {user ? (
                            <ul className="list">
                                <li className="listItem">
                                    <img
                                        src={user.imageUri}
                                        alt=""
                                        className="avatar"
                                    />
                                </li>
                                <li className="listItem">{user.displayName}</li>
                                <Button to='/login' variant="outline-light" onClick={logout}>Wyloguj</Button>
                            </ul>
                    ) : (
                        <Link to='/login'>
                            <Button to='/login' variant="outline-light">Zaloguj</Button>
                        </Link>
                    )}
            </Container>
        </Navbar>
    );
}

export default Header;