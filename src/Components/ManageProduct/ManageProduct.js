import axios from "axios";
import React, { useEffect, useState } from "react";
import ManageProductCard from "../ManageProductCard/ManageProductCard";

const ManageProduct = () => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        axios({
            method: "get",
            url:
                "https://intense-spire-37690.herokuapp.com/allProducts",
            responseType: "stream",
        }).then(function (response) {
            setProducts(response.data);
        });
    }, []);
    return (
        <div className="ml-auto mr-auto">
            {products?.map((product) => (
                <ManageProductCard product={product} />
            ))}
        </div>
    );
};

export default ManageProduct;
