import React from "react";
import { Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const PlaceOrderCard = ({ onSubmit, displayName }) => {
    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, errors } = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Price"
                        name="name"
                        ref={register({
                            required: true,
                        })}
                        value={displayName}
                        readOnly
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Adrees</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Address"
                        name="address"
                        ref={register({
                            required: true,
                        })}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Mobile Number"
                        name="mobileNumber"
                        ref={register({
                            required: true,
                        })}
                    />
                </Form.Group>
                <div className="placeOrderButton text-center">
                    <Button type="submit" variant="success">
                        Place Order
					</Button>
                </div>
            </form>
        </div>
    );
};

export default PlaceOrderCard;
