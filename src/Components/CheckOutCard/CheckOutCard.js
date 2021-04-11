import React, { useState } from "react";
import "./CheckOutCard.css";
import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import OrderSummary from "../OrderSummary/OrderSummary";

const CheckOutCard = ({ product, handleCheckOut }) => {
    const { productName, weight, price, photo_url } = product;
    const [quantityValue, setQuantityValue] = useState(1);

    const Increment = () => {
        const currentValue = document.getElementById("quantityValue")
            .innerText;
        setQuantityValue(Number(currentValue) + 1);
    };
    const Decrement = () => {
        const currentValue = document.getElementById("quantityValue")
            .innerText;
        if (Number(currentValue) > 1) {
            setQuantityValue(Number(currentValue) - 1);
        }
    };

    return (
        <div>
            <div className="descriptionPart">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Photo</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {productName}-{weight}
                            </td>
                            <td>
                                <img
                                    src={photo_url}
                                    alt=""
                                />
                            </td>
                            <td className="text-center d-flex justify-content-around align-items-center">
                                <Button
                                    variant="success"
                                    onClick={
                                        Decrement
                                    }
                                >
                                    <FontAwesomeIcon
                                        className="DecrementIcon"
                                        icon={
                                            faMinus
                                        }
                                    />
                                </Button>
                                <p
                                    className="quantityValue "
                                    id="quantityValue"
                                >
                                    {quantityValue}
                                </p>

                                <Button
                                    variant="success"
                                    onClick={
                                        Increment
                                    }
                                >
                                    <FontAwesomeIcon
                                        className="IncrementIcon"
                                        icon={
                                            faPlus
                                        }
                                    />
                                </Button>
                            </td>
                            <td>
                                {product?.price}
                                {"\u00D7"}
                                {quantityValue}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <div className="  checkOutBox    ">
                <OrderSummary
                    price={price}
                    quantityValue={quantityValue}
                    productName={productName}
                />

                <Button
                    className="checkOutButton"
                    variant="info"
                    onClick={() => handleCheckOut(quantityValue)}
                >
                    Check Out
				</Button>
            </div>
        </div>
    );
};

export default CheckOutCard;
