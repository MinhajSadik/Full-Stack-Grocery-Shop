import React from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import "./AllOrders.css";

const AllOrders = ({ orders }) => {
    // eslint-disable-next-line no-unused-vars
    let { path, url } = useRouteMatch();
    return (
        <div>
            <div className=" allOrders">
                <h3 className="text-center">Your Orders</h3>
                {orders?.map((order) => {
                    return (
                        <Link to={`${url}/${order._id}`}>
                            <div className="orderItemBox">
                                <p>
                                    Order Date:{" "}
                                    {new Date(
                                        order.orderDate
                                    ).toDateString(
                                        "dd/MM/yyyy"
                                    )}
                                </p>
                                <p>
                                    Order Id:{" "}
                                    {order._id}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default AllOrders;
