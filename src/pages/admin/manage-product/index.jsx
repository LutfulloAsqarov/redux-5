import React, { useState } from "react";
import "./manageProduct.scss";
import Products from "../../../components/products";
import EditModal from "../../../components/editModal";

const ManageProduct = () => {
    const [productData, setProductData] = useState(null);
    console.log(productData);
    return (
        <div className="manageProduct">
            <h2>Manage Product</h2>
            <Products setProductData={setProductData} />
            {productData ? (
                <EditModal
                    setProductData={setProductData}
                    productData={productData}
                />
            ) : (
                <></>
            )}
        </div>
    );
};

export default ManageProduct;
