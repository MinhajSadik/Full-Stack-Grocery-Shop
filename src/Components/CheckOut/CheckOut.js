import React from "react";
import "./CheckOut.css";
// import { Button, Table } from "react-bootstrap";
// import Header from "../Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import CheckOutCard from "../CheckOutCard/CheckOutCard";
import PlaceOrder from "../PlaceOrder/PlaceOrder";
import DoubbleBallSpinner from "../../LoadingGif/Double Ring.gif";

const CheckOut = () => {
    let { name } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        axios({
            method: "get",
            url:
                "https://intense-spire-37690.herokuapp.com/selectedProduct/" +
                name,
            responseType: "stream",
        }).then(function (response) {
            setProduct(response.data);
        });
    }, [name]);

    const [orderDetails, setOrderDetails] = useState(null);

    const handleCheckOut = (quantity) => {
        const fullDetails = { ...product, quantity };
        setOrderDetails(fullDetails);
    };

    return (
        <div className="container checkOutPage">
            <h3 className="text-center mt-5">
                {orderDetails ? "Place Order" : "Check Out"}
            </h3>
            {product ? (
                <div>
                    {orderDetails ? (
                        <PlaceOrder
                            orderDetails={orderDetails}
                        />
                    ) : (
                        <CheckOutCard
                            product={product}
                            handleCheckOut={handleCheckOut}
                        />
                    )}
                </div>
            ) : (
                <div className="text-center">
                    <img src={DoubbleBallSpinner} alt="" />
                </div>
            )}
        </div>
    );
};

export default CheckOut;
