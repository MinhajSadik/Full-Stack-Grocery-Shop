import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
// import Header from "../Header/Header";
import HomeCard from "../HomeCard/HomeCard";
import HomeLoading from "../../LoadingGif/homeloading.gif";

const Home = () => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        axios({
            method: "get",
            url:
                "https://intense-spire-37690.herokuapp.com/allProducts",
            responseType: "stream",
        }).then(function (response) {
            setProducts(response.data);
        });
    }, []);
    return (
        <div style={{ marginTop: "120px" }}>
            {products ? (
                <Row className="container d-flex justify-content-center ml-auto mr-auto">
                    {products.map((product) => (
                        <HomeCard
                            product={product}
                        ></HomeCard>
                    ))}
                </Row>
            ) : (
                <div className="homeSpinner text-center">
                    <img src={HomeLoading} alt="" />
                </div>
            )}
        </div>
    );
};

export default Home;
