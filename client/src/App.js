import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Product from './components/products/products.js';
import ProductsView from './components/productsview/productsview.js';
import Checkout from './components/checkout/checkout.js';
import Cart from './components/cart/cart.js';
import Cartview from './components/cart/cartview.js';
import Header from './components/header/header.js';
import Footer from './components/footer/Footer.js';
import Home from './components/home/home.js';
import Login from './components/Login/Login.js';
import Registration from './components/Registration/Registration.js';
import MakeAnAppointment from './components/MakeAnAppointment/MakeAnAppointment.js';
import Service from './components/Service/Service.js';
import Research from './components/Research/Research.js';
import Synthetic from './components/Service/SyntheticMotor.js';
import HighMileage from './components/Service/HighMileage.js';
import Profile from './components/profile/Profile.js';
import ForgotPassword from './components/ForgotPassword/ForgotPassword.js';
import ViewAppointments from './components/Appointment/ViewAppointments.js';
import ProductsDetailView from './components/productsdetailview/productsdetailview.js';

class App extends Component {
  constructor(props) {
    super(props)
    if (!localStorage.cartItem) {
      localStorage.cartItem = 0;
    }
  }
  cartview() {
    console.log(this.props)
    this.props.location = '/Cartview';
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <section id='mainContainer'>
            <Route exact path='/' component={Home} />
            <Route exact path='/product' component={Product} />
            <Route exact path='/productview/:id' component={ProductsView} />
            <Route exact path='/Checkout' component={Checkout} />
            <Route exact path='/Cart' component={Cart} />
            <Route exact path='/Cartview' component={Cartview} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Registration} />
            <Route exact path='/makeAnAppointment' component={MakeAnAppointment} />
            <Route exact path='/service' component={Service} />
            <Route exact path='/research' component={Research}/>
            <Route exact path='/synthetic' component={Synthetic}/>
            <Route exact path='/mileage' component={HighMileage}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/forgotpassword' component={ForgotPassword}/>
            <Route exact path='/appointment' component={ViewAppointments}/>
            <Route exact path='/productdetailview/:id' component={ProductsDetailView} />
          </section>
         <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
