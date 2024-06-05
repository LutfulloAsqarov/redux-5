import React from "react";

import ProductsItem from "../productsItem";
import { useGetProductsQuery } from "../../context/api/productApi";
import "./products.scss";
const Products = ({ setProductData }) => {
    const { data } = useGetProductsQuery();

    return (
        <div className="products">
            <div className="products__cards">
                {data?.map((product) => (
                    <ProductsItem
                        key={product.id}
                        product={product}
                        setProductData={setProductData}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
