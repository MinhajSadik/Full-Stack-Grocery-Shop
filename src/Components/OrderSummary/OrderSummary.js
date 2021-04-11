import React from "react";

const OrderSummary = ({ price, quantityValue, productName }) => {
    const countPrice = Number(price) * quantityValue;
    const shippingCharge = 60;
    const tax = countPrice * 0.1;
    const totalCharge = countPrice + shippingCharge + tax;
    return (
        <div>
            <table class="table table-success table-striped">
                <tr>
                    <th scope="row">Product</th>
                    <td>{productName}</td>
                </tr>
                <tr>
                    <th scope="row">Price</th>
                    <td>
                        {countPrice}
                        <span className="takaSymbol">৳</span>
                    </td>
                </tr>
                <tr>
                    <th scope="row">Shipping Charge</th>
                    <td>
                        {shippingCharge}
                        <span className="takaSymbol">৳</span>
                    </td>
                </tr>
                <tr>
                    <th scope="row">Tax(10%)</th>
                    <td>
                        {tax}
                        <span className="takaSymbol">৳</span>
                    </td>
                </tr>
                <tr>
                    <th scope="row">Total Charge</th>
                    <td>
                        {totalCharge}
                        <span className="takaSymbol">৳</span>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default OrderSummary;
