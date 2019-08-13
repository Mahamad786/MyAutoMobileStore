import React, { Component } from 'react';
import './products.css';
import { Link } from 'react-router-dom';
import i1 from '../../images/carparts6.jpg';
import i2 from '../../images/carparts8.jpg';
import i3 from '../../images/carparts1.jpg';
import i4 from '../../images/carparts2.jpg';
import i5 from '../../images/carparts3.jpg';
import i6 from '../../images/carparts4.jpg';
import i7 from '../../images/mirrors.jpg';
import i8 from '../../images/radiator.jpg';
import i9 from '../../images/belts.jpg';
import i10 from '../../images/horns.jpg';
import i11 from '../../images/clutch.jpg';
import i12 from '../../images/ignitionCoilPacks.jpg';
import i13 from '../../images/engine.jpg';

class Product extends Component {
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
				},
				{
					id: 9,
					image: i9,
					name: 'Belts&Hoses'
				},
				{
					id: 10,
					image: i10,
					name: 'Horns'
				},
				{
					id: 11,
					image: i11,
					name: 'Clutch'
				},
				{
					id: 12,
					image: i12,
					name: 'Ignition Coil Packs'
				},
				{
					id: 13,
					image: i13,
					name: 'Engine'
				}
			],
			productSelected: false
		}
	}
	select(info) {
		//latest changes
		sessionStorage.setItem("selectedProduct",JSON.stringify(info));
	}
	render() {
		return (
			<div className="productContainer">
				<h2>PRODUCTS</h2>
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
			</div>
		);
	}
}
export default Product;

