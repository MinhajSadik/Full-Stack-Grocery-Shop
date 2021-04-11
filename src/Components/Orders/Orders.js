import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { LoggedInUserContext } from "../../App";
import "./Orders.css";
import AllOrders from "../AllOrders/AllOrders";
import SelectedOrder from "../SelectedOrder/SelectedOrder";
import Ellipsis from "../../LoadingGif/Ellipsis.gif";
import OrdersMobileView from "../OrdersMobileView/OrdersMobileView";

const Orders = () => {
    // eslint-disable-next-line no-unused-vars
    const [LoggedInUser, setLoggedInUser] = useContext(LoggedInUserContext);
    const [orders, setOrders] = useState(null);
    useEffect(() => {
        axios({
            method: "get",
            url: `https://intense-spire-37690.herokuapp.com/my-orders?email=${LoggedInUser.email}`,
            responseType: "stream",
        }).then(function (response) {
            setOrders(response.data);
        });
    }, [LoggedInUser]);
    // eslint-disable-next-line no-unused-vars
    let { path, url } = useRouteMatch();

    return (
        <div className="container ordersPage">
            <div className="ordersDesktopView">
                <div className="row ">
                    <div className="col-lg-5 allOrdersNav">
                        {orders ? (
                            <AllOrders orders={orders} />
                        ) : (
                            <div className="text-center">
                                <img
                                    src={Ellipsis}
                                    alt=""
                                />
                            </div>
                        )}
                    </div>
                    <div className="col-lg-7 ">
                        <Switch>
                            <Route exact path={path}>
                                <h3>
                                    Please select a
                                    order.
								</h3>
                            </Route>
                            <Route
                                path={`${path}/:singleOrder`}
                            >
                                <SelectedOrder />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>

            <div className="ordersMobileView">
                <h2 className="text-center">Your Orders </h2>
                {orders?.map((order) => (
                    <OrdersMobileView order={order} />
                ))}
            </div>
        </div>
    );
};

export default Orders;
