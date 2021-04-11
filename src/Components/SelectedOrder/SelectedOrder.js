import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { useParams } from "react-router";
import "./SelectedOrder.css";

const SelectedOrder = () => {
    let { singleOrder } = useParams();
    console.log(singleOrder);
    const [order, setOrder] = useState(null);
    useEffect(() => {
        axios({
            method: "get",
            url: `https://intense-spire-37690.herokuapp.com/my-orders/${singleOrder}`,
            responseType: "stream",
        }).then(function (response) {
            setOrder(response.data);
        });
    }, [singleOrder]);
    return (
        <div>
            <div className="orderInfo d-flex justify-content-between align-items-center">
                <p>
                    Order Date:{"   "}
                    {new Date(order?.orderDate).toDateString(
                        "dd/MM/yyyy"
                    )}
                </p>
                <p>Order Id: {order?._id}</p>
            </div>
            <h3>Product Description</h3>
            <div className="productInformation">
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>
                            <Row>
                                <img
                                    src={
                                        order?.photo_url
                                    }
                                    alt=""
                                />

                                <p className="ml-4">
                                    {
                                        order?.productName
                                    }
                                </p>
                            </Row>
                        </td>
                        <td>
                            <p>
                                {order?.quantity}
                                {"\u00D7"}
                                {order?.price}
                            </p>
                        </td>
                        <td>
                            <p>{order?.totalCharge}</p>
                        </td>
                        <td>Paid</td>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default SelectedOrder;
