import React from "react";
import { Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
// import { useHistory } from "react-router";

const AddProductForm = ({ handleUploadImage, onSubmit }) => {
    const { register, handleSubmit } = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Row>
                    <Form.Group
                        as={Col}
                        controlId="formGridEmail"
                    >
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Product Name"
                            name="productName"
                            ref={register({
                                required: true,
                            })}
                        />
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        controlId="formGridPassword"
                    >
                        <Form.Label>Photo</Form.Label>
                        <Form.Control
                            type="file"
                            onChange={(event) =>
                                handleUploadImage(event)
                            }
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group
                        as={Col}
                        controlId="formGridEmail"
                    >
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Price"
                            name="price"
                            ref={register({
                                required: true,
                            })}
                        />
                    </Form.Group>

                    <Form.Group
                        as={Col}
                        controlId="formGridPassword"
                    >
                        <Form.Label>Weight</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Weight"
                            name="weight"
                            ref={register({
                                required: true,
                            })}
                        />
                    </Form.Group>
                </Form.Row>

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProductForm;
