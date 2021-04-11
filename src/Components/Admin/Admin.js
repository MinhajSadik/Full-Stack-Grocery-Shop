import React from "react";
import AddProduct from "../AddProduct/AddProduct";
import "./Admin.css";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import ManageProduct from "../ManageProduct/ManageProduct";
import AdminMobileView from "./AdminMobileView";

const Admin = () => {
    let { path, url } = useRouteMatch();

    return (
        <div className="container adminContainer">
            <div className="adminDesktopView">
                <div className="row">
                    <div className="col-3 adminMenu">
                        <Link to={`${url}/addProduct`}>
                            <li>Add Product</li>
                        </Link>
                        <Link to={`${url}/manageProduct`}>
                            <li>Manage Product</li>
                        </Link>
                    </div>
                    <div className="col mt-5 adminMainPart">
                        <Switch>
                            <Route exact path={path}>
                                <AddProduct />
                            </Route>
                            <Route
                                path={`${path}/manageProduct`}
                            >
                                <ManageProduct />
                            </Route>
                            <Route
                                path={`${path}/addProduct`}
                            >
                                <AddProduct />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
            <div className="adminMobileView">
                <AdminMobileView />
            </div>
        </div>
    );
};

export default Admin;
