import React, { Component } from 'react';
import './service.css';
import Button from '@material-ui/core/Button';

export default class Synthetic extends Component {
    render() {

        return (
            <section id='synthetic'>
                <h4>Pennzoil Synthetic or High Mileage Synthetic Package</h4>
                <p>Pennzoil Platinum Synthetic Motor Oil and High Mileage Synthetic Motor Oil both provide a cleaner and more efficient engine. Required for original equipment in most newer vehicles, synthetic oil improves gas mileage and engine responsiveness.</p>
                <h6>Includes:</h6>
                <ul>
                    <li>Up to five quarts of</li>
                    <li>Pennzoil Platinum Synthetic or High Mileage Synthetic Motor Oil**</li>
                    <li>Oil filter replacement*</li>
                    <li>Free tire rotation</li>
                    <li>Tread depth and tire pressure check</li>
                    <li>Courtesy Vehicle Inspection</li>
                </ul>
                <Button href='/makeAnAppointment' color='secondary' variant="contained">Book An Appointment</Button>
            </section>
        )
    }
}