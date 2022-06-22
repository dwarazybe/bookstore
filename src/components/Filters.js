import {Form, Button} from "react-bootstrap";
import "./Filters.css";
import {CartState} from "../context/Context";

const Filters = () => {
    const { productState: { byStock, sort }, productDispatch } = CartState();

    return (
        <div className="filters">
            <Form>
                <div className="title">Filtr produktów</div>
                <div>
                    <Form.Check
                        inline
                        label="Cena rosnąco"
                        name="group1"
                        type="radio"
                        id={'inline-1'}
                        onChange={()=>
                            productDispatch({
                                type: "SORT_BY_PRICE",
                                payload: "lowToHigh",
                            })
                        }
                        checked={sort === "lowToHigh"}
                    />
                </div>
                <div>
                    <Form.Check
                        inline
                        label="Cena malejąco"
                        name="group1"
                        type="radio"
                        id={'inline-2'}
                        onChange={()=>
                            productDispatch({
                                type: "SORT_BY_PRICE",
                                payload: "highToLow",
                            })
                        }
                        checked={sort === "highToLow"}
                    />
                </div>
                <div>
                    <Form.Check
                        inline
                        label="Produkty niedostępne"
                        name="group1"
                        type="checkbox"
                        id={'inline-3'}
                        onChange={() =>
                        productDispatch({
                            type: "FILTER_BY_STOCK",
                        })
                        }
                        checked={byStock}
                    />
                </div>
                <Button
                    variant="light"
                    onClick={() =>
                        productDispatch({
                            type: "CLEAR_FILTERS",
                        })
                     }
                    >
                    Wyczyść filtry
                </Button>
            </Form>
        </div>
    )
}

export default Filters;