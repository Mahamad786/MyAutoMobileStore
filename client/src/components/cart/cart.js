import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './cart.css';

export default class Cart extends Component{
    render(){
        const style={
            "marginRight":"30px"
        }
        return(
            <div id='cart'>
                <h3>Product Successfully Added to Cart.</h3>
                <button style={style}>
                 <Link className='products' to='/'>
                  Continue Shopping
                </Link>
                </button>
                <button>
                 <Link className='products' to='/Checkout'>
                  Checkout
                </Link>
                </button>
            </div>
        )
    }
}