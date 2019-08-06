import React, { Component } from 'react';
import './service.css';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';

export default class Service extends Component {
    constructor(props) {
        super(props)
        this.state = {
            heating: false,
            brake: false,
            oil: false,
            alignment: false,
            tire: false
        }
    }

    handleExpand(prop) {
        this.setState({ [prop]: !this.state[prop] })
    }

    render() {
        return (
            <section id='service'>
                <h2>SERVICES</h2>
                <List
                    component="nav"
                >
                    <ListItem divider={true} selected={true} onClick={this.handleExpand.bind(this, 'heating')}>
                        <ListItemText primary="Heating&Cooling" />
                        {this.state.heating ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.heating} timeout="auto" unmountOnExit>
                        <List component="section" disablePadding>
                            <ListItem button>
                                <ListItemText>
                                    <h6>Our Coolant System Evaluation includes:</h6>
                                    <ul>
                                        <li>Quality service performed by a professional Pep Boys technician</li>
                                        <li>Visual inspection of entire coolant system, including belts, hoses, caps, clamps, cooling fans, water pump and radiator.</li>
                                        <li>Notation of any signs indicating overheating</li>
                                        <li>Oil and transmission fluid check to determine potential coolant leak in the engine</li>
                                    </ul>
                                    <Button href='/makeAnAppointment' color='secondary' variant="contained">Book An Appointment</Button>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem divider={true} selected={true} onClick={this.handleExpand.bind(this, 'brake')}>
                        <ListItemText primary="Brake Inspection" />
                        {this.state.brake ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.brake} timeout="auto" unmountOnExit>
                        <List component="section" disablePadding>
                            <ListItem button>
                                <ListItemText>
                                    <h5>Brake Services</h5>
                                    <p>If your brakes squeal or grind, grab causing jerky stops or your warning light flashes it may be time for change brake system inspection</p>
                                    <h6>Every Brake Service Includes</h6>
                                    <ul>
                                        <li>Quality Service</li>
                                        <li>Thorough Brake System Evaluation</li>
                                        <li>Lifetime Pad or Shoe Warranty</li>
                                        <li>Resurfacing Serviced Drum or Rotor</li>
                                    </ul>
                                    <Button href='/makeAnAppointment' color='secondary' variant="contained">Book An Appointment</Button>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem divider={true} selected={true} onClick={this.handleExpand.bind(this, 'oil')}>
                        <ListItemText primary="Oil Changes" />
                        {this.state.oil ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.oil} timeout="auto" unmountOnExit>
                        <List component="section" disablePadding>
                            <ListItem button>
                                <ListSubheader>
                                    <Link to='/mileage'>High Mileage Motor Oil Change Packages</Link>
                                </ListSubheader>
                            </ListItem>
                            <ListItem button>
                                <ListSubheader>
                                    <Link to='/synthetic'>Synthetic Motor Oil Change Packages</Link>
                                </ListSubheader>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem divider={true} selected={true} onClick={this.handleExpand.bind(this, 'alignment')}>
                        <ListItemText primary="Alignment" />
                        {this.state.alignment ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.alignment} timeout="auto" unmountOnExit>
                        <List component="section" disablePadding>
                            <ListItem button>
                                <ListItemText>
                                    <h5>Why Alignment is Important?</h5>
                                    <ul>
                                        <li>Correct alignment is critical to safely controlling your vehicle, braking stability, extending tire life, and ensuring a comfortable ride.</li>
                                        <li>Misaligned tires can cause uneven tire wear, poor fuel economy and an uncomfortable ride for you and your passengers.</li>
                                    </ul>                                  
                                </ListItemText>
                            </ListItem>
                            <ListItem button>
                                <ListItemText>
                                    <h5>Wedge Adjustments/Shim Kits</h5>
                                    <ul>
                                        <li>Evaluation of your vehicle's steering and suspension components by a Pep Boys professional technician</li>
                                        <li>Alignment specifications via detailed computer analysis and computer-generated measurements that restore </li>
                                    </ul>
                                    <Button href='/makeAnAppointment' color='secondary' variant="contained">Book An Appointment</Button>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem divider={true} selected={true} onClick={this.handleExpand.bind(this, 'tire')}>
                        <ListItemText primary="Tire Rotation" />
                        {this.state.tire ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.tire} timeout="auto" unmountOnExit>
                        <List component="section" disablePadding>
                            <ListItem button>
                            <ListItemText>
                                    <h5>Tire Rotation Services Includes:</h5>
                                    <ul>
                                        <li> It helps protect your tires and maintains an even amount of treadwear on all tires.</li>
                                        <li>Regular tire rotations are the best way to make sure your tires live a long and healthy life. .</li>
                                    </ul>
                                    <Button href='/makeAnAppointment' color='secondary' variant="contained">Book An Appointment</Button>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </section>
        )
    }
}