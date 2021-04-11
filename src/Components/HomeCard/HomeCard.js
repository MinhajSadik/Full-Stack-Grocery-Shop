import React from "react";
import { Card, Button } from "react-bootstrap";
import "./HomeCard.css";
import takaSymbol from "../../Icon/taka.png";
import { useHistory } from "react-router";

const HomeCard = ({ product }) => {
    const { productName, weight, price, photo_url } = product;
    let history = useHistory();
    const HandleBuyButton = (name) => {
        history.push(`/checkOut/${name}`);
    };
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-5 d-flex justify-content-center  homeCard">
            <Card style={{ width: "18rem", height: "22rem" }}>
                <Card.Img variant="top" src={photo_url} />
                <Card.Body>
                    <Card.Title>
                        {productName}- {weight}
                    </Card.Title>
                    <div className="row  cardFooter ">
                        <div className="price d-flex col-6 align-items-center">
                            <img src={takaSymbol} alt="" />
                            <p className="ml-2 mt-auto mb-auto">
                                {price}
                            </p>
                        </div>
                        <div className="buyButton ml-auto">
                            <Button
                                variant="info"
                                onClick={() =>
                                    HandleBuyButton(
                                        `${productName}`
                                    )
                                }
                            >
                                Buy
							</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeCard;
