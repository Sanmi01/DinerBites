import React from 'react';
import { Container } from 'react-bootstrap';
import "./Home.css"


const Home = () => {
    return (
        <Container className="vh-100 py-3 px-5" id="home-page">
            <div className ="hero">
                <div className='hero__content'>
                    <div className='hero__text'>
                        <h1>DinerBites</h1>
                        <h3>Exclusive kitchen</h3>
                        <p>Our Restaurant meals provide larger 
                            portion sizes and many more calories, Our Restaurant meals provide larger 
                            portion sizes and many more calories
                        </p>
                        <button> Order Now</button>
                        

                    </div>


                </div>

            </div>
            <div className='portfolio'>
                <h2>We are the best at what we do and our delivery services is top rated</h2>
                <hr></hr>

            </div>
            


        </Container>
    )
}

export default Home;
