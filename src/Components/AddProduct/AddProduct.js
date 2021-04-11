import React, { useState } from "react";
import "./AddProduct.css";
import { useForm } from "react-hook-form";
// import { Col, Form, Row } from "react-bootstrap";
import axios from "axios";
// import { useHistory } from "react-router";
import AddProductForm from "../AddProductForm/AddProductForm";
import AddProductSuccess from "../AddProductSuccess/AddProductSuccess";

const AddProduct = () => {
    const [photoUrl, setPhotoUrl] = useState(null);
    const [isSubmit, setIsSubmit] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const productData = { ...data };
        productData.photo_url = photoUrl;
        productData.date = new Date();

        axios({
            method: "post",
            url:
                "https://rocky-badlands-31241.herokuapp.com/addNewProduct",
            data: productData,
        });
        setIsSubmit(true);
    };

    const handleUploadImage = (event) => {
        const ImageData = new FormData();
        ImageData.set("key", "85dea4d9aec0e6e2a9113a6126e66123");
        ImageData.append("image", event.target.files[0]);

        axios.post("https://api.imgbb.com/1/upload", ImageData)
            .then(function (response) {
                setPhotoUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div>
            {isSubmit ? (
                <AddProductSuccess />
            ) : (
                <AddProductForm
                    handleUploadImage={handleUploadImage}
                    onSubmit={onSubmit}
                />
            )}
        </div>
    );
};

export default AddProduct;
