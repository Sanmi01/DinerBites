import React from 'react';
import { Container } from 'react-bootstrap';
import "./Products.css";
import French from '../../assets/foreign/French.2jpg.png'
import { Link } from 'react-router-dom';

const Products = () => {

    return (
        <Container className="py-3 px-5" id="products-page">
          <div className='prod'>
            <div className='prod-description'>
              <h1>
                Enjoy food all over the world
              </h1>
              <h6>
                Get all sorts of healthy and nourishing foods at a snap. We provide you with foreign and local delicacies. You can also make special requests for both big and small events with mouth watering discounts. Satisfy your cravings today.
              </h6>
              <p>
                Get it fast.... get it cheap
              </p>
              <div className='prod-list'>
                  <ul>
                     <Link className='prodList-link' to='/Local'>
                     <li>Local foods </li>
                     </Link>
                      <li> <span>|</span></li>
                      <Link className='prodList-link' to='/foreign'>
                        <li>Foreign foods</li>
                      </Link>
                  </ul>
                </div>
                
            </div>
            <div className='prod-image'>
              <img src={French} alt=''/>
            </div>
          </div>  
        </Container>
    )
}

export default Products
