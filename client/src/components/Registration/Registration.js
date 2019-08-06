import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Registration.css';
import PopUp from '../popup/PopUp';

var userList = [], isUserExist;

export default class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = { success: false, message: "", title: "" }
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
                userList = data.slice();
            })
            .catch((err) => console.log('Something went wrong while getting response'))
    }

    handleRegistration(event) {
        event.preventDefault();

        if (userList.length > 0) {
            isUserExist = userList.find(data => {
                return data.email === this.refs.email.children[1].children[1].value;
            })

            if (isUserExist) return alert("This user is already registered,pleas try with some other email")
        }

        let user = {
            firstName: this.refs.firstname.children[1].children[1].value,
            lastName: this.refs.lastname.children[1].children[1].value,
            address: this.refs.address.children[1].children[1].value,
            phoneNumber: this.refs.phonenumber.children[1].children[1].value,
            city: this.refs.city.children[1].children[1].value,
            vname: this.refs.vname.children[1].children[1].value,
            vnumber: this.refs.vnumber.children[1].children[1].value,
            email: this.refs.email.children[1].children[1].value,
            password: this.refs.password.children[1].children[1].value,
            role: "non_admin"
        }


        fetch("http://localhost:3001/signUp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then((res) => {
                // console.log("json...",res.json());
                return res.json();
            })
            .then((data) => {
                this.setState({ success: true, message: "User registration has been successful,please login", title: "Success" })
                this.refs.firstname.children[1].children[1].value = "";
                this.refs.lastname.children[1].children[1].value = "";
                this.refs.address.children[1].children[1].value = "";
                this.refs.phonenumber.children[1].children[1].value = "";
                this.refs.city.children[1].children[1].value = "";
                this.refs.vname.children[1].children[1].value = "";
                this.refs.vnumber.children[1].children[1].value = "";
                this.refs.email.children[1].children[1].value = "";
                this.refs.password.children[1].children[1].value = "";
            })
            .catch((err) => this.setState({ success: true, message: "Sorry something went wrong please try again", title: "Error" }))
    }

    handleClose() {
        this.setState({ success: false })
    }

    render() {

        return (
            <section id='register'>
                <form onSubmit={this.handleRegistration.bind(this)}>
                    <h1>Registration</h1>
                    <TextField
                        id="firstname"
                        label="Firtname"
                        type="text"
                        name="firstname"
                        autoComplete="firstname"
                        margin="normal"
                        variant="outlined"
                        ref="firstname"
                        required={true}
                    />
                    <TextField
                        id="lastname"
                        label="Lastname"
                        type="text"
                        name="lastname"
                        autoComplete="lastname"
                        margin="normal"
                        variant="outlined"
                        ref="lastname"
                    />
                    <TextField
                        id="address"
                        label="Address"
                        type="text"
                        name="address"
                        autoComplete="address"
                        margin="normal"
                        variant="outlined"
                        ref="address"
                    />
                    <TextField
                        id="phonenumber"
                        label="Phonenumber"
                        type="number"
                        name="phonenumber"
                        autoComplete="phonenumber"
                        margin="normal"
                        variant="outlined"
                        ref="phonenumber"
                        required={true}
                    />
                    <TextField
                        id="city"
                        label="City"
                        type="text"
                        name="city"
                        autoComplete="city"
                        margin="normal"
                        variant="outlined"
                        ref="city"
                    />
                    <TextField
                        id="vname"
                        label="Vehiclename"
                        type="vname"
                        name="vname"
                        autoComplete="vname"
                        margin="normal"
                        variant="outlined"
                        ref="vname"
                    />
                    <TextField
                        id="vnumber"
                        label="Vehiclenumber"
                        type="vnumber"
                        name="vnumber"
                        autoComplete="vnumber"
                        margin="normal"
                        variant="outlined"
                        ref="vnumber"
                        required={true}
                    />
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
                        Register
                   </Button>
                </form>
                <PopUp open={this.state.success} handleClose={this.handleClose.bind(this)} message={this.state.message} title={this.state.title} />
            </section>
        )
    }
}