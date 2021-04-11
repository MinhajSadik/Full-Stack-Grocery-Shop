import React from "react";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

const OrderSuccessText = () => {
    const history = useHistory();
    const moreProductsHandle = () => {
        history.push(`/home`);
    };
    return (
        <div>
            <Card
                bg="success"
                style={{
                    width: "18rem",
                    color: "white",
                    textAlign: "center",
                }}
                className="mb-2"
            >
                <Card.Header>
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{
                            fontSize: "60px",
                        }}
                    />
                </Card.Header>
                <Card.Body>
                    <Card.Title>order succeed</Card.Title>
                    <Card.Text>
                        Your order has been completed. We have
                        received your order. We hope you
                        receive your product within 6 to 7
                        working days. Thanks for staying with
                        us.
					</Card.Text>
                    <Button
                        variant="info"
                        onClick={moreProductsHandle}
                    >
                        See More Products
					</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default OrderSuccessText;
