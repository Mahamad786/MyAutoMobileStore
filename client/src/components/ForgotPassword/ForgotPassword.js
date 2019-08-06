import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./ForgotPassword.css";
import PopUp from '../popup/PopUp';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            message:"",
            title:""
        }
    }

    handleForgotPassword(event){
        event.preventDefault();

        fetch("http://localhost:3001/changepassword", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email : this.refs.email.children[1].children[1].value, password: this.refs.newPassword.children[1].children[1].value })
        })
            .then((res) => {
                // console.log("json...",res.json());
                return res.json();
            })
            .then((data) => {
                this.setState({ success: true, message: "Password has been changed successfully", title: "Success" })
                this.refs.email.children[1].children[1].value = "";
                this.refs.newPassword.children[1].children[1].value = "";
                this.refs.confirmPassword.children[1].children[1].value = "";
            })
            .catch((err) => {
                this.setState({ success: true, message: "Sorry something went wrong please try again", title: "Error" })
            })
    }

    handleClose() {
        this.setState({ success: false })
    }

    render() {

        return (
            <section id="forgotPassword">
                <form onSubmit={this.handleForgotPassword.bind(this)}>
                    <h4>Forgot Password</h4>
                    <TextField
                        id="email"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        ref="email"
                        required = {true}
                    />
                    <TextField
                        id="newPassword"
                        label="NewPassword"
                        type="password"
                        autoComplete="newPassword"
                        margin="normal"
                        variant="outlined"
                        ref="newPassword"
                        required = {true}
                    />
                    <TextField
                        id="confirmPassword"
                        label="ConfirmPassword"
                        type="password"
                        autoComplete="confirmPassword"
                        margin="normal"
                        variant="outlined"
                        ref="confirmPassword"
                        required = {true}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                   </Button>
                </form>
                <PopUp open={this.state.success} handleClose={this.handleClose.bind(this)} message={this.state.message} title={this.state.title} />
            </section>
        )
    }
}