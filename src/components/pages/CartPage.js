import React, {useEffect, useState} from "react";
import {CartState} from "../../context/Context";
import {Button, Col, Form, Image, ListGroup, Row} from "react-bootstrap";
import "../Filters.css";
import {AiFillDelete} from "react-icons/ai";
import StripeCheckout from "react-stripe-checkout";

const KEY = "pk_test_51L9uXuFjdkHpb9HLbaTo8KHVPTrGfkh4h8tCJFLFTJbriIASZn0ESP9fYFuKhR4heLSrOsJ31BUK9dfxdgCYbKER00XXDyKdFB";

export default function CartPage({user}) {
    const { state: {cart}, dispatch, } = CartState();
    const [total, setTotal] = useState();
    const [stripeToken, setStripeToken] = useState(null);
    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        setTotal(cart.reduce((acc,curr)=> (acc+Number(curr.price)*curr.qty), 0).toFixed(2));
    }, [cart]);
    return (
        <div>
            <div className="productContainer">
                <ListGroup>
                    {
                        cart.map(prod => (
                            <ListGroup.Item key={prod.id}>
                                <Row>
                                    <Col md={2}>
                                        <Image src = {prod.image} alt={prod.name} fluid rounded />
                                    </Col>
                                    <Col md={2}>
                                        <div>{prod.name}</div>
                                    </Col>
                                    <Col md={2}>
                                        {prod.price.toFixed(2)}
                                    </Col>
                                    <Col md={2}>
                                        <Form.Select value={prod.qty}
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "CHANGE_CART_QTY",
                                                    payload: {
                                                        id: prod.id,
                                                        qty: e.target.value,
                                                    },
                                                })
                                            }
                                        >
                                            {[...Array(prod.inStock).keys()].map((x) =>(
                                                <option key={x + 1}>{x + 1}</option>
                                            ))}
                                        </Form.Select>
                                    </Col>
                                    <Col md={2}>
                                        <Button type="button" variant="light"
                                                onClick={() =>
                                                    dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: prod,
                                                    })
                                                }
                                        >
                                            <AiFillDelete fontSize="20px" />
                                        </Button>
                                    </Col>

                                </Row>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </div>
            <div className="summary">
                <div className="title">Suma przedmiotów w koszyku ({cart.length}) </div>
                <div style={{fontWeight: 700, fontSize: 20}}>Sumaryczna cena: {total}</div>
                {user ? (
                    <StripeCheckout
                        name="Księgarnia"
                        image={"BsBook"}
                        billingAddress
                        shippingAddress
                        currency={"pln"}
                        description={`Sumaryczna cena: ${total}zł`}
                        amount={total * 100}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <Button type="button" disabled={cart.length === 0}>
                            Kupuję
                        </Button>
                    </StripeCheckout>
                ) : (
                    <div style={{fontWeight: 700, fontSize: 20}}> Aby dokonać płatności należy się zalogować </div>
                )}
            </div>
        </div>
    )
}

