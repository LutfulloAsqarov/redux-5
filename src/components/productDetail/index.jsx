import React from "react";
import { useGetDetailProductQuery } from "../../context/api/productApi";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    let { id } = useParams();
    const { data } = useGetDetailProductQuery(id);
    // console.log(data);

    return (
        <div>
            <div>
                <img src={data.image} alt="" />
            </div>
        </div>
    );
};

export default ProductDetail;
