import React, {  } from "react";
import { Row, Table } from "react-bootstrap";

const OrdersMobileView = ({ order }) => {
    return (
        <div>
            <div className="orderInfo d-flex justify-content-between align-items-center mt-5">
                <p>
                    Order Date:{"   "}
                    {new Date(order?.orderDate).toDateString(
                        "dd/MM/yyyy"
                    )}
                </p>
                <p>Order Id: {order?._id}</p>
            </div>
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

export default OrdersMobileView;
