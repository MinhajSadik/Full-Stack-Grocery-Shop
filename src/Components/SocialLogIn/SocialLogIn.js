import React, { useContext, useEffect } from "react";
import "./SocialLogIn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

import {
    currentLoggedInUserLoad,
    initializeFramework,
    signInWithFacebook,
    signInWithGoogle,
} from "../FirebaseManegment/FirebaseManegment";
import { LoggedInUserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

const SocialLogin = () => {
    initializeFramework();
    const [LoggedInUser, setLoggedInUser] = useContext(LoggedInUserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const googleSignInHandle = () => {
        signInWithGoogle().then((res) => {
            setLoggedInUser(res);
            history.replace(from);
        });
    };
    const facebookSignInHandle = () => {
        signInWithFacebook().then((res) => {
            setLoggedInUser(res);
            history.replace(from);
        });
    };
    return (
        <div className="socialButton">
            <div className="socialHeaderText">
                <h2>Sign In with social network</h2>
            </div>
            <div className="facebook">
                <button onClick={facebookSignInHandle}>
                    <div className="row socialRow">
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="socialIcons"
                        />
						Log in with facebook
					</div>
                </button>
            </div>
            <div className="google">
                <button onClick={googleSignInHandle}>
                    <div className="row socialRow">
                        <FontAwesomeIcon
                            icon={faGoogle}
                            className="socialIcons"
                        />
						Log in with Google
					</div>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
