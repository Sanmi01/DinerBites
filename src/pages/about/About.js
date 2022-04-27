import React from 'react';
import { Container } from 'react-bootstrap';
import "./About.css";
import resImage from "../../assets/about-res-img.jpg";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <Container className="py-3 px-5" id="about-page">
            <div className="row p-3 align-items-center">
                <div className="col-md-6 p-3">
                    <h4>Our Story</h4>
                    <h2>Few words about us</h2>
                    <hr />
                    <p>Since 1973, DinerBites has been the go-to diner for a lot of people. Our diner serves breakfast all day, in addition to wholesome and flavorful dining options for lunch and dinner. From burgers to salads, seafood to pastas, you’ll find all kinds of hearty meals prepared fresh at The Spot Restaurant. Our diner also has a full bakery with delicious baked goods and other treats, including our famous cheesecake. Sounds delicious, right?

We’re here to serve you the best food around, whenever you’re looking for a great experience.</p>
                    <Link className="product-button" to="/products">Explore Our Menu</Link>
                </div>
                <div className="col-md-6 p-3">
                    <img className="img-fluid" src={resImage} />
                </div>
            </div>
        </Container>
    )
}

export default About
