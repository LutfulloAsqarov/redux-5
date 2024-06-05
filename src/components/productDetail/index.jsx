import React from "react";
import { useGetDetailProductQuery } from "../../context/api/productApi";
import { useParams } from "react-router-dom";
import "./productDetail.scss";

const ProductDetail = () => {
    let { id } = useParams();
    const { data } = useGetDetailProductQuery(id);
    // console.log(data);

    return (
        <div className="detail container">
            <div className="detail__img">
                <img src={data?.image} alt="" />
            </div>
            <div className="detail__info">
                <h2>{data?.title}</h2>
                <p>{data?.price}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
