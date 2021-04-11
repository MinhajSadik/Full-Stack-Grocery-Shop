import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddProductSuccess = () => {
    return (
        <div>
            <Card
                border="secondary"
                style={{
                    width: "25rem",
                    textAlign: "center",
                    margin: "0 auto",
                }}
            >
                <Card.Header>Add Product Success</Card.Header>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        You have successfully added a product.
					</Card.Text>
                    <hr />
                    <div className="card-footer d-flex justify-content-center">
                        <Link to="/home">
                            <Button variant="info">
                                Go to Home
							</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AddProductSuccess;
