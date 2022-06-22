import {createContext, useContext, useEffect, useReducer, useState} from "react";
import Axios from 'axios';
import {cartReducer, productReducer} from "./Reducers";


const Cart = createContext();

const Context = ({children}) => {
    const data = [...Array(20)].map(() => ({
       id: "",
       name: "",
       price: "",
       image: "",
       inStock: "",
    }));

    const [fixedProducts, setFixedProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await Axios.get('http://localhost:8080/api/get').then((response)=> {
                fetchData(response.data);
                console.log(response);
            })
        }
        const fetchData = (data) => {
            if (data.length > 0) {
                for(let i = 0; i < data.length; i++) {
                    let newProduct = {
                        id: data[i]["id_produktu"],
                        name: data[i]["nazwa"],
                        price: data[i]["cena"],
                        image: data[i]["zdjecie"],
                        inStock: data[i]["ilosc"],
                    }
                    fixedProducts.push(newProduct)
                }
            }
        }
       getData();
    }, [fixedProducts]);

    const [state, dispatch] = useReducer(cartReducer, {
        products: fixedProducts,
        cart: []
    });

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        searchQuery: "",
    });

    return (
        <Cart.Provider value={{state, dispatch, productState, productDispatch}}>
            {children}
        </Cart.Provider>
    )
}

export default Context;

export const CartState = () => {
    return useContext(Cart);
}