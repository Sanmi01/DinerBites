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
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                    </p>
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
