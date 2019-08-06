import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
//import Input from '@material-ui/core/Input';
import './MakeAnAppointment.css';
import PopUp from '../popup/PopUp';

export default class MakeAnAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success:false,
            message:"",
            title:"",
            location: "",
            service: "",
            time: ""
        }
    }

    handleChange(Select, event) {
        this.setState({ [Select]: event.target.value })
    }

    handleClose() {
        this.setState({ success: false })
    }

    handleAppointment(event) {
        event.preventDefault();

        let details = {
            fullName: this.refs.fullname.children[1].children[1].value,
            phoneNumber: this.refs.phonenumber.children[1].children[1].value,
            location: this.state.location,
            service: this.state.service,
            time: this.state.time,
            vnumber: this.refs.vnumber.children[1].children[1].value,
            date: this.refs.date.children[0].lastChild.value
        }

        fetch("http://localhost:3001/appointment", {
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
                this.setState({
                    success: true,
                    message: "Appointment has been created successfully",
                    title: "Success",
                    location: "",
                    service: "",
                    time:""
                })
                this.refs.date.children[0].lastChild.value = "";
                this.refs.vnumber.children[1].children[1].value = "";
                this.refs.fullname.children[1].children[1].value = "";
                this.refs.phonenumber.children[1].children[1].value = "";
            })
            .catch((err) => {
                this.setState({ success: true, message: "Sorry something went wrong please try again", title: "Error" })
            })
    }

    render() {
        const style = {
            "marginRight": "30px"
        }
        return (
            <section id='appointment'>
                <form onSubmit={this.handleAppointment.bind(this)}>
                    <h1>Make An Appointment</h1>
                    <TextField
                        id="fullName"
                        label="Full Name"
                        type="text"
                        name="fullname"
                        autoComplete="fullname"
                        margin="normal"
                        variant="outlined"
                        ref="fullname"
                    />
                     <TextField
                        id="phonenumber"
                        label="Contact Number"
                        type="number"
                        name="phonenumber"
                        autoComplete="phonenumber"
                        margin="normal"
                        variant="outlined"
                        ref="phonenumber"
                    />
                    <TextField
                        id="vnumber"
                        label="Vehiclenumber"
                        type="text"
                        name="vnumber"
                        autoComplete="vnumber"
                        margin="normal"
                        variant="outlined"
                        ref="vnumber"
                    />
                     <TextField
                        id="date"
                        // label="Date"
                        type="date"
                        name="date"
                        autoComplete="date"
                        margin="normal"
                        variant="outlined"
                        ref="date"
                    />
                    <FormControl className="maginTop">
                        <InputLabel htmlFor="age-native-simple">Location</InputLabel>
                        <Select
                            native
                            value={this.state.location}
                            onChange={this.handleChange.bind(this,'location')}
                        >
                            <option value="" />
                            <option value='silkboard'>Silkboard</option>
                            <option value='whitefield'>Whitefield</option>
                            <option value='ec'>Electroniccity</option>
                            <option value='mejestic'>Mejestic</option>
                            <option value='sarjapur'>Sarjapur</option>
                            <option value='manyata'>Manyata Tech Park</option>
                        </Select>
                    </FormControl>
                    <FormControl className="maginTop">
                        <InputLabel htmlFor="age-native-simple">Chooses a Service</InputLabel>
                        <Select
                            native
                            value={this.state.service}
                            onChange={this.handleChange.bind(this,'service')}
                        >
                            <option value="" />
                            <option value='tire'>Tire Services</option>
                            <option value='oil'>Oil change Services</option>
                            <option value='brakess'>Brake Services</option>
                            <option value='battery'>Battery Services</option>
                            <option value='other'>Other Services</option>
                        </Select>
                    </FormControl>
                    <FormControl className="maginTop">
                        <InputLabel htmlFor="age-native-simple">Select a Time</InputLabel>
                        <Select
                            native
                            value={this.state.time}
                            onChange={this.handleChange.bind(this,'time')}
                        >
                            <option value="" />
                            <option value={10}>10 AM</option>
                            <option value={11}>11 AM</option>
                            <option value={12}>12 PM</option>
                            <option value={1}>1 AM</option>
                            <option value={2}>2 PM</option>
                            <option value={3}>3 PM</option>
                            <option value={4}>4 PM</option>
                            <option value={5}>5 PM</option>
                            <option value={6}>6 PM</option>
                        </Select>
                    </FormControl>
                    <Button variant="contained" color="primary" type="submit">
                        Book An Appointment
                   </Button>
                </form>
                <PopUp open={this.state.success} handleClose={this.handleClose.bind(this)} message={this.state.message} title={this.state.title} />
            </section>
        )
    }
}