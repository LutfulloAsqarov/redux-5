import { useEffect, useState } from "react";
import "./editModal.scss";
import { useSelector } from "react-redux";
import { usePutProductMutation } from "../../context/api/productApi";

const EditModal = ({ setProductData, productData }) => {
    const [editProduct, { data }] = usePutProductMutation();

    const [editedProduct, setEditedProduct] = useState({ ...productData });

    const handleChange = (e) => {
        let { name, value } = e.target;
        setEditedProduct((prev) => ({ ...prev, [name]: value }));
    };
    const handleEditProduct = (e) => {
        e.preventDefault();
        editProduct({ id: editedProduct.id, body: editedProduct });
        console.log(editedProduct.id);
        console.log(editedProduct);
    };

    return (
        <div className="modal">
            <div onClick={() => setProductData(null)} className="overlay"></div>
            <form onSubmit={handleEditProduct} className="modal__form">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={editedProduct.title}
                    onChange={handleChange}
                />
                <label htmlFor="price">Price</label>
                <input
                    id="price"
                    type="number"
                    name="price"
                    value={editedProduct.price}
                    onChange={handleChange}
                />
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    name="image"
                    id="image"
                    value={editedProduct.image}
                    onChange={handleChange}
                />
                <label htmlFor="category">Category</label>
                <input
                    id="category"
                    type="text"
                    name="category"
                    value={editedProduct.category}
                    onChange={handleChange}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditModal;
