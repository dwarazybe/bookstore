import React from "react";
import {CartState} from "../../context/Context";
import SingleProduct from "../SingleProduct";
import Filters from "../Filters";

export default function ProductsPage() {
    const { state: { products }, productState: {sort, byStock, searchQuery},} = CartState();

    const transformProducts = () => {
        let sortedProducts = products;
        if(sort) {
            sortedProducts = sortedProducts.sort((a, b)=>
                sort === 'lowToHigh' ? a.price-b.price:b.price-a.price
            );
        }

        if (!byStock) {
            sortedProducts = sortedProducts.filter((prod) => prod.inStock);
        }

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) =>
                prod.name.toLowerCase().includes(searchQuery)
            );
        }

        return sortedProducts;
    };

    return (
        <div className='products'>
            <Filters />
            <div className='productContainer'>
                {transformProducts().map((prod) => {
                    return <SingleProduct prod = {prod} key={prod.id}/>
                })}
            </div>
        </div>
    )
}