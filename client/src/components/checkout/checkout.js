import React, { Component } from 'react';
class Checkout extends Component {

    render() {
        console.log(this.props)
        return (
            <h3 style={{
                textAlign: "center",
                marginBottom: "30%"
            }}>Product Checked out successfully.</h3>
        )
    }
}

export default Checkout;