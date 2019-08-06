import React, { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import i1 from '../../images/carparts6.jpg';
import i2 from '../../images/carparts8.jpg';
import i3 from '../../images/carparts1.jpg';
import i4 from '../../images/carparts2.jpg';
import i5 from '../../images/carparts3.jpg';
import i6 from '../../images/carparts4.jpg';
import i7 from '../../images/mirrors.jpg';
import i8 from '../../images/radiator.jpg';
import Car from '../../images/car2.jpg';
import Service from '../../images/repair.jpg';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id: 1,
                    image: i1,
                    name: 'Oil'
                },
                {
                    id: 2,
                    image: i2,
                    name: 'Shocks&Suspension'
                },
                {
                    id: 3,
                    image: i3,
                    name: 'Accessories'
                },
                {
                    id: 4,
                    image: i4,
                    name: 'Brakes'
                },
                {
                    id: 5,
                    image: i5,
                    name: 'Tires'
                },
                {
                    id: 6,
                    image: i6,
                    name: 'Batteries'
                },
                {
                    id: 7,
                    image: i7,
                    name: 'Mirrors'
                },
                {
                    id: 8,
                    image: i8,
                    name: 'Radiators'
                }
            ],
            productSelected: false
        }
    }

    // componentDidMount() {
    //     fetch('http://localhost:3001/',
    //         {
    //            method:'GET'
    //         }
    //     )
    //         .then((res) => {
    //             // console.log("json...",res.json());
    //             return res.json();
    //         })
    //         .then((data) => console.log('Response recieved successfully...', data))
    //         .catch((err) => console.log('Something went wrong while getting response'))
    // }

    select(info) {
        sessionStorage.setItem("selectedProduct",JSON.stringify(info));
    }
    render() {
        return (
            <div id="homePage">
                <section id='imageSection'>
                    <img src={Car} alt='car' />
                    <img src={Service} alt='car' />
                </section>
                <section id='recommendedProducts'>
                    <h2>POPULAR CATEGORIES</h2>
                    {this.state.data.map(
                        (data) => (
                            <div>
                                <Link className='products' to={`/productview/:${data.id}`} key={data.id} onClick={() => this.select(data.name)}>
                                    <img src={data.image} alt='image not found' />
                                    <p>{data.name}</p>
                                </Link>
                            </div>
                        )
                    )}
                </section>

            </div>
        );
    }
}
export default Home;

