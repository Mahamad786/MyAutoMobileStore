import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import car from '../../images/car.jpg';
import UserIcon from '@material-ui/icons/Person';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import VoiceIcon from '@material-ui/icons/SettingsVoice';
//import Menu from '@material-ui/core/Menu';
import './header.css';


var styles = {
    userIcon: {
        height: '35px',
        width: '150px'
    },
    menu: {
        display: "block",
        zIndex: "1000",
        position: "absolute",
        width: '13%'
    },
    hide: {
        display: "none"
    },
    color: {
        color: "red",
        fontWeight: "bold"
    },
    alignment: {
        position: "fixed",
        zIndex: "1000",
        display: "block",
        width: "20%",
        top: "50px"
    }
};

var user, searchItems = [
    {
        id: 1,
        name: 'Oil'
    },
    {
        id: 2,
        name: 'Shocks&Suspension'
    },
    {
        id: 3,
        name: 'Accessories'
    },
    {
        id: 4,
        name: 'Brakes'
    },
    {
        id: 5,
        name: 'Tires'
    },
    {
        id: 6,
        name: 'Batteries'
    },
    {
        id: 7,
        name: 'Mirrors'
    },
    {
        id: 8,
        name: 'Radiators'
    },
    {
        id: 9,
        name: 'Belts&Hoses'
    },
    {
        id: 10,
        name: 'Horns'
    },
    {
        id: 11,
        name: 'Clutch'
    },
    {
        id: 12,
        name: 'Ignition Coil Packs'
    },
    {
        id: 13,
        name: 'Engine'
    }
];


//speech recognigation
let SpeechRecognition = SpeechRecognition || window.webkitSpeechRecognition;
let SpeechGrammerList = SpeechGrammerList || window.webkitSpeechGrammarList;
let grammer = "#JSGF V1.0";

let recognigation = new SpeechRecognition();
let grammerList = new SpeechGrammerList();

grammerList.addFromString(grammer, 1);
recognigation.grammers = grammerList;
recognigation.lang = "en-US";
recognigation.interimResults = false;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            logout: false,
            voice: "Search Products By Voice",
            speechError: false,
            errorMessage: "",
            foundItems: [],
            searchBox: true
        }
    }

    handleToggle() {
        this.setState({ open: !this.state.open })
    }

    logout() {
        sessionStorage.setItem("user", JSON.stringify(Object.assign({}, user, { authenticated: false, cartCount: 0 })));
        this.setState({ open: false, logout: true })
    }

    select(info) {
        sessionStorage.setItem("selectedProduct", JSON.stringify(info));
        this.setState({ searchBox: false });
    }

    //voice search
    handleSearch() {
        let that = this;
        this.setState({ voice: 'Speak Now.For example Brakes,Oils,Batteries etc' })
        recognigation.start();

        recognigation.onresult = function (event) {
            let last = event.results.length - 1;
            let text = event.results[last][0].transcript;
            let foundItems = searchItems.filter(product => {
                return product.name.toLowerCase().indexOf(text.toLowerCase()) !== -1;
            })
            that.setState({
                voice: 'You searched  ' + text,
                speechError: false,
                foundItems, searchBox: true,
                errorMessage: foundItems.length <= 0 ? "Sorry we could not able to find this product item,please try with some other product name" : "",
                speechError: foundItems.length <= 0 ? true : false
            })
            console.log("speech text....", text)
        }

        recognigation.onspeechend = function () {
            recognigation.stop();
        }

        recognigation.onerror = function (err) {
            that.setState({ speechError: true, errorMessage: "Could not able to recognize your voice,Please try again" })
            console.log("speech error")
        }
    }

    render() {
        var redirect;
        let { classes } = this.props;
        if (this.state.logout) {
            redirect = (<Redirect to='/login' />);
        }

        let items = this.state.foundItems.map(data => {
            return <MenuItem><Link to={`/productview/:${data.id}`} className={classes.color} onClick={() => this.select(data.name)}>{data.name}</Link></MenuItem>
        })


        user = JSON.parse(sessionStorage.getItem("user")) ? JSON.parse(sessionStorage.getItem("user")) : {};
        return (
            <header id='header'>
                <img src={car} alt='car' />
                <section className="input-group mb-3" id='searchBox'>
                    <FormControl>
                        <Input
                            id="searchByVoice"
                            type={'text'}

                            value={this.state.voice}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={this.handleSearch.bind(this)}
                                    >
                                        {<VoiceIcon />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    {this.state.foundItems.length >= 1 &&
                        <Paper className={this.state.searchBox ? classes.alignment : classes.hide}>
                            <MenuList>
                                {items}
                            </MenuList>
                        </Paper>
                    }
                    {this.state.speechError &&
                        <p id='searchError'>{this.state.errorMessage}</p>
                    }
                </section>
                <section id='user'>
                    {user.authenticated ?
                        <section id="iconSection" onMouseOver={this.handleToggle.bind(this)} onMouseOut={this.handleToggle.bind(this)} >
                            <UserIcon className={classes.userIcon} />
                            <Paper className={this.state.open ? classes.menu : classes.hide}>
                                <MenuList>
                                    <MenuItem><Link to='/profile' className={classes.color}>Profile</Link></MenuItem>
                                    {user.role === "admin" && <MenuItem><Link to='/appointment' className={classes.color}>View Appointments</Link></MenuItem>}
                                    <MenuItem onClick={this.logout.bind(this)} className={classes.color}>Logout</MenuItem>
                                </MenuList>
                            </Paper>
                        </section> :
                        <React.Fragment>
                            <Link to='/login'>Login</Link>
                            <Link to='/register'>SignUp</Link>
                        </React.Fragment>}
                    <Link to='/makeAnAppointment'>Book An Appointment</Link>
                    <Link to="/Cartview">
                        <span>Cart<span id="cartItem">({user.cartCount})</span></span>
                    </Link>
                </section>
                <section className="navigation">
                    <Link to='/'>Home</Link>
                    <Link to='/product'>Products</Link>
                    <Link to='/service'>Service & Repair</Link>
                    <Link to='/research'>Car Care</Link>
                </section>
                {redirect}
            </header>
        )
    }
}

export default withStyles(styles)(Header)