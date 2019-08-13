import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './productsview.css';

var viewProducts = {
    "Oil": [
        {
            id: 1,
            image: require('../../images/oil/image1.jpg'),
            name: 'Mobil 1'
        },
        {
            id: 2,
            image: require('../../images/oil/image2.jpg'),
            name: 'Castrol GTX'
        },
        {
            id: 3,
            image: require('../../images/oil/image3.jpg'),
            name: 'Edge'
        },
        {
            id: 4,
            image: require('../../images/oil/image4.jpg'),
            name: 'Advance AX5'
        },
        {
            id: 5,
            image: require('../../images/oil/image5.jpg'),
            name: 'Royal Purple'
        },
        {
            id: 6,
            image: require('../../images/oil/image6.jpg'),
            name: 'Quacket state'
        },
        {
            id: 7,
            image: require('../../images/oil/image7.jpg'),
            name: 'V ATV'
        },
        {
            id: 8,
            image: require('../../images/oil/image8.jpg'),
            name: 'Shell Rotella'
        },
        {
            id: 9,
            image: require('../../images/oil/image9.jpg'),
            name: 'Pennozil'
        },
        {
            id: 10,
            image: require('../../images/oil/image10.jpg'),
            name: 'Chevron'
        }
    ],
    "Shocks&Suspension": [
        {
            id: 1,
            image: require('../../images/suspension/image1.jpg'),
            name: 'Shocks and Struts- Front'
        },
        {
            id: 2,
            image: require('../../images/suspension/image2.jpg'),
            name: 'Shocks and Struts- Rear'
        },
        {
            id: 3,
            image: require('../../images/suspension/image3.jpg'),
            name: 'Control Arms'
        },
        {
            id: 4,
            image: require('../../images/suspension/image4.jpg'),
            name: 'Chassis'
        },
        {
            id: 5,
            image: require('../../images/suspension/image5.jpg'),
            name: 'Tie Rods'
        },
        {
            id: 6,
            image: require('../../images/suspension/image6.jpg'),
            name: 'Quacket state'
        },
        {
            id: 7,
            image: require('../../images/suspension/image7.jpg'),
            name: 'Coil Springs'
        },
        {
            id: 8,
            image: require('../../images/suspension/image8.jpg'),
            name: 'Shell Rotella'
        },
        {
            id: 9,
            image: require('../../images/suspension/image9.jpg'),
            name: 'Power Steering'
        }
    ],
    "Accessories": [
        {
            id: 1,
            image: require('../../images/accessories/image1.jpg'),
            name: 'Comfort New'
        },
        {
            id: 2,
            image: require('../../images/accessories/image2.jpg'),
            name: 'Power Saver'
        },
        {
            id: 3,
            image: require('../../images/accessories/image3.jpg'),
            name: 'Car Cover'
        },
        {
            id: 4,
            image: require('../../images/accessories/image4.jpg'),
            name: 'Mirror New'
        },
        {
            id: 5,
            image: require('../../images/accessories/image5.jpg'),
            name: 'Royal Seat'
        },
        {
            id: 6,
            image: require('../../images/accessories/image6.jpg'),
            name: 'Quacket Steering'
        },
        {
            id: 7,
            image: require('../../images/accessories/image7.jpg'),
            name: 'V ATV Power Saver'
        },
        {
            id: 8,
            image: require('../../images/accessories/image8.jpg'),
            name: 'Shell Rotella'
        }
    ],
    "Brakes": [
        {
        id: 1,
        image: require('../../images/brakes/image1.jpg'),
        name: 'Front Brake Pads'
    },
    {
        id: 2,
        image: require('../../images/brakes/image2.jpg'),
        name: 'Brake Pad & Rotor Kits'
    },
    {
        id: 3,
        image: require('../../images/brakes/image3.jpg'),
        name: 'Front Brake Rotors'
    },
    {
        id: 4,
        image: require('../../images/brakes/image4.jpg'),
        name: 'Calipers, Hoses'
    },
    {
        id: 5,
        image: require('../../images/brakes/image5.jpg'),
        name: 'Rear Brake Pads'
    },
    {
        id: 6,
        image: require('../../images/brakes/image6.jpg'),
        name: 'Brake Pad- Rear'
    },
    {
        id: 7,
        image: require('../../images/brakes/image7.jpg'),
        name: 'Rear Brake Rotors'
    },
    {
        id: 8,
        image: require('../../images/brakes/image8.jpg'),
        name: 'Calipers, Hoses'
    },
    {
        id: 9,
        image: require('../../images/brakes/image9.jpg'),
        name: 'Wheel Bearings'
    },
    {
        id: 10,
        image: require('../../images/brakes/image10.jpg'),
        name: 'Master Cylinders'
    }],
    "Tires": [
        {
            id: 1,
            image: require('../../images/tires/image1.jpg'),
            name: 'Tire New'
        },
        {
            id: 2,
            image: require('../../images/tires/image2.jpg'),
            name: 'Tread Patterns'
        },
        {
            id: 3,
            image: require('../../images/tires/image3.jpg'),
            name: 'Royal AX5'
        },
        {
            id: 4,
            image: require('../../images/tires/image4.jpg'),
            name: 'MRF'
        },
        {
            id: 5,
            image: require('../../images/tires/image5.jpg'),
            name: 'JK Tires'
        },
        {
            id: 6,
            image: require('../../images/tires/image6.jpg'),
            name: 'Yokomaha'
        },
        {
            id: 7,
            image: require('../../images/tires/image7.jpg'),
            name: 'MICHELIN'
        },
        {
            id: 8,
            image: require('../../images/tires/image8.jpg'),
            name: 'Good Year'
        },
        {
            id: 9,
            image: require('../../images/tires/image9.jpg'),
            name: 'BFGoodRich'
        }
    ],
    "Batteries": [
        {
            id: 1,
            image: require('../../images/battery/image1.jpg'),
            name: 'Battery New'
        },
        {
            id: 2,
            image: require('../../images/battery/image2.jpg'),
            name: 'GTX Advance'
        },
        {
            id: 3,
            image: require('../../images/battery/image3.jpg'),
            name: 'Edge'
        },
        {
            id: 4,
            image: require('../../images/battery/image4.jpg'),
            name: 'Battery AX5'
        },
        {
            id: 5,
            image: require('../../images/battery/image5.jpg'),
            name: 'Purple New'
        },
        {
            id: 6,
            image: require('../../images/battery/image6.jpg'),
            name: 'State Fashion'
        },
        {
            id: 7,
            image: require('../../images/battery/image7.png'),
            name: 'VM Battery'
        },
        {
            id: 8,
            image: require('../../images/battery/image8.jpg'),
            name: 'Rotella New'
        },
        {
            id: 9,
            image: require('../../images/battery/image9.jpg'),
            name: 'CKL Life'
        },
        {
            id: 10,
            image: require('../../images/battery/image10.jpg'),
            name: 'Dream One'
        },
        {
            id: 11,
            image: require('../../images/battery/image9.jpg'),
            name: 'Life time'
        },
        {
            id: 12,
            image: require('../../images/battery/image10.jpg'),
            name: 'Trend New'
        }
    ],
    "Mirrors": [
        {
            id: 1,
            image: require('../../images/mirrors/image1.jpg'),
            name: 'One time'
        },
        {
            id: 2,
            image: require('../../images/mirrors/image2.jpg'),
            name: 'GTX'
        },
        {
            id: 3,
            image: require('../../images/mirrors/image3.jpg'),
            name: 'JKL'
        },
        {
            id: 4,
            image: require('../../images/mirrors/image4.jpg'),
            name: 'Advance Style'
        },
        {
            id: 5,
            image: require('../../images/mirrors/image5.jpg'),
            name: 'Royal Purple'
        },
        {
            id: 6,
            image: require('../../images/mirrors/image6.jpg'),
            name: 'Quacket Style'
        },
        {
            id: 7,
            image: require('../../images/mirrors/image7.jpg'),
            name: 'ATV New'
        },
        {
            id: 8,
            image: require('../../images/mirrors/image8.jpg'),
            name: 'Shell Fashion'
        }
    ],
    "Radiators": [
        {
            id: 1,
            image: require('../../images/radiator/image1.jpg'),
            name: 'Life time'
        },
        {
            id: 2,
            image: require('../../images/radiator/image2.jpg'),
            name: 'Super One'
        },
        {
            id: 3,
            image: require('../../images/radiator/image3.jpg'),
            name: 'Edge'
        },
        {
            id: 4,
            image: require('../../images/radiator/image4.jpg'),
            name: 'Advance AX5'
        },
        {
            id: 5,
            image: require('../../images/radiator/image5.jpg'),
            name: 'New Style'
        },
        {
            id: 6,
            image: require('../../images/radiator/image6.jpg'),
            name: 'Quacket time'
        },
        {
            id: 7,
            image: require('../../images/radiator/image7.jpg'),
            name: 'VCare'
        },
        {
            id: 8,
            image: require('../../images/radiator/image8.jpg'),
            name: 'Rotella'
        },
        {
            id: 9,
            image: require('../../images/radiator/image9.jpg'),
            name: 'Trendz'
        }
    ],
    "Belts&Hoses": [
        {
            id: 1,
            image: require('../../images/hoses/image1.jpg'),
            name: 'New Brand'
        },
        {
            id: 2,
            image: require('../../images/hoses/image2.jpg'),
            name: 'My style'
        },
        {
            id: 3,
            image: require('../../images/hoses/image3.jpg'),
            name: 'Its New'
        },
        {
            id: 4,
            image: require('../../images/hoses/image4.jpg'),
            name: 'QWS'
        },
        {
            id: 5,
            image: require('../../images/hoses/image5.jpg'),
            name: 'Zenpa'
        },
        {
            id: 6,
            image: require('../../images/hoses/image6.jpg'),
            name: 'Real One'
        },
        {
            id: 7,
            image: require('../../images/hoses/image7.jpg'),
            name: 'Indal'
        },
        {
            id: 8,
            image: require('../../images/hoses/image8.jpg'),
            name: 'OPL'
        }
    ],
    "Horns": [
    {
        id: 1,
        image: require('../../images/horns/image1.jpg'),
        name: 'Favourite'
    },
    {
        id: 2,
        image: require('../../images/horns/image2.jpg'),
        name: 'CTN'
    },
    {
        id: 3,
        image: require('../../images/horns/image3.jpg'),
        name: 'UIL'
    },
    {
        id: 4,
        image: require('../../images/horns/image4.jpg'),
        name: 'Advance One'
    },
    {
        id: 5,
        image: require('../../images/horns/image5.jpg'),
        name: 'HYO'
    },
    {
        id: 6,
        image: require('../../images/horns/image6.jpg'),
        name: 'Quacket state'
    },
    {
        id: 7,
        image: require('../../images/horns/image7.jpg'),
        name: 'New VT'
    }
    ],
    "Clutch": [
        {
            id: 1,
            image: require('../../images/clutch/image1.jpg'),
            name: 'One Time'
        },
        {
            id: 2,
            image: require('../../images/clutch/image2.jpg'),
            name: 'Life Style'
        },
        {
            id: 3,
            image: require('../../images/clutch/image3.jpg'),
            name: 'Edge'
        },
        {
            id: 4,
            image: require('../../images/clutch/image4.jpg'),
            name: 'ASJ'
        },
        {
            id: 5,
            image: require('../../images/clutch/image5.jpg'),
            name: 'Royal Clutch'
        },
        {
            id: 6,
            image: require('../../images/clutch/image6.jpg'),
            name: 'State Demand'
        },
        {
            id: 7,
            image: require('../../images/clutch/image7.jpg'),
            name: 'ATV New'
        }
    ],
    "Ignition Coil Packs": [
        {
            id: 1,
            image: require('../../images/coilpacks/image1.jpg'),
            name: 'Its New'
        },
        {
            id: 2,
            image: require('../../images/coilpacks/image2.jpg'),
            name: 'GTX'
        },
        {
            id: 3,
            image: require('../../images/coilpacks/image3.jpg'),
            name: 'SDY'
        },
        {
            id: 4,
            image: require('../../images/coilpacks/image4.jpg'),
            name: 'Advance One'
        },
        {
            id: 5,
            image: require('../../images/coilpacks/image5.jpg'),
            name: 'Purple Style'
        },
        {
            id: 6,
            image: require('../../images/coilpacks/image6.jpg'),
            name: 'Quacket One'
        },
        {
            id: 7,
            image: require('../../images/coilpacks/image7.jpg'),
            name: 'UTG'
        },
        {
            id: 8,
            image: require('../../images/coilpacks/image8.jpg'),
            name: 'Shell Rotella'
        },
        {
            id: 9,
            image: require('../../images/coilpacks/image9.jpg'),
            name: 'Brand New'
        }
    ],
    "Engine": [
        {
            id: 1,
            image: require('../../images/engine/image1.jpg'),
            name: 'Mobil 1 Brand'
        },
        {
            id: 2,
            image: require('../../images/engine/image2.jpg'),
            name: 'GTX'
        },
        {
            id: 3,
            image: require('../../images/engine/image3.jpg'),
            name: 'Edge'
        },
        {
            id: 4,
            image: require('../../images/engine/image4.jpg'),
            name: 'AX5'
        },
        {
            id: 5,
            image: require('../../images/engine/image5.jpg'),
            name: 'Hamara'
        },
        {
            id: 6,
            image: require('../../images/engine/image6.jpg'),
            name: 'Change New'
        },
        {
            id: 7,
            image: require('../../images/engine/image7.jpg'),
            name: 'JTM'
        },
        {
            id: 8,
            image: require('../../images/engine/image8.jpg'),
            name: 'Rotella'
        },
        {
            id: 9,
            image: require('../../images/engine/image9.jpg'),
            name: 'Life Long'
        },
        {
            id: 10,
            image: require('../../images/engine/image10.jpg'),
            name: 'Chevron'
        }
        ,
        {
            id: 11,
            image: require('../../images/engine/image10.jpg'),
            name: 'STC'
        }
    ]
}

class ProductsView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedProduct: JSON.parse(sessionStorage.getItem("selectedProduct"))
        }
    }

    select(info) {
        sessionStorage.setItem("selectedDetailViewProduct",JSON.stringify(info));
    }

    render() {
        console.log("selectedProduct....." + this.state.selectedProduct)
        return (
            <section id='productsViewContainer'>
                <h2>{JSON.parse(sessionStorage.getItem("selectedProduct"))}</h2>
                {viewProducts[JSON.parse(sessionStorage.getItem("selectedProduct"))].map(
                    (data) => (
                        <div>
                            <Link className='products' to={`/productdetailview/:${data.id}`} key={data.id} onClick={this.select.bind(this,data)}>
                                <img src={data.image} alt='image not found' />
                                <p>{data.name}</p>
                            </Link>
                        </div>
                    )
                )}
            </section>
        )
    }
}

export default ProductsView;