import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './productsdetailview.css';

let user = {};
class ProductsView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedDetailViewProduct: JSON.parse(sessionStorage.getItem("selectedDetailViewProduct")),
            cartProducts: JSON.parse(sessionStorage.getItem("products")),
            authenticated: JSON.parse(sessionStorage.getItem("user"))
        }
    }
    componentDidMount(){
        // for(let i in this.state.cartProducts) {
        //     if(this.state.data.id == this.state.cartProducts[i].id && this.state.cartProducts[i].productAdded){
        //         document.getElementById('add_to_cart').innerHTML="In Cart";
        //         document.getElementById('add_to_cart').disabled=true;
        //       }
        // } 
    }
    addCart(product) {
        // let products=sessionStorage.getItem("products") ? JSON.parse(sessionStorage.getItem("products")): [];
        // product.productAdded=true;
        // products.push(product);
        // sessionStorage.setItem("products",JSON.stringify(products));
        // sessionStorage.cartItem = parseInt(sessionStorage.cartItem)+1;
        // document.getElementById('cartItem').innerHTML='('+sessionStorage.cartItem+')';
        let details = {
            image:product.image,
            name:product.name,
            email:user.email
        }

        sessionStorage.setItem("user", JSON.stringify(Object.assign({}, user, {cartCount :user.cartCount + 1 })));
        
        fetch("http://localhost:3001/addCart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(details)
        })
            .then((res) => {
                // console.log("json...",res.json());
                return res.json();
            })
            .then((data) => {
                console.log("product added successfully");
            })
            .catch((err) => {
                console.log("something went wrong,please try again");
            })
    }

    render() {
        user = JSON.parse(sessionStorage.getItem("user")) ? JSON.parse(sessionStorage.getItem("user")) : {};
        return (
            <section id='productsDetailViewContainer'>
                <img src={this.state.selectedDetailViewProduct.image} alt='image not found' />
                <h4>{this.state.selectedDetailViewProduct.name}</h4>
                {!this.state.authenticated ?
                    <span id="loginInfo">Please login/signup to add product to the cart</span>
                    : <button id="add_to_cart">
                        <Link className='products' to='/Cart' key={this.state.selectedDetailViewProduct.id} onClick={() => this.addCart(this.state.selectedDetailViewProduct)}>
                            Add to cart
                        </Link>
                    </button>
                }
            </section>
        )
    }
}

export default ProductsView;