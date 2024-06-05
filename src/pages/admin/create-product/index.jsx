import React, { useEffect, useState } from "react";
import "./createProduct.scss";
import { usePostProductMutation } from "../../../context/api/productApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
    title: "",
    price: "",
    image: "",
    category: "",
};

const CreateProduct = () => {
    const [formData, setFormData] = useState(initialState);
    const [
        createProduct,
        {
            data: createData,
            error: createError,
            isError: createIsError,
            isLoading: createIsLoading,
            isSuccess: createIsSuccess,
        },
    ] = usePostProductMutation();
    // console.log(formData);
    let navigate = useNavigate();

    const handleChange = (e) => {
        let { name, value } = e.target;
        // console.log(e.target.name);
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        if (createIsError) {
            toast.error(createError.data);
        }
        if (createIsSuccess) {
            setFormData(initialState);
            navigate("/admin/manageProduct");
        }
    }, [createIsError, createIsSuccess]);

    const handleSubmit = (e) => {
        console.log(createData);
        e.preventDefault();
        createProduct(formData);
    };

    return (
        <div className="createProduct">
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="form__input">
                    <label> Title</label>
                    <input
                        required
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__input">
                    <label> Price</label>
                    <input
                        required
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__input">
                    <label> Image</label>
                    <input
                        required
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__input">
                    <label> Category</label>
                    <input
                        required
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                </div>
                <button className="form__btn">Create</button>
            </form>
        </div>
    );
};

export default CreateProduct;
