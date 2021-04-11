import React, { useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { LoggedInUserContext } from "../../App";
// import Header from "../Header/Header";
import SocialLogin from "../SocialLogIn/SocialLogIn";

const LogInPage = () => {
    // eslint-disable-next-line no-unused-vars
    const [LoggedInUser, setLoggedInUser] = useContext(LoggedInUserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    useEffect(() => {
        if (LoggedInUser?.email) {
            history.replace(from);
        }
    }, [LoggedInUser, from, history]);
    return (
        <div style={{ marginTop: "120px" }}>
            <SocialLogin />
        </div>
    );
};

export default LogInPage;
