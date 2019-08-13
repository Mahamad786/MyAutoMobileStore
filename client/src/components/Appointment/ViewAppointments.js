import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import PopUp from '../popup/PopUp';
import './appointments.css';

export default class ViewAppointments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            success: false,
            title: "",
            open: false
        }
    }


    componentDidMount() {
        fetch('http://localhost:3001/appointments',
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
                this.setState({ rows: data })
            })
            .catch((err) => console.log('Something went wrong while getting response'))
    }

    handleRemove(cname, event) {
        event.preventDefault();
        let that = this;
        fetch("http://localhost:3001/removeAppointment", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ fullName: cname })
        })
            .then((res) => {
                // console.log("json...",res.json());
                return res.json();
            })
            .then((data) => {
                let updateRows = that.state.rows.filter(data => {
                    return data.fullName !== cname;
                });

                that.setState({ rows: updateRows, success: true, message: "Appointment has been removed successfully", title: "Success" })
            })
            .catch((err) => {
                that.setState({ success: true, message: "Sorry something went wrong please try again", title: "Error" })
            })
    }

    handleClose() {
        this.setState({ success: false })
    }

    render() {
        return (
            <React.Fragment>
                <Paper style={{marginBottom: "20%"}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Full Name</TableCell>
                                <TableCell align="right">Contact Number</TableCell>
                                <TableCell align="right">Vehicle Number</TableCell>
                                <TableCell align="right">Location</TableCell>
                                <TableCell align="right">Service</TableCell>
                                <TableCell align="right">Time</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.rows.map(row => (
                                <TableRow key={row.name}>
                                    <TableCell>
                                        {row.fullName}
                                    </TableCell>
                                    <TableCell align="right">{row.phoneNumber}</TableCell>
                                    <TableCell align="right">{row.vnumber}</TableCell>
                                    <TableCell align="right">{row.service}</TableCell>
                                    <TableCell align="right">{row.location}</TableCell>
                                    <TableCell align="right">{row.time}</TableCell>
                                    <TableCell align="right"><DeleteIcon onClick={this.handleRemove.bind(this, row.fullName)} id="deleteIcon"></DeleteIcon></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                <PopUp open={this.state.success} handleClose={this.handleClose.bind(this)} message={this.state.message} title={this.state.title} />
            </React.Fragment>
        );
    }
}
