import React, { useContext, useState } from "react";
import { Button, Nav, Navbar, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoggedInUserContext } from "../../App";
import { signOut } from "../FirebaseManegment/FirebaseManegment";
import "./Header.css";

const Header = () => {
    // eslint-disable-next-line no-unused-vars
    const [LoggedInUser, setLoggedInUser] = useContext(LoggedInUserContext);
    const [toggle, setToggle] = useState("none");

    const profileOpen = () => {
        toggle === "none" ? setToggle(" ") : setToggle("none");
    };
    const logOut = () => {
        signOut();
        setToggle("none");
    };
    return (
        <>
            <div className="headerPart">
                <Navbar
                    bg="light"
                    expand="lg"
                    className="container"
                >
                    <Navbar.Brand href="">
                        Grocery-House
					</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav  ">
                        <Nav className="ml-auto">
                            <div className="navPart">
                                <Link to="/home">
                                    Home
								</Link>
                                <Link to="/orders">
                                    Orders
								</Link>
                                <Link to="/admin">
                                    Admin
								</Link>

                                {LoggedInUser.displayName ? (
                                    <Button
                                        onClick={
                                            profileOpen
                                        }
                                    >
                                        {
                                            LoggedInUser.displayName
                                        }
                                        <img
                                            src={
                                                LoggedInUser.photoURL
                                            }
                                            alt=""
                                        />
                                    </Button>
                                ) : (
                                    <Link
                                        to="/logIn"
                                        style={{
                                            border:
                                                "none",
                                        }}
                                    >
                                        {" "}
                                        <Button>
                                            Log
                                            In
										</Button>{" "}
                                    </Link>
                                )}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div
                className="profilePart  "
                id="profilePart"
                style={{ display: toggle }}
            >
                <Card
                    bg="secondary"
                    style={{
                        width: "18rem",
                        color: "white",
                        textAlign: "center",
                    }}
                    className="mb-2"
                >
                    <Card.Header>
                        Hi 🙂  {LoggedInUser.displayName}
                    </Card.Header>
                    <Card.Body>
                        <Button onClick={logOut}>
                            Sign Out
						</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default Header;
