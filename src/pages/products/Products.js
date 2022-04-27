import React from 'react';
import { Container } from 'react-bootstrap';
import "./Products.css";
import amala from '../../assets/amala.jpg'
import eba from '../../assets/eba.jpg'
import abula from '../../assets/abula.jpg'
import eko from '../../assets/eko.jpg'
import fufu from '../../assets/fufu.jpg'
import iyan from '../../assets/iyan.jpg'
import moimoi from '../../assets/moi-moi.jpg'
import ogi from '../../assets/ogi.jpg'
import rice from '../../assets/rice.jpg'
import efo from '../../assets/efo riro.jpg'

const Products = () => {

    const foods = [
        {id: 1, foodname: 'Amala', Image: amala, Price: '#1500'},
        {id: 2, foodname: 'Abula', Image: abula, Price: '#1000'},
        {id: 3, foodname: 'Eba', Image: eba, Price: '#1350'},
        {id: 4, foodname: 'Eko & Moi-moi', Image: eko, Price: '#1100'},
        {id: 5, foodname: 'Fufu', Image: fufu, Price: '#1500'},
        {id: 6, foodname: 'Iyan', Image: iyan, Price: '#2500'},
        {id: 7, foodname: 'Moi-moi', Image: moimoi, Price: '#500'},
        {id: 8, foodname: 'Ogi-Akara', Image: ogi, Price: '#1000'},
        {id: 9, foodname: 'Jollof-Rice', Image: rice, Price: '#1200'},
        {id: 10, foodname: 'Efo Riro', Image: efo, Price: '#1200'}
      ]

    return (
        <Container className="py-3 px-5" id="products-page">
            <h1>Products Page</h1>
            <div className="row p-3 align-items-center">
            {
          foods && foods.map((food)=>
            <div key={food.id} className='cards col-md-4 col-sm-6 col-lg-3'>
              <div className='incards p-3'>
                  <div className='img'>
                    <img className="img-fluid" src={food.Image} alt=''  />
                  </div>
                  <h4>{food.foodname} </h4>
                  <h4>{food.Price} </h4>
                  <button className="Add-to-cart"> ADD TO CART</button>
              </div>
            </div> 
          )
        }
        </div>
        </Container>
    )
}

export default Products
