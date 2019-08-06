import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import './research.css';

export default class Research extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }
    handleChange(event, value) {
        this.setState({ value })
    }

    render() {

        return (
            <section id='research'>
                <h2>CAR CARE</h2>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                        indicatorColor="secondary"
                        textColor="secondary"
                        variant="fullWidth"
                    >
                        <Tab label="Vehicle Maintenance Tips" />
                        <Tab label="Tire Care Tips" />
                        <Tab label="How To Buy a Battery" />
                        <Tab label="How to Wash & Wax Your Car" />
                    </Tabs>
                </AppBar>
                {this.state.value === 0 && <section className='tabContainer'>
                    <h6>What is routine car maintenance?</h6>
                    <p>Routine vehicle maintenance can include several different jobs your car, truck, or SUV needs to have done to operate smoothly and safely. Listed below are some of the more common types of routine vehicle maintenance work, and for a more extensive list, consult your owner’s manual </p>
                    <ul>
                        <li>Oil change</li>
                        <li>Air and other filter replacements</li>
                        <li>Tire rotation</li>
                        <li>Brake inspection</li>
                        <li>Engine inspection</li>
                        <li>Transmission inspection</li>
                        <li>Battery inspection</li>
                        <li>Windshield wiper replacement</li>
                    </ul>
                </section>}
                {this.state.value === 1 && <section className='tabContainer'>
                    <h6>Tire Care Tips</h6>
                    <p>With all the consideration that is given to the body and moving parts of your car, sometimes tire maintenance can fall by the wayside. Here are a few tips to help you extend the life of your tires, and save you a small fortune in the process:</p>
                    <ul>
                        <li>Monitoring tire pressure is the most basic thing you can do when caring for your tires, and it really doesn't require much effort.</li>
                        <li>If you have ever felt your car vibrate or shake at high speeds on the highway, there is a good chance that your wheels are off balance.</li>
                        <li>Buy Tires in set of 4 and rotate tires consistently</li>
                        <li>Check alignment</li>
                        <li>There are a number of other minor things that you can do to care for your tires and wheels, and they usually start with how you drive. Naturally, the faster you accelerate from a stop, the quicker your tread is going to burn, so be sure to take it easy on the gas.</li>
                    </ul>
                    <Button href='/product' color='secondary' variant="contained">Shop Tires</Button>
                </section>}
                {this.state.value === 2 && <section className='tabContainer'>
                    <h6>Three Major Things to Note Before Selecting your Battery</h6>
                    <p>Your vehicle's battery helps power it's engine and provides a charge to the electrical and electronic accessories. When your car battery dies, your vehicle will no longer run – potentially leaving you stranded. Look at the battery as the heart of your car's electrical system.</p>
                    <ul>
                        <li>First check your owner's manual to determine what battery size and specifications you need for your vehicle's make and model. If you cannot locate this information, we are always more than happy to lend a hand.</li>
                        <li>Think about your driving needs and consider your environment and typical commute. Higher temperatures are hard on car batteries, so if you're living in a hotter climate be sure to purchase a battery that is built for warmer weather. Also, if your commute involves short, stop and go trips, a battery with a longer life will better suit your needs.</li>
                        <li>Check the replacement warranty for the battery you want to purchase, and always keep the receipt. Most batteries will offer a free replacement guarantee if the battery gives out before the warranty date.</li>
                    </ul>
                    <Button href='/product' color='secondary' variant="contained">Shop Batteries</Button>
                </section>}
                {this.state.value === 3 && <section className='tabContainer'>
                    <h6>What All You Need:</h6>
                    <p>Your vehicle's battery helps power it's engine and provides a charge to the electrical and electronic accessories. When your car battery dies, your vehicle will no longer run – potentially leaving you stranded. Look at the battery as the heart of your car's electrical system.</p>
                    <ul>
                        <li>Car Wash Soap or Cleaner</li>
                        <li>Washing Mitt  or Sponge</li>
                        <li>Bug & Tar  Remover</li>
                        <li>Hose</li>
                        <li>Wax &  Applicator</li>
                        <li>Chamois or  Terry Towel</li>
                        <li>2 Buckets</li>
                        <li>Soft Bristled  Brush</li>
                    </ul>
                </section>}
            </section>
        )
    }
}