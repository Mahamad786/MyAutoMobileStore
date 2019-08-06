import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./Profile.css";
import PopUp from '../popup/PopUp';

var user;
export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            success: false,
            message:"",
            title:""
        }
    }

    handleChangePassword(event) {
        event.preventDefault();

        fetch("http://localhost:3001/changepassword", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Object.assign({}, user, { password: this.refs.newPassword.children[1].children[1].value }))
        })
            .then((res) => {
                // console.log("json...",res.json());
                return res.json();
            })
            .then((data) => {
                this.setState({ success: true, message: "Password has been changed successfully", title: "Success" })
                this.refs.newPassword.children[1].children[1].value = "";
                this.refs.oldPassword.children[1].children[1].value = "";
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
        user = JSON.parse(sessionStorage.getItem("user")) ? JSON.parse(sessionStorage.getItem("user")) : [];
        return (
            <section id="profile">
                <h5>Hi {user.firstName + " " + user.lastName}</h5>
                <form onSubmit={this.handleChangePassword.bind(this)}>
                    <h4>Change Password</h4>
                    <TextField
                        id="oldPassword"
                        label="OldPassword"
                        type="password"
                        name="oldPassword"
                        autoComplete="oldPassword"
                        margin="normal"
                        variant="outlined"
                        ref="oldPassword"
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
                        Update
                   </Button>
                </form>
                <PopUp open={this.state.success} handleClose={this.handleClose.bind(this)} message={this.state.message} title={this.state.title} />
            </section>
        )
    }
}