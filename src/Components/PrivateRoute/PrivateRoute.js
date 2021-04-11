import React from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { LoggedInUserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
    const [LoggedInUser, setLoggedInUser] = useContext(LoggedInUserContext);

    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    LoggedInUser.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: location,
                                },
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default PrivateRoute;
