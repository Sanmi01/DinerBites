import React from 'react';
import { Container } from 'react-bootstrap';
import "./Home.css"
import {Link} from 'react-router-dom';


const Home = () => {
    return (
        <Container className="py-3 px-5" id="home-page">
            <div className ="hero">
                <div className='hero__content'>
                    <div className='hero__text'>
                        <h1>DinerBites</h1>
                        <h3>Exclusive kitchen</h3>
                        <p>Craving some delicious food? Maybe you’re in the mood for a juicy steak? No matter what kind of meal you have in mind, <br />DinerBites is ready to prepare it for you.
                        </p>
                        <Link to="/products"><button> Order Now</button></Link>
                        

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
