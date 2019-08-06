import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css';
import { Link, Redirect } from 'react-router-dom';

var user = [],cart=[];
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { authenticated: null }
    }

    handleLogin(event) {
        event.preventDefault();
        let email = this.refs.email.children[1].children[1].value, password = this.refs.password.children[1].children[1].value;

        let credentials = user.find((data) => {
            return email === data.email && password === data.password
        })

        if (credentials) {
            cart = cart.filter(product =>{
                return product.email === credentials.email;
            });
            
            sessionStorage.setItem("user", JSON.stringify(Object.assign({}, credentials, { authenticated: true,cartCount:cart.length >=1 ? cart.length : 0 })));
            this.setState({ authenticated: true });
        }
        else {
            this.setState({ authenticated: false })
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/users',
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
                user = data;
            })
            .catch((err) => console.log('Something went wrong while getting response'))


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
                console.log(" cartjson...", data);
                cart = data;
            })
            .catch((err) => console.log('Something went wrong while getting response'))
    }

    render() {
        if (this.state.authenticated) {
            return <Redirect to='/' />
        }
        return (
            <React.Fragment>
                <p id="loginError">{this.state.authenticated === false ? "Incorrect user name or password,please enter valid credentials" : ""}</p>
                <section id='login'>
                    <form onSubmit={this.handleLogin.bind(this)}>
                        <h1>Login</h1>
                        <TextField
                            id="email"
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                            ref="email"
                            required={true}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                            ref="password"
                            required={true}
                        />
                        <Button variant="contained" color="primary" type="submit">
                            Login
                        </Button>
                        <Link to='/forgotpassword'>Forgot Password</Link>
                    </form>
                </section>
            </React.Fragment>
        )
    }
}