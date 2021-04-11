import React, { useContext, useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import "./PlaceOrder.css";
import { LoggedInUserContext } from "../../App";
import axios from "axios";
import OrderSummary from "../OrderSummary/OrderSummary";
import OrderSuccessText from "../OrderSuccessText/OrderSuccessText";
import PlaceOrderCard from "./PlaceOrderCard";

const PlaceOrder = ({ orderDetails }) => {
    const [LoggedInUser, setLoggedInUser] = useContext(LoggedInUserContext);
    const { displayName, email, photoURL } = LoggedInUser;
    const [orderPlace, setOrderPlace] = useState(false);

    const { productName, weight, price, photo_url, quantity } = orderDetails;
    const orderDetailsData = {
        productName,
        weight,
        price,
        photo_url,
        quantity,
    };
    const countPrice = Number(price) * quantity;
    const shippingCharge = 60;
    const tax = countPrice * 0.1;
    const totalCharge = countPrice + shippingCharge + tax;

    const onSubmit = (data) => {
        const fullOrderInformation = {
            ...data,
            ...orderDetailsData,
            totalCharge,
        };
        fullOrderInformation.orderDate = new Date();
        fullOrderInformation.buyerPhoto = photoURL;
        fullOrderInformation.buyerEmail = email;
        axios({
            method: "post",
            url:
                "https://intense-spire-37690.herokuapp.com/fullOrderDetails",
            data: fullOrderInformation,
        });

        setOrderPlace(true);
    };

    return (
        <div>
            {orderPlace ? (
                <div className="orderSuccess d-flex justify-content-center ml-auto mr-auto">
                    <OrderSuccessText />
                </div>
            ) : (
                <div className="row">
                    <div className="col-md-6 buyerInformation">
                        <PlaceOrderCard
                            onSubmit={onSubmit}
                            displayName={displayName}
                        />
                    </div>
                    <div className="col-md-6 orderSummary">
                        <OrderSummary
                            price={price}
                            quantityValue={quantity}
                            productName={productName}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlaceOrder;
