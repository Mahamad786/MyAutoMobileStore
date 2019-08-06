import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './cart.css';

var user;
export default class Cartview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartProducts: []
        }
    }

    componentDidMount() {
        user = JSON.parse(sessionStorage.getItem("user")) ? JSON.parse(sessionStorage.getItem("user")) : {};
        //fetching cart details
        fetch('http://localhost:3001/cart',
            {
                method: 'GET'
            }
        )
            .then((res) => {
                // console.log("json...",res.json());
                return res.json();
            })
            .then((data) => {
                console.log("json...", data);
                this.setState({
                    cartProducts: data.filter(product => {
                        return product.email === user.email;
                    })
                })
            })
            .catch((err) => console.log('Something went wrong while getting response'))
    }

    remove(product, message) {
        // event.preventDefault();
        let that = this;
        fetch("http://localhost:3001/removeCart", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ image: product.image, email: user.email })
        })
            .then((res) => {
                // console.log("json...",res.json());
                return res.json();
            })
            .then((data) => {
                let newData = this.state.cartProducts.slice()
                this.setState({
                    cartProducts: newData.filter(data => {
                        return product.image !== data.image;
                    })
                })
                alert(message);
                sessionStorage.setItem("user", JSON.stringify(Object.assign({}, user, { cartCount: user.cartCount >= 1 ? user.cartCount - 1 : 0 })));
            })
            .catch((err) => {
                alert("Sorry something went wrong while removing,please try again")
            })
    }

    render() {
        if (this.state.cartProducts.length <= 0) {
            return <h4 id="noItems">No Items Found</h4>
        }
        return (
            <div className="cartContainer">
                {this.state.cartProducts.map(
                    (product) => (
                        <div>
                            <img src={product.image} alt='image not found' />
                            <h4>{product.name}</h4>
                            <button id='checkout' onClick={() => this.remove(product, "Product Checked out successfully")}>
                                <Link to="/Checkout">Checkout</Link>
                            </button>
                            <button onClick={() => this.remove(product, "Product removed successfully")}>
                                <Link to="/Cartview">Remove</Link>
                            </button>
                        </div>
                    )
                )
                }
            </div>
        )
    }
}