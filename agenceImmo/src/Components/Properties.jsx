import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Properties.css';
import pic1 from '../img/pic1.png';
import pic2 from '../img/pic2.png';
import pic3 from '../img/pic3.png';

import pic4 from '../img/pic4.png';
import pic5 from '../img/pic5.png';
import pic6 from '../img/pic6.png';


export default function Main() {

    const motels = [
        {
            img: pic1,
            room: '1450 Cloudcroft drop',
            city: 'Illinois / Chicago',
            price: '$250,000',
            spec: {
                adress:'3560 Sq Ft',
                bedroom:' 1 bedroom',
                bathroom:'1 bathroom'

            }
        },

        {
            img: pic2,
            room: '140 Small Village',
            city: 'Missouri / Kansas City',
            price: '$200,000',
            spec: {
                adress:'3200 Sq Ft',
                bedroom:'3 bedroom',
                bathroom:'1 bathroom'

            }
        },
        
        {
            img: pic3,
            room: '1250 Lake House',
            city: 'Colorado / Denver',
            price: '$339,000',
            spec: {
                adress:' 3400 Sq Ft ',
                bedroom:' 4 bedroom ',
                bathroom:' 2 bathroom '

            }
        },
    
        {
            img: pic4,
            room: '1500 Palace Suit',
            city: 'Chicago / New York',
            price: '$350,000',
            spec: {
                adress:'2560 Sq Ft',
                bedroom:' 3bedroom',
                bathroom:'5 bathroom'

            }
        },

        {
            img: pic5,
            room: '150 Fox Street',
            city: 'Texas / Los Angeles',
            price: '$500,000',
            spec: {
                adress:'2000 Sq Ft',
                bedroom:'3 bedroom',
                bathroom:'3 bathroom'

            }
        },
        
        {
            img: pic6,
            room: '670 Alien Street',
            city: 'Colorado / Cancas',
            price: '$500, 000',
            spec: {
                adress:' 3400 Sq Ft ',
                bedroom:' 4 bedroom ',
                bathroom:' 2 bathroom '

            }
        },
    ]
    const navigate = useNavigate();
    function n(motel){
        navigate("/home")
        localStorage.setItem('motel', JSON.stringify(motel));

    }


    const [change, setChange] = useState(motels);
    
    return (
        <div className="Bigmain">
            <div className="main">
                <h1><span>Featured</span>Properties</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, ullam.</p>
                <div className="catalogue">
                    {change.map((motel) => 
                        <div onClick={() => n(motel)} className="box-catalogue">  
                            <img className="imgCatalogue" src={motel.img} alt="" />
                            <div className="roomTitle">
                                <h2>{motel.room}</h2>
                                <p>{motel.city}</p>
                                <span>{motel.price}</span>
                                <div className="city">
                                    <ul>
                                        <li>
                                            {motel.spec.adress}
                                        </li>

                                        <li>
                                            {motel.spec.bedroom}
                                        </li>

                                        <li>
                                            {motel.spec.bathroom}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                    
                </div>
                <div className="main-btn">
                    <a onClick={() => setChange((arr) => [...arr, ...motels])} className="btn">MORE PROPERTIES</a>
                    <a onClick={() => setChange((arr) => [...arr, ...motels])} className="btn">ALL PROPERTIES</a>
                </div>
            </div>
        </div>
    )
}
