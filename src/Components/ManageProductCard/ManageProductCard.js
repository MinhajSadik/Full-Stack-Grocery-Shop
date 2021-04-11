import React from "react";
import { Button } from "react-bootstrap";
import "./ManageProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const ManageProductCard = ({ product }) => {
    const { productName, photo_url, price, weight, _id } = product;
    const deleteProduct = (id, event) => {
        axios.delete(
            `https://intense-spire-37690.herokuapp.com/deleteProduct/${id}`
        );
        window.location.reload(false);
    };
    return (
        <div>
            <div className="productBox">
                <div className="row ml-auto mr-auto">
                    <div className="col-6 col-md-8 d-flex   align-items-center">
                        <img src={photo_url} alt="" />
                        <p className="ml-3">{productName}</p>
                        <p className="ml-3 weight">
                            <span className="headerHighLight">
                                Weight:
							</span>{" "}
                            {weight}
                        </p>

                        <p className="ml-4">
                            <span className="headerHighLight">
                                Price:
							</span>{" "}
                            {price}৳
						</p>
                    </div>
                    <div className="col d-flex justify-content-end ">
                        <Button
                            variant="danger"
                            className=" deleteButton"
                            onClick={(event) =>
                                deleteProduct(
                                    _id,
                                    event
                                )
                            }
                        >
                            <FontAwesomeIcon
                                icon={faTrash}
                                style={{
                                    fontSize: "15px",
                                }}
                            />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProductCard;
