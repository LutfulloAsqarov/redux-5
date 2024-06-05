import React from "react";
import { useSelector } from "react-redux";
import Products from "../../components/products";
import ProductsItem from "../../components/productsItem";

const Wishlist = () => {
    let wishlistData = useSelector((state) => state.wishlist.value);
    return (
        <div className="container">
            <div className="products">
                <div className="products__cards">
                    {wishlistData?.map((product) => (
                        <ProductsItem key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
