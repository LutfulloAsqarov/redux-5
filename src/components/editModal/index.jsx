import { useEffect, useState } from "react";
import "./editModal.scss";
import { useSelector } from "react-redux";
import { usePutProductMutation } from "../../context/api/productApi";

const EditModal = ({ setProductData, productData }) => {
    // const [show, setShow] = useState(false);

    // const productData = useSelector((state) => state.productEdit.value);

    const [editProduct, { data }] = usePutProductMutation();

    console.log(productData);
    console.log(data);

    const handleChange = (e) => {
        let { name, value } = e.target;
        setProductData((prev) => ({ ...prev, [name]: value }));
    };
    const handleEditProduct = (e) => {
        e.preventDefault();
        editProduct({ id: productData.id, body: productData });
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
                    value={productData.title}
                    onChange={handleChange}
                />
                <label htmlFor="price">Price</label>
                <input
                    id="price"
                    type="number"
                    name="price"
                    value={productData.price}
                    onChange={handleChange}
                />
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    name="image"
                    id="image"
                    value={productData.image}
                    onChange={handleChange}
                />
                <label htmlFor="category">Category</label>
                <input
                    id="category"
                    type="text"
                    name="category"
                    value={productData.category}
                    onChange={handleChange}
                />
                <button>Save</button>
            </form>
        </div>
    );
};

export default EditModal;
