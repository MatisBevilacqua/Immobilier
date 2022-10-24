import React, { useState } from "react";
import { Link } from "react-router-dom";
import pic1 from '../img/pic1.png';
import pic2 from '../img/pic2.png';
import pic3 from '../img/pic3.png';

import pic4 from '../img/pic4.png';
import pic5 from '../img/pic5.png';
import pic6 from '../img/pic6.png';
import '../home.css';

export default function Home() {

    let room = JSON.parse(localStorage.getItem('motel')).room;
    let city = JSON.parse(localStorage.getItem('motel')).city;
    let price = JSON.parse(localStorage.getItem('motel')).price;
    let img = JSON.parse(localStorage.getItem('motel')).img;
    let adress = JSON.parse(localStorage.getItem('motel')).spec.adress;
    let bedroom = JSON.parse(localStorage.getItem('motel')).spec.bedroom;
    let bathroom = JSON.parse(localStorage.getItem('motel')).spec.bathroom;

    const [imageChange, setImageChange] = useState(img);

    return (
        <div className="Bigmain">
            <div className="main">
                <h1><span>Featured</span>Properties</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, ullam.</p>  

                <div className="homePresentation">
                    <div className="slide">
                        <img className="slideImg" src={imageChange} alt=""></img>
                        <div className="littleSlide">
                            <div className="box">
                                <img onClick={() => 
                                    setImageChange(pic1)
                                } className="img"  src={pic1} alt="l'image charge"></img>
                            </div>
                            <div className="box">
                                <img onClick={() => 
                                    setImageChange(pic2)
                                } className="img"  src={pic2} alt="l'image charge"></img>
                            </div>
                            <div className="box">
                            <img onClick={() => 
                                    setImageChange(pic3)
                                } className="img"  src={pic3} alt="l'image charge"></img>
                            </div>
                            <div className="box">
                            <img onClick={() => 
                                    setImageChange(pic4)
                                } className="img"  src={pic4} alt="l'image charge"></img>
                            </div>

                            <div className="box">
                            <img onClick={() => 
                                setImageChange(pic5)
                                } className="img"  src={pic5} alt="l'image charge"></img>
                            </div>
                        </div>
                    </div>

                    <div className="text">
                        <h1>{room}</h1>
                        <p>{city}</p>
                        <ul>
                            <li>{adress}</li>
                            <li>{bedroom}</li>
                            <li>{bathroom}</li>
                        </ul>
                        <span className="spanText">{price}</span>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}
