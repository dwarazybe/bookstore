import {Button, Card} from "react-bootstrap";
import {CartState} from "../context/Context";


const SingleProduct = ({ prod }) => {
    const { state:{cart}, dispatch, } = CartState();
    return (
        <div className="product">
            <Card>
                <Card.Img className="image" variant='top' src={prod.image} alt={prod.name}/>
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                        <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span>{prod.price.toFixed(2)} zł</span>
                        </Card.Subtitle>
                    {
                        cart.some(p=>p.id===prod.id)?(
                            <Button onClick={() => {dispatch({type: 'REMOVE_FROM_CART',payload: prod})}} variant='danger'> Usuń z koszyka </Button>
                        ):(
                            <Button onClick={() => {dispatch({type: 'ADD_TO_CART',payload: prod})}} disabled={!prod.inStock}> {!prod.inStock ? "Brak produktu" : "Dodaj do koszyka"} </Button>
                        )
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleProduct;