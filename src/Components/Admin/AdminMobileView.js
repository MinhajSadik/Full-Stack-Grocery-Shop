import React from "react";
import AddProduct from "../AddProduct/AddProduct";
import "./Admin.css";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import ManageProduct from "../ManageProduct/ManageProduct";

const AdminMobileView = () => {
    let { path, url } = useRouteMatch();

    return (
        <div className="container adminContainer">
            <div className=" adminMenu">
                <Link to={`${url}/addProduct`}>
                    <li>Add Product</li>
                </Link>
                <Link to={`${url}/manageProduct`}>
                    <li>Manage Product</li>
                </Link>
            </div>

            <div className="row">
                <div className="adminMainPart">
                    <Switch>
                        <Route exact path={path}>
                            <AddProduct />
                        </Route>
                        <Route path={`${path}/manageProduct`}>
                            <ManageProduct />
                        </Route>
                        <Route path={`${path}/addProduct`}>
                            <AddProduct />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default AdminMobileView;
