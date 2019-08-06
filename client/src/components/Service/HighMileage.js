import React, { Component } from 'react';
import './service.css';
import Button from '@material-ui/core/Button';

export default class Mileage extends Component {
    render() {

        return (
            <section id='mileage'>
                <h4>Pennzoil High Mileage or Semi-Synthetic Package</h4>
                <h6>Includes:</h6>
                <ul>
                    <li>Up to five quarts of Pennzoil High Mileage or Semi-Synthetic Motor Oil</li>
                    <li>Oil Filter replacement</li>                  
                    <li>Free tire rotation</li>
                    <li>Tread depth and tire pressure check</li>
                    <li>Courtesy Vehicle Inspection</li>
                </ul>
                <Button href='/makeAnAppointment' color='secondary' variant="contained">Book An Appointment</Button>
            </section>
        )
    }
}